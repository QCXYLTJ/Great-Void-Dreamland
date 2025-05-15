'use strict';
window.txhjModeImport(function (lib, game, ui, get, ai, _status, config) {
	//------------------------//
	lib.skill._txhj_skill_maxCards = {
		mod: {
			ignoredHandcard(card, player) {
				if (card.hasGaintag('牌库')) {
					return true;
				}
			},
			cardDiscardable(card, player, name) {
				if (name == 'phaseDiscard' && card.hasGaintag('牌库')) {
					return false;
				}
			},
			maxHandcardBase(player, num) {
				if (get.mode() == 'taixuhuanjing' && lib.config.taixuhuanjing) {
					return 3;
				}
			},
			maxHandcard(player, num) {
				if (player == game.me && get.mode() == 'taixuhuanjing' && lib.config.taixuhuanjing) {
					return num + lib.config.taixuhuanjing.maxHs;
				}
			},
		},
	};
	lib.skill._txhj_skill_Timelimit = {
		trigger: {
			global: 'roundStart',
		},
		forced: true,
		filter(event, player) {
			return get.mode() == 'taixuhuanjing' && player == game.me;
		},
		content() {
			var event1 = _status.TaiXuHuanJingGame.event;
			var event2 = game.eventPack[event1.season][event1.chapter][event1.id];
			if (event2.type == 'main' || event2.type == 'micheng' || event2.type == 'dungeons' || event2.type == 'side' || event2.type == 'boss' || event2.type == 'Ultimate') {
				if (event2.target == 'repair') {
					for (var i of game.players) {
						if (i.side == true && i != game.me) {
							if (i.hp == i.maxHp && i.exten && i.exten.type == 'boss') {
								game.TaiXuHuanJingState(true);
								return;
							}
						}
					}
				}
				if (event2.max > 1 && game.roundNumber > event2.max) {
					if (event2.target == 'subsist') {
						game.TaiXuHuanJingState(true);
						return;
					}
					game.TaiXuHuanJingState(false);
					return;
				}
			}
		},
	};
	lib.skill._txhj_skill_addEffectStyle = {
		trigger: {
			player: 'enterGame',
			global: 'gameStart',
		},
		usable: 1,
		forced: true,
		popup: false,
		_priority: 16,
		filter(event, player) {
			return get.mode() == 'taixuhuanjing' && player == game.me;
		},
		content() {
			player.buff = {};
			const buffBox = document.createElement('div');
			buffBox.classList.add('playerbuffstyle2');
			txhj.createBuff = function (ele, name) {
				const buff = game.buffPack[name];
				const img = new Image();
				img.classList.add('SLBuff');
				img.src = txhjPack.path + `/image/buff/${name}.png`;
				img.setAttribute('id', name);
				const desc = document.createElement('div');
				desc.classList.add('SLBuffDesc');
				desc.innerHTML = `<p style='color: gold;margin: 2%;'>${buff.name}</p>` + `<p style='margin: 2%;'>${buff.info}</p>`;
				desc.style.display = 'none';
				img.desc = desc;
				document.body.appendChild(desc);
				img.addEventListener('click', function () {
					event.cancelBubble = true;
					event.returnValue = false;
					return false;
				});
				img.onmouseover = function () {
					this.desc.style.display = 'block';
				};
				img.onmouseout = function () {
					this.desc.style.display = 'none';
				};
				img.update = function () {
					this.classList.add('SLBuffAnim');
					const that = this;
					setTimeout(function () {
						that.classList.remove('SLBuffAnim');
					}, 1000);
				};
				img.remove = function () {
					this.desc.remove();
					const t = this;
					t.parentNode.removeChild(t);
					delete game.me.buff[name];
				};
				player.buff[name] = img;
				ele.appendChild(img);
			};
			const ssui = document.getElementsByClassName('skill-control');
			if (ssui.length) {
				ssui[0].getElementsByClassName('trigger')[0].style.float = 'right';
				ssui[0].insertBefore(buffBox, ssui[0].firstChild);
			} else {
				buffBox.classList.remove('playerbuffstyle2');
				buffBox.classList.add('playerbuffstyle3');
				player.appendChild(buffBox);
			}
			player.buff.update = function () {
				for (const buff of lib.config.taixuhuanjing.buff) {
					if (player.buff[buff]) continue;
					if (!game.buffPack[buff]) continue;//QQQ
					txhj.createBuff(buffBox, buff);
				}
			};
			game.me.buff.update();
		},
	};
	//------------------------------------//
	//--------------------------------------------------------------//
	if (get.mode() == 'taixuhuanjing') {
		lib.skill._txhj_skill_gaincard = {
			trigger: { player: 'gainEnd' },
			forced: true,
			filter(event, player) {
				return event.cards?.length && player == game.me && _status.modeNode;
			},//QQQ
			content() {
				var num = trigger.cards.length;
				_status.modeNode.score.gaincard += num;
			},
		};
		lib.skill._txhj_skill_discard = {
			trigger: { player: 'discardAfter' },
			forced: true,
			filter(event, player) {
				return event.cards?.length && player == game.me && _status.modeNode;
			},
			content() {
				var num = trigger.cards.length;
				_status.modeNode.score.discard += num;
			},
		};
		lib.skill._txhj_skill_usecard = {
			trigger: { player: 'useCardAfter' },
			forced: true,
			filter(event, player) {
				return event.card && player == game.me && _status.modeNode;
			},
			content() {
				_status.modeNode.score.usecard++;
			},
		};
		lib.skill._txhj_skill_damage = {
			trigger: { global: 'damageEnd' },
			silent: true,
			filter(event, player) {
				return (event.source == game.me || event.player == game.me) && event.num > 0 && _status.modeNode;
			},
			content() {
				if (trigger.source == game.me) {
					_status.modeNode.score.damage += trigger.num;
				} else {
					_status.modeNode.score.damaged += trigger.num;
				}
			},
		};
		lib.skill._txhj_skill_zhoumujiashang = {
			trigger: {
				source: 'damageBegin1',
			},
			filter(event, player) {
				return lib.config.taixuhuanjing.gameplus > 1 && player.isEnemiesOf(game.me);
			},
			mode: ['taixuhuanjing'],
			forced: true,
			content() {
				var num = lib.config.taixuhuanjing.gameplus;
				var numto1 = num - 1;
				game.log(player, num + '周目伤害+' + numto1);
				trigger.num += numto1;
			},
		};
		lib.skill._txhj_skill_zhoumumiansi = {
			trigger: {
				player: 'dieBefore',
			},
			filter(event, player) {
				var event1 = _status.TaiXuHuanJingGame.event;
				var event2 = game.eventPack[event1.season][event1.chapter][event1.id];
				return event2.type == 'Ultimate' && lib.config.taixuhuanjing.gameplus > 1 && player.isEnemiesOf(game.me) && game.roundNumber <= 3;
			},
			mode: ['taixuhuanjing'],
			forced: true,
			content() {
				trigger.cancel();
				game.log(player, '触发了周目领主免死');
				if (player.hp < 1) player.hp = 1;
				player.update();
			},
		};
		lib.skill._txhj_skills_kill = {
			trigger: { source: 'dieBegin' },
			_priority: 999,
			forced: true,
			filter(event, player) {
				return event.source && player == game.me && event.source.isIn() && _status.modeNode;
			},
			content() {
				_status.modeNode.score.kill++;
			},
		};
		var txhjUseSkill = game.trySkillAudio;
		game.trySkillAudio = function (skill, player, directaudio) {
			txhjUseSkill(skill, player, directaudio);
			game.countPlayer(function (current) {
				var skills = [];
				if (current.hiddenSkills.length == 0) {
					if (current.name && !current.name2) {
						for (var i = 0; i < lib.character[current.name][3].length; i++) {
							skills.push(lib.character[current.name][3][i]);
						}
					}
					if (current.name && current.name2) {
						for (var i = 0; i < lib.character[current.name][3].length; i++) {
							skills.push(lib.character[current.name][3][i]);
						}
						for (var i = 0; i < lib.character[current.name2][3].length; i++) {
							skills.push(lib.character[current.name2][3][i]);
						}
					}
				}
				if (skills.includes(skill) && current == game.me && _status.modeNode) {
					_status.modeNode.score.skill++;
				}//QQQ
			});
		};
		//宝物栏效果
		var list = ['taipingyaoshu', 'chitu', 'zixin', 'dawan', 'jingfanma', 'dilu', 'zhuahuang', 'hualiu', 'jueying', 'txhj_liulongcanjia', 'txhj_juechenjinge'];
		list.forEach((i) => {
			lib.card[i].subtype = 'equip5';
		});
		lib.skill._txhj_equip5 = {
			trigger: {
				player: 'equipBegin',
			},
			charlotte: true,
			forced: true,
			firstDo: true,
			_priority: 1000,
			filter(event, player) {
				return (
					player.countCards('e', {
						subtype: 'equip5',
					}) >= 1 && get.subtype(event.card) == 'equip5'
				);
			},
			async content(event, trigger, player) {
				trigger.cancel();
				const card = trigger.cards[0];
				if (card) {
					player.vcardsMap?.equips.push(new lib.element.VCard(card));
					player.node.equips.appendChild(card);
					card.style.transform = '';
					card.node.name2.innerHTML = `${get.translation(card.suit)}${card.number} ${get.translation(card.name)}`;
				}
				const info = get.info(card, false);
				if (info.skills) {
					for (const i of info.skills) {
						player.addSkillTrigger(i);
					}
				}
				const cards = player.getCards('e', { subtype: get.subtype(card) });//没有trigger.card
				const num = cards.length - 2;
				if (num > 0) {
					const {
						result: { links },
					} = await player.chooseButton(['选择弃置', cards], num, true);
					if (links.length) {
						player.discard(links);
					}
				}
			},
			ai: {
				effect: {
					player(card, player, target) {
						if (
							player.countCards('e', {
								subtype: 'equip5',
							}) == 1 &&
							get.subtype(card) == 'equip5'
						)
							return [1, 10];
					},
				},
			},
		};
		lib.skill.twsidao = {
			audio: 2,
			trigger: {
				global: 'phaseBefore',
				player: 'enterGame',
			},
			forced: true,
			filter(event, player) {
				return (event.name != 'phase' || game.phaseNumber == 0) && !player.storage.twsidao;
			},
			content() {
				'step 0';
				player.chooseButton(['请选择你的初始法宝', [['txhj_lingbaoxianhu', 'txhj_taijifuchen', 'txhj_chongyingshenfu'], 'vcard']], true).set('ai', function (button) {
					return button.link[2] == 'txhj_chongyingshenfu' ? 2 : 1;
				});
				('step 1');
				if (result.bool) {
					var card = game.createCard2(result.links[0][2]);
					lib.inpile.add(result.links[0][2]);
					player.storage.twsidao = card;
					player.chooseUseTarget(card, 'nopopup', true);
				}
			},
			group: 'twsidao_equip',
		};
		lib.skill.twsidao_equip = {
			audio: 'twsidao',
			trigger: {
				player: 'phaseZhunbeiBegin',
			},
			forced: true,
			filter(event, player) {
				var card = player.storage.twsidao;
				return card && card.isInPile() && player.hasUseTarget(card);
			},
			content() {
				player.chooseUseTarget(player.storage.twsidao, 'nopopup', true);
			},
		};
		lib.translate.twsidao_equip = '司道';
		lib.skill.polu = {
			audio: 2,
			trigger: {
				player: 'phaseZhunbeiBegin',
			},
			forced: true,
			filter(event, player) {
				if (!lib.inpile.includes('txhj_piliche')) return true;
				return !!get.cardPile(function (card) {
					return card.name == 'txhj_piliche';
				});
			},
			content() {
				var card;
				if (!lib.inpile.includes('txhj_piliche')) {
					card = game.createCard2('txhj_piliche', 'diamond', 1);
					lib.inpile.push('txhj_piliche');
				} else
					card = get.cardPile(function (card) {
						return card.name == 'txhj_piliche';
					});
				player.chooseUseTarget(card, true, 'nopopup');
			},
			group: 'polu_damage',
		};
		lib.skill.polu_damage = {
			trigger: {
				player: 'damageEnd',
			},
			forced: true,
			filter(event, player) {
				return !player.getEquip('txhj_piliche');
			},
			content() {
				'step 0';
				event.count = trigger.num;
				('step 1');
				event.count--;
				player.draw();
				('step 2');
				var card = get.cardPile2(function (card) {
					return get.subtype(card, false) == 'equip1' && player.canUse(card, player);
				});
				if (card) player.chooseUseTarget(card, true, 'nopopup');
				('step 3');
				if (event.count > 0 && !player.getEquip('txhj_piliche')) event.goto(1);
			},
		};
		lib.translate.polu_damage = '破橹';
		//焚城掠土和卧龙秘策两个祝福
		lib.card.huogong = {
			audio: true,
			fullskin: true,
			type: 'trick',
			enable: true,
			filterTarget(card, player, target) {
				return target.countCards('h') > 0;
			},
			content() {
				'step 0';
				if (target.countCards('h') == 0) {
					event.finish();
					return;
				} else if (target.countCards('h') == 1) event._result = { cards: target.getCards('h') };
				else
					target.chooseCard(true).ai = function (card) {
						if (_status.event.getRand() < 0.5) return Math.random();
						return get.value(card);
					};
				('step 1');
				target.showCards(result.cards).setContent(function () { });
				event.dialog = ui.create.dialog(get.translation(target) + '展示的手牌', result.cards);
				event.videoId = lib.status.videoId++;
				game.broadcast('createDialog', event.videoId, get.translation(target) + '展示的手牌', result.cards);
				game.addVideo('cardDialog', null, [get.translation(target) + '展示的手牌', get.cardsInfo(result.cards), event.videoId]);
				event.card2 = result.cards[0];
				game.log(target, '展示了', event.card2);
				game.addCardKnower(result.cards, 'everyone');
				event._result = {};
				var order;
				if (player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_wolongmice')) {
					game.log(player, '发动了【卧龙秘策】');
					if (player.buff) {
						player.buff.buff_txhj_wolongmice.update();
					}
					order = { color: get.color(event.card2) };
				} else {
					order = { suit: get.suit(event.card2) };
				}
				player
					.chooseToDiscard(order, function (card) {
						var evt = _status.event.parent;
						if (get.damageEffect(evt.target, evt.player, evt.player, 'fire') > 0) {
							return 6.2 + Math.min(4, evt.player.hp) - get.value(card, evt.player);
						}
						return -1;
					})
					.set('prompt', false);
				('step 2');
				if (result.bool) {
					if (player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_fenchengluetu')) {
						game.log(player, '触发了【焚城掠土】');
						if (player.buff) {
							player.buff.buff_txhj_fenchengluetu.update();
						}
						player.gain(event.card2, 'log', 'gain2');
					}
					target.damage('fire', event.baseDamage || 1);
				} else {
					target.addTempSkill('huogong2');
				}
				event.dialog.close();
				game.addVideo('cardDialog', null, event.videoId);
				game.broadcast('closeDialog', event.videoId);
			},
			ai: {
				basic: {
					order: 9.2,
					value: [3, 1],
					useful: 0.6,
				},
				wuxie(target, card, player, viewer, status) {
					if (get.attitude(viewer, player._trueMe || player) > 0) return 0;
					if (status * get.attitude(viewer, target) * get.effect(target, card, player, target) >= 0) return 0;
					if (_status.event.getRand('huogong_wuxie') * 4 > player.countCards('h')) return 0;
				},
				result: {
					player(player) {
						var nh = player.countCards('h');
						if (nh <= player.hp && nh <= 4 && _status.event.name == 'chooseToUse') {
							if (typeof _status.event.filterCard == 'function' && _status.event.filterCard(new lib.element.VCard({ name: 'huogong' }), player, _status.event)) {
								return -10;
							}
							if (_status.event.skill) {
								var viewAs = get.info(_status.event.skill).viewAs;
								if (viewAs == 'huogong') return -10;
								if (viewAs && viewAs.name == 'huogong') return -10;
							}
						}
						return 0;
					},
					target(player, target) {
						if (target.hasSkill('huogong2') || target.countCards('h') == 0) return 0;
						if (player.countCards('h') <= 1) return 0;
						if (target.isAllCardsKnown(player)) {
							if (
								!target.countCards('h', (card) => {
									return player.countCards('h', (card2) => {
										return get.suit(card2) == get.suit(card);
									});
								})
							) {
								return 0;
							}
						}
						if (target == player) {
							if (typeof _status.event.filterCard == 'function' && _status.event.filterCard(new lib.element.VCard({ name: 'huogong' }), player, _status.event)) {
								return -1.15;
							}
							if (_status.event.skill) {
								var viewAs = get.info(_status.event.skill).viewAs;
								if (viewAs == 'huogong') return -1.15;
								if (viewAs && viewAs.name == 'huogong') return -1.15;
							}
							return 0;
						}
						return -1.15;
					},
				},
				tag: {
					damage: 1,
					fireDamage: 1,
					natureDamage: 1,
					norepeat: 1,
				},
			},
		};
		//替换国风玉袍
		lib.skill.guofengyupao = {
			equipSkill: true,
			mod: {
				targetEnabled(card, player, target, now) {
					if (target.hasSkillTag('unequip2')) return;
					if (player == target || get.type(card) != 'trick') return;
					if (
						player.hasSkillTag('unequip', false, {
							name: card ? card.name : null,
							target: target,
							card: card,
						}) ||
						player.hasSkillTag('unequip', false, {
							name: card ? card.name : null,
							target: target,
							card: card,
						})
					)
						return;
					return false;
				},
			},
		};
		//太极拂尘——拂尘荡魔+深寒雪饮
		lib.skill.gx_taijifuchen = {
			trigger: {
				player: 'useCardToPlayered',
			},
			forced: true,
			equipSkill: true,
			filter(event, player) {
				return event.card && event.card.name == 'sha';
			},
			logTarget: 'target',
			content() {
				'step 0';
				event.count = 1;
				('step 1');
				var suit = get.suit(trigger.card);
				var num = trigger.target.countCards('h', 'shan');
				var next = trigger.target
					.chooseToDiscard('弃置一张牌,或不能响应' + get.translation(trigger.card), 'he')
					.set('ai', function (card) {
						var num = _status.event.num;
						if (num == 0) return 0;
						if (card.name == 'shan') return num > 1 ? 2 : 0;
						return (get.suit(card) != _status.event.suit ? 9 : 6) - get.value(card);
					})
					.set('num', num);
				if (lib.suit.includes(suit)) {
					next.set('prompt2', `若弃置的是${get.translation(suit)}牌,则改为${get.translation(player)}获得之`);
					next.set('suit', suit);
				}
				('step 2');
				if (result.bool) {
					var card = result.cards[0];
					if (get.suit(card, trigger.target) == get.suit(trigger.card, false) && get.position(card) == 'd') {
						player.gain(card, 'gain2');
					} else {
						if (lib.config.taixuhuanjing.buff.includes('buff_txhj_shenhanxueyin') && player == game.me) {
							if (player.buff) {
								player.buff.buff_txhj_shenhanxueyin.update();
							}
							game.log(player, '触发了【深寒雪饮】');
							player.gain(card, 'gain2');
						}
					}
					if (event.count > 0) {
						game.log(player, '发动了【拂尘荡魔】');
						if (player.buff) {
							player.buff.buff_txhj_fuchendangmo.update();
						}
						event.count--;
						event.goto(1);
					} else {
						event.finish();
					}
				} else {
					trigger.directHit.add(trigger.target);
				}
			},
		};
		//寒冰剑—拂尘荡魔+深寒雪饮
		lib.skill.hanbing_skill = {
			equipSkill: true,
			trigger: {
				source: 'damageBegin2',
			},
			audio: true,
			filter(event, player) {
				return event.card && event.card.name == 'sha' && event.notLink() && event.player.getCards('he').length;
			},
			check(event, player) {
				var target = event.player;
				var eff = get.damageEffect(target, player, player, event.nature);
				if (get.attitude(player, target) > 0) {
					if (eff >= 0) return false;
					return true;
				}
				if (eff <= 0) return true;
				if (target.hp == 1) return false;
				if (event.num > 1 || player.hasSkill('tianxianjiu') || player.hasSkill('luoyi2') || player.hasSkill('reluoyi2')) return false;
				if (target.countCards('he') < 2) return false;
				var num = 0;
				var cards = target.getCards('he');
				if (Array.isArray(cards))
					for (var i of cards) {
						if (get.value(i) > 6) num++;
					}
				if (num >= 2) return true;
				return false;
			},
			logTarget: 'player',
			content() {
				'step 0';
				trigger.cancel();
				if (lib.config.taixuhuanjing.buff.includes('buff_txhj_fuchendangmo') && player == game.me) {
					if (player.buff) {
						player.buff.buff_txhj_fuchendangmo.update();
					}
					game.log(player, '触发了【拂尘荡魔】');
					event.count = 2;
				} else {
					event.count = 1;
				}
				('step 1');
				if (trigger.player.countDiscardableCards(player, 'he')) {
					player.line(trigger.player);
					player.discardPlayerCard('he', trigger.player, true);
				} else {
					event.finish();
				}
				('step 2');
				if (result.bool && lib.config.taixuhuanjing.buff.includes('buff_txhj_shenhanxueyin')) {
					var card = result.cards[0];
					if (player.buff) {
						player.buff.buff_txhj_shenhanxueyin.update();
					}
					game.log(player, '触发了【深寒雪饮】');
					player.gain(card, 'gain2');
				}
				('step 3');
				if (event.count > 0) {
					event.count--;
					event.goto(1);
				} else {
					event.finish();
				}
			},
		};
		//雌雄双股剑—拂尘荡魔+深寒雪饮
		lib.skill.cixiong_skill = {
			equipSkill: true,
			trigger: {
				player: 'useCardToPlayered',
			},
			audio: true,
			logTarget: 'target',
			check(event, player) {
				if (get.attitude(player, event.target) > 0) return true;
				var target = event.target;
				return target.countCards('h') == 0 || !target.hasSkillTag('noh');
			},
			filter(event, player) {
				if (event.card.name != 'sha') return false;
				return player.differentSexFrom(event.target);
			},
			content() {
				'step 0';
				var num = 1;
				if (lib.config.taixuhuanjing.buff.includes('buff_txhj_fuchendangmo') && player == game.me) {
					if (player.buff) {
						player.buff.buff_txhj_fuchendangmo.update();
					}
					game.log(player, '触发了【拂尘荡魔】');
					num++;
				}
				var str = `弃置${get.cnNumber(num, true)}张手牌,或令`;
				trigger.target.chooseToDiscard(str + get.translation(player) + '摸一张牌', num).set('ai', function (card) {
					var trigger = _status.event.getTrigger();
					return -get.attitude(trigger.target, trigger.player) - get.value(card);
				});
				('step 1');
				if (result.bool) {
					//----------------------//
					if (lib.config.taixuhuanjing.buff.includes('buff_txhj_shenhanxueyin')) {
						var card = result.cards;
						if (player.buff) {
							player.buff.buff_txhj_shenhanxueyin.update();
						}
						game.log(player, '触发了【深寒雪饮】');
						player.gain(card, 'gain2');
					} else {
						event.finish();
					}
					//---------------------//
				} else {
					player.draw();
				}
			},
		};
		//无双方天戟—拂尘荡魔+深寒雪饮
		lib.skill.wushuangfangtianji_skill = {
			equipSkill: true,
			trigger: {
				source: 'damageSource',
			},
			filter(event, player) {
				return event.card && event.card.name == 'sha';
			},
			content() {
				'step 0';
				player.line(trigger.player, 'white');
				if (!trigger.player.countCards('he')) {
					event.goto(1);
				} else {
					event.goto(2);
				}
				('step 1');
				player.draw();
				event.finish();
				('step 2');
				player.chooseControl('摸一张牌', '弃置其一张牌', function (event, player) {
					if (get.attitude(player, trigger.player) > 2) return '摸一张牌';
					return '弃置其一张牌';
				});
				('step 3');
				if (result.control == '摸一张牌') {
					player.draw();
					event.finish();
				} else {
					event.goto(4);
				}
				('step 4');
				if (lib.config.taixuhuanjing.buff.includes('buff_txhj_fuchendangmo') && player == game.me) {
					if (player.buff) {
						player.buff.buff_txhj_fuchendangmo.update();
					}
					game.log(player, '触发了【拂尘荡魔】');
					event.count = 1;
				} else {
					event.count = 0;
				}
				('step 5');
				if (trigger.player.countCards('he')) {
					player.line(trigger.player);
					player.discardPlayerCard(trigger.player, 'he', true);
				} else {
					event.finish();
				}
				('step 6');
				if (result.bool && lib.config.taixuhuanjing.buff.includes('buff_txhj_shenhanxueyin')) {
					var card = result.cards[0];
					if (player.buff) {
						player.buff.buff_txhj_shenhanxueyin.update();
					}
					game.log(player, '触发了【深寒雪饮】');
					player.gain(card, 'gain2');
				}
				('step 7');
				if (event.count > 0) {
					event.count--;
					event.goto(5);
				} else {
					event.finish();
				}
			},
		};
		//麒麟弓—拂尘荡魔+深寒雪饮
		lib.translate.qilin_info = '当你使用【杀】对目标角色造成伤害时,你可以弃置其装备区里的一张宝物牌.';
		lib.translate.qilin_skill_info = '当你使用【杀】对目标角色造成伤害时,你可以弃置其装备区里的一张宝物牌.';
		lib.skill.qilin_skill = {
			equipSkill: true,
			trigger: { source: 'damageBegin2' },
			filter(event, player) {
				return event.card && event.card.name == 'sha' && event.notLink() && event.player.getCards('e', { subtype: 'equip5' }).length;
			},
			forced: true,
			audio: true,
			content() {
				'step 0';
				if (trigger.player.countCards('e', { subtype: 'equip5' }) > 1 && lib.config.taixuhuanjing.buff.includes('buff_txhj_fuchendangmo') && player == game.me) {
					if (player.buff) {
						player.buff.buff_txhj_fuchendangmo.update();
					}
					game.log(player, '触发了【拂尘荡魔】');
					event.fuchener = true;
				}
				('step 1');
				var att = get.attitude(player, trigger.player) <= 0;
				var next = player.chooseButton();
				next.set('att', att);
				next.set('createDialog', [`是否发动【麒麟弓】,弃置${get.translation(trigger.player)}的一张宝物牌？`, trigger.player.getCards('e', { subtype: 'equip5' })]);
				next.set('ai', function (button) {
					if (_status.event.att) return get.buttonValue(button);
					return 0;
				});
				('step 2');
				if (result.bool) {
					trigger.player.discard(result.links[0]);
					event.cs = result.links;
					if (lib.config.taixuhuanjing.buff.includes('buff_txhj_shenhanxueyin') && player == game.me) {
						event.goto(3);
					} else {
						event.goto(4);
					}
				} else event.finish();
				('step 3');
				var card = event.cs;
				if (player.buff) {
					player.buff.buff_txhj_shenhanxueyin.update();
				}
				game.log(player, '触发了【深寒雪饮】');
				player.gain(card, 'gain2');
				('step 4');
				event.activated = true;
				if (!event.added && event.fuchener) {
					event.added = true;
					event.goto(1);
				}
			},
		};
		//贯石斧—上将的膂力
		lib.skill.guanshi_skill = {
			equipSkill: true,
			trigger: {
				player: 'shaMiss',
			},
			forced: true,
			audio: true,
			filter(event, player) {
				if (player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_shangjiangdelvli'))
					return (
						player.countCards('he', function (card) {
							return card != player.getEquip('guanshi');
						}) >= 1 && event.target.isAlive()
					);
				return (
					player.countCards('he', function (card) {
						return card != player.getEquip('guanshi');
					}) >= 2 && event.target.isAlive()
				);
			},
			content() {
				'step 0';
				var num = 1;
				if (lib.config.taixuhuanjing.buff.includes('buff_txhj_shangjiangdelvli') && player == game.me) {
					if (player.buff) {
						player.buff.buff_txhj_shangjiangdelvli.update();
					}
					game.log(player, '触发了【上将的膂力】');
				} else {
					num++;
				}
				var next = player.chooseToDiscard(get.prompt('guanshi'), num, 'he', function (card) {
					return _status.event.player.getEquip('guanshi') != card;
				});
				next.logSkill = 'guanshi_skill';
				next.set('ai', function (card) {
					var evt = _status.event.getTrigger();
					if (get.attitude(evt.player, evt.target) < 0) {
						if (evt.baseDamage + evt.extraDamage >= Math.min(2, evt.target.hp)) {
							return 8 - get.value(card);
						}
						return 5 - get.value(card);
					}
					return -1;
				});
				('step 1');
				if (result.bool) {
					trigger.untrigger();
					trigger.trigger('shaHit');
					trigger._result.bool = false;
					trigger._result.result = null;
				}
			},
			ai: {
				directHit_ai: true,
				skillTagFilter(player, tag, arg) {
					if (player._guanshi_temp) return;
					player._guanshi_temp = true;
					var bool =
						get.attitude(player, arg.target) < 0 &&
						arg.card.name == 'sha' &&
						player.countCards('he', function (card) {
							return card != player.getEquip('guanshi') && card != arg.card && (!arg.card.cards || !arg.card.cards.includes(card)) && get.value(card) < 5;
						}) > 1;
					delete player._guanshi_temp;
					return bool;
				},
			},
		};
		//三尖两刃刀—上将的膂力
		lib.skill.sanjian_skill = {
			equipSkill: true,
			audio: true,
			trigger: { source: 'damageSource' },
			forced: true,
			filter(event, player) {
				if (event.player.isDead()) return false;
				//if(player.countCards('h')==0) return false;
				if (!event.card) return false;
				if (event.card.name != 'sha') return false;
				if (!event.notLink()) return false;
				return game.hasPlayer(function (current) {
					return current != event.player && get.distance(event.player, current) <= 1;
				});
			},
			content() {
				'step 0';
				var damaged = trigger.player;
				var str;
				if (lib.config.taixuhuanjing.buff.includes('buff_txhj_shangjiangdelvli') && player == game.me) {
					str = '三尖两刃刀(上将的膂力):是否选择一个目标？';
				} else {
					str = '三尖两刃刀:是否弃置一张手牌牌并选择一个目标？';
				}
				player
					.chooseCardTarget({
						filterCard: lib.filter.cardDiscardable,
						//------------------------//
						selectCard(player, num) {
							var player = _status.event.player;
							var num = 0;
							if (lib.config.taixuhuanjing.buff.includes('buff_txhj_shangjiangdelvli') && player == game.me) {
								return num;
							} else {
								num++;
								return num;
							}
						},
						//-----------------------------//
						filterTarget(card, player, target) {
							var damaged = _status.event.damaged;
							return get.distance(damaged, target) <= 1 && target != damaged;
						},
						ai1(card) {
							return 9 - get.value(card);
						},
						ai2(target) {
							var player = _status.event.player;
							return get.damageEffect(target, player, player);
						},
						prompt: str,
					})
					.set('damaged', damaged);
				('step 1');
				if (result.bool) {
					player.discard(result.cards);
					if (lib.config.taixuhuanjing.buff.includes('buff_txhj_shangjiangdelvli') && player == game.me) {
						game.log(player, '发动了【上将的膂力】');
						if (player.buff) {
							player.buff.buff_txhj_shangjiangdelvli.update();
						}
					}
					result.targets[0].damage();
				}
			},
		};
		//倚天剑—上将的膂力
		lib.skill.yitianjian = {
			audio: true,
			trigger: {
				source: 'damageSource',
			},
			forced: true,
			equipSkill: true,
			filter(event, player) {
				return event.card && event.card.name == 'sha' && event.parent.name == 'sha' && player.isDamaged() && player.countCards('h') > 0;
			},
			content() {
				'step 0';
				if (lib.config.taixuhuanjing.buff.includes('buff_txhj_shangjiangdelvli') && player == game.me) {
					if (player.buff) {
						player.buff.buff_txhj_shangjiangdelvli.update();
					}
					game.log(player, '触发了【上将的膂力】');
					player.recover();
					event.finish();
				} else {
					event.goto(1);
				}
				('step 1');
				player.chooseToDiscard('h', get.prompt('yitianjian'), '弃置一张手牌并回复1点体力').set('ai', (card) => 7 - get.value(card)).logSkill = 'yitianjian';
				('step 2');
				if (result.bool) player.recover();
			},
		};
		//烈淬刃—上将的膂力
		lib.skill.pyzhuren_diamond = {
			audio: true,
			trigger: {
				source: 'damageBegin1',
			},
			forced: true,
			usable: 2,
			equipSkill: true,
			mod: {
				cardUsable(card, player, num) {
					var cardx = player.getEquip('pyzhuren_diamond');
					if (card.name == 'sha' && (!cardx || player.hasSkill('pyzhuren_diamond', null, false) || (!_status.pyzhuren_diamond_temp && !ui.selected.cards.includes(cardx)))) {
						return num + 1;
					}
				},
				cardEnabled2(card, player) {
					if (!_status.event.addCount_extra || player.hasSkill('pyzhuren_diamond', null, false)) return;
					if (card && card == player.getEquip('pyzhuren_diamond')) {
						_status.pyzhuren_diamond_temp = true;
						var bool = lib.filter.cardUsable({
							name: 'sha',
						},
							player
						);
						delete _status.pyzhuren_diamond_temp;
						if (!bool) return false;
					}
				},
			},
			filter(event, player) {
				if (event.parent.name != 'sha') return false;
				return (
					player.countCards('he', function (card) {
						return card != player.getEquip('pyzhuren_diamond');
					}) >= 0
				);
			},
			content() {
				'step 0';
				if (lib.config.taixuhuanjing.buff.includes('buff_txhj_shangjiangdelvli') && player == game.me) {
					if (player.buff) {
						player.buff.buff_txhj_shangjiangdelvli.update();
					}
					game.log(player, '触发了【上将的膂力】');
					trigger.num++;
					event.finish();
				} else {
					event.goto(1);
				}
				('step 1');
				var next = player.chooseToDiscard(
					'he',
					function (card, player) {
						return card != player.getEquip('pyzhuren_diamond');
					},
					get.prompt(event.name, trigger.player),
					'弃置一张牌,令即将对其造成的伤害+1'
				);
				next.ai = function (card) {
					if (_status.event.goon) return 6 - get.value(card);
					return -1;
				};
				next.set(
					'goon',
					get.attitude(player, trigger.player) < 0 &&
					!trigger.player.hasSkillTag('filterDamage', null, {
						player: player,
						card: trigger.card,
					})
				);
				next.logSkill = [event.name, trigger.player];
				('step 2');
				if (result.bool) trigger.num++;
				else player.storage.counttrigger.pyzhuren_diamond--;
			},
			ai: {
				expose: 0.25,
			},
		};
		//-----赛季【黄天之怒】专属-----//
		//施法:咒护
		lib.skill.twzhouhu = {
			audio: 2,
			mahouSkill: true,
			enable: 'phaseUse',
			usable: 1,
			filter(event, player) {
				return !player.hasSkill('twzhouhu_mahou') && player.countCards('h', lib.skill.twzhouhu.filterCard) > 0;
			},
			filterCard: { color: 'red' },
			check(card) {
				if (_status.event.player.isHealthy()) return 0;
				return 7 - get.value(card);
			},
			content() {
				'step 0';
				var list = ['1回合', '2回合', '3回合'];
				if (lib.config.taixuhuanjing.buff.includes('buff_txhj_digongdebihu') && player == game.me) {
					if (player.buff) {
						player.buff.buff_txhj_digongdebihu.update();
					}
					game.log(player, '触发了【地公的庇护】');
					list.push('4回合');
				}
				player
					.chooseControl(list)
					.set('prompt', '请选择施法时长')
					.set('ai', function () {
						var player = _status.event.player;
						var safe = 1;
						if (safe < Math.min(3, game.countPlayer(), player.getDamagedHp())) {
							var next = player.next;
							while (next != player && get.attitude(next, player) > 0) {
								safe++;
								next = next.next;
							}
						}
						return Math.max(1, Math.min(safe, 3, game.countPlayer(), player.getDamagedHp())) - 1;
					});
				('step 1');
				if (lib.config.taixuhuanjing.buff.includes('buff_txhj_tiangongdebihu') && player == game.me && result.index > 0) {
					if (player.buff) {
						player.buff.buff_txhj_tiangongdebihu.update();
					}
					game.log(player, '触发了【天公的庇护】');
					if (!player.storage.tiangongzhouhu) {
						player.storage.tiangongzhouhu = true;
					}
				}
				player.storage.twzhouhu_mahou = [result.index + 1, result.index + 1];
				player.addTempSkill('twzhouhu_mahou', { player: 'die' });
				if (lib.config.taixuhuanjing.buff.includes('buff_txhj_rengongdebihu') && player == game.me) {
					if (player.buff) {
						player.buff.buff_txhj_rengongdebihu.update();
					}
					game.log(player, '触发了【人公的庇护】');
					player.draw(1, true);
				}
			},
			ai: {
				order: 2,
				result: {
					player: 1,
				},
			},
			subSkill: {
				mahou: {
					trigger: { global: 'phaseEnd' },
					forced: true,
					popup: false,
					charlotte: true,
					content() {
						var list = player.storage.twzhouhu_mahou;
						list[1]--;
						if (list[1] == 0 || (list[1] == 1 && player.storage.tiangongzhouhu == true && player == game.me)) {
							game.log(player, '的<咒护>魔法生效');
							if (lib.config.taixuhuanjing.buff.includes('buff_txhj_tiangongdebihu') && player == game.me && player.storage.tiangongfengqi == true) {
								if (player.buff) {
									player.buff.buff_txhj_tiangongdebihu.update();
								}
								game.log(player, '触发了【天公的庇护】');
								delete player.storage.tiangongzhouhu;
							}
							var num = list[0];
							player.recover(num);
							player.removeSkill('twzhouhu_mahou');
						} else {
							game.log(player, '的<咒护>魔法剩余', `#g${list[1]}回合`);
							player.markSkill('twzhouhu_mahou');
						}
					},
					mark: true,
					marktext: '♗',
					intro: {
						name: '施法:咒护',
						markcount(storage) {
							if (storage) return storage[0] + '-' + storage[1];
							return 0;
						},
						content(storage) {
							if (storage) {
								return `经过${storage[1]}个<回合结束时>后,回复${storage[0]}点体力`;
							}
							return '未指定施法效果';
						},
					},
				},
			},
		};
		//施法:丰祈
		lib.skill.twharvestinori = {
			audio: 2,
			mahouSkill: true,
			enable: 'phaseUse',
			usable: 1,
			filter(event, player) {
				return !player.hasSkill('twharvestinori_mahou') && player.countCards('h', lib.skill.twharvestinori.filterCard) > 0;
			},
			filterCard: { color: 'black' },
			check(card) {
				return 8 - get.value(card);
			},
			content() {
				'step 0';
				var list = ['1回合', '2回合', '3回合'];
				if (lib.config.taixuhuanjing.buff.includes('buff_txhj_digongdebihu') && player == game.me) {
					if (player.buff) {
						player.buff.buff_txhj_digongdebihu.update();
					}
					game.log(player, '触发了【地公的庇护】');
					list.push('4回合');
				}
				player
					.chooseControl(list)
					.set('prompt', '请选择施法时长')
					.set('ai', function () {
						var player = _status.event.player;
						var safe = player.hp;
						if (safe < Math.min(3, game.countPlayer())) {
							var next = player.next;
							while (next != player && get.attitude(next, player) > 0) {
								safe++;
								next = next.next;
							}
						}
						return Math.max(1, Math.min(safe, 3, game.countPlayer())) - 1;
					});
				('step 1');
				if (lib.config.taixuhuanjing.buff.includes('buff_txhj_tiangongdebihu') && player == game.me && result.index > 0) {
					if (player.buff) {
						player.buff.buff_txhj_tiangongdebihu.update();
					}
					game.log(player, '触发了【天公的庇护】');
					if (!player.storage.tiangongfengqi) {
						player.storage.tiangongfengqi = true;
					}
				}
				player.storage.twharvestinori_mahou = [result.index + 1, result.index + 1];
				player.addTempSkill('twharvestinori_mahou', { player: 'die' });
				if (lib.config.taixuhuanjing.buff.includes('buff_txhj_rengongdebihu') && player == game.me) {
					if (player.buff) {
						player.buff.buff_txhj_rengongdebihu.update();
					}
					game.log(player, '触发了【人公的庇护】');
					player.draw(1, true);
				}
			},
			ai: {
				order: 8,
				result: {
					player: 1,
				},
			},
			subSkill: {
				mahou: {
					trigger: { global: 'phaseEnd' },
					forced: true,
					popup: false,
					charlotte: true,
					content() {
						var list = player.storage.twharvestinori_mahou;
						list[1]--;
						if (list[1] == 0 || (list[1] == 1 && player.storage.tiangongfengqi == true && player == game.me)) {
							game.log(player, '的<丰祈>魔法生效');
							if (lib.config.taixuhuanjing.buff.includes('buff_txhj_tiangongdebihu') && player == game.me && player.storage.tiangongfengqi == true) {
								if (player.buff) {
									player.buff.buff_txhj_tiangongdebihu.update();
								}
								game.log(player, '触发了【天公的庇护】');
								delete player.storage.tiangongfengqi;
							}
							var num = list[0] * 2;
							player.draw(num);
							player.removeSkill('twharvestinori_mahou');
						} else {
							game.log(player, '的<丰祈>魔法剩余', `#g${list[1]}回合`);
							player.markSkill('twharvestinori_mahou');
						}
					},
					mark: true,
					marktext: '♗',
					intro: {
						name: '施法:丰祈',
						markcount(storage) {
							if (storage) return storage[0] + '-' + storage[1];
							return 0;
						},
						content(storage) {
							if (storage) {
								return `经过${storage[1]}个<回合结束时>后,摸${storage[0] * 2}张牌`;
							}
							return '未指定施法效果';
						},
					},
				},
			},
		};
		//施法:阻祸
		lib.skill.twzuhuo = {
			audio: 2,
			mahouSkill: true,
			enable: 'phaseUse',
			usable: 1,
			filter(event, player) {
				return !player.hasSkill('twzuhuo_mahou') && player.countCards('he', lib.skill.twzuhuo.filterCard) > 0;
			},
			filterCard(card) {
				return get.type(card) != 'basic';
			},
			position: 'he',
			check(card) {
				return 7 - get.value(card);
			},
			content() {
				'step 0';
				var list = ['1回合', '2回合', '3回合'];
				if (lib.config.taixuhuanjing.buff.includes('buff_txhj_digongdebihu') && player == game.me) {
					if (player.buff) {
						player.buff.buff_txhj_digongdebihu.update();
					}
					game.log(player, '触发了【地公的庇护】');
					list.push('4回合');
				}
				player
					.chooseControl(list)
					.set('prompt', '请选择施法时长')
					.set('ai', function () {
						var player = _status.event.player;
						var safe = Math.min(player.getHandcardLimit(), player.countCards('h', 'shan'));
						if (safe < Math.min(3, game.countPlayer())) {
							var next = player.next;
							while (next != player && get.attitude(next, player) > 0) {
								safe++;
								next = next.next;
							}
						}
						return Math.max(2, Math.min(safe, 3, game.countPlayer())) - 1;
					});
				('step 1');
				if (lib.config.taixuhuanjing.buff.includes('buff_txhj_tiangongdebihu') && player == game.me && result.index > 0) {
					if (player.buff) {
						player.buff.buff_txhj_tiangongdebihu.update();
					}
					game.log(player, '触发了【天公的庇护】');
					if (!player.storage.tiangongzuhuo) {
						player.storage.tiangongzuhuo = true;
					}
				}
				player.storage.twzuhuo_mahou = [result.index + 1, result.index + 1];
				player.addTempSkill('twzuhuo_mahou', { player: 'die' });
				if (lib.config.taixuhuanjing.buff.includes('buff_txhj_rengongdebihu') && player == game.me) {
					if (player.buff) {
						player.buff.buff_txhj_rengongdebihu.update();
					}
					game.log(player, '触发了【人公的庇护】');
					player.draw(1, true);
				}
			},
			ai: {
				order: 2,
				result: {
					player: 1,
				},
			},
			subSkill: {
				mahou: {
					trigger: { global: 'phaseEnd' },
					forced: true,
					popup: false,
					charlotte: true,
					content() {
						var list = player.storage.twzuhuo_mahou;
						list[1]--;
						if (list[1] == 0 || (list[1] == 1 && player.storage.tiangongzuhuo == true && player == game.me)) {
							game.log(player, '的<阻祸>魔法生效');
							if (lib.config.taixuhuanjing.buff.includes('buff_txhj_tiangongdebihu') && player == game.me && player.storage.tiangongzuhuo == true) {
								if (player.buff) {
									player.buff.buff_txhj_tiangongdebihu.update();
								}
								game.log(player, '触发了【天公的庇护】');
								delete player.storage.tiangongzuhuo;
							}
							var num = list[0];
							player.addSkill('twzuhuo_effect');
							player.addMark('twzuhuo_effect', num, false);
							player.removeSkill('twzuhuo_mahou');
						} else {
							game.log(player, '的<阻祸>魔法剩余', `#g${list[1]}回合`);
							player.markSkill('twzuhuo_mahou');
						}
					},
					mark: true,
					marktext: '♗',
					intro: {
						name: '施法:阻祸',
						markcount(storage) {
							if (storage) return storage[0] + '-' + storage[1];
							return 0;
						},
						content(storage) {
							if (storage) {
								return `经过${storage[1]}个<回合结束时>后,获得${storage[0]}层<防止一次伤害>的效果`;
							}
							return '未指定施法效果';
						},
					},
				},
				effect: {
					charlotte: true,
					trigger: { player: 'damageBegin2' },
					forced: true,
					filter(event, player) {
						return player.hasMark('twzuhuo_effect');
					},
					content() {
						trigger.cancel();
						player.removeMark('twzuhuo_effect', 1, false);
						if (!player.countMark('twzuhuo_effect')) player.removeSkill('twzuhuo_effect');
					},
					marktext: '阻︎',
					intro: {
						content: '防止接下来的#次伤害',
					},
				},
			},
		};
		//------------分割线-----------//
	}
	//---------------神器添加buff-----------------//
	lib.skill._txhj_shenqi = {
		trigger: {
			player: ['equipAfter'],
		},
		mode: ['taixuhuanjing'],
		forced: true,
		_priority: 7,
		filter(event, player) {
			var list = ['txhj_lingbaoxianhu', 'txhj_taijifuchen', 'txhj_chongyingshenfu', 'txhj_xuwangzhimian', 'txhj_guofengyupao', 'txhj_juechenjinge', 'txhj_chiyanzhenhunqin', 'txhj_feilong', 'txhj_liulongcanjia'];
			if (event.cards?.length) {
				return list.includes(event.cards[0].name) && player == game.me;
			}
		},//QQQ
		content() {
			'step 0';
			event.cardname = trigger.card.name;
			event.list = ['txhj_feilong', 'txhj_chiyanzhenhunqin', 'txhj_lingbaoxianhu', 'txhj_taijifuchen', 'txhj_chongyingshenfu', 'txhj_guofengyupao', 'txhj_juechenjinge', 'txhj_xuwangzhimian', 'txhj_liulongcanjia'];
			event.equiplist = {
				//飞龙夺凤
				txhj_feilong: ['buff_txhj_pozhenzhifeng', '破阵之锋'],
				//赤焰镇魂琴
				txhj_chiyanzhenhunqin: ['buff_txhj_yanhuozhiren', '焱火之刃'],
				//灵宝仙葫
				txhj_lingbaoxianhu: ['buff_txhj_xianhujiqu', '仙葫汲取'],
				//太极拂尘
				txhj_taijifuchen: ['buff_txhj_fuchendangmo', '拂尘荡魔'],
				//冲应神符
				txhj_chongyingshenfu: ['buff_txhj_shenfuhuaxie', '神符化邪'],
				//国风玉袍
				txhj_guofengyupao: ['buff_txhj_juejingzhice', '绝境之策'],
				//绝尘金戈
				txhj_juechenjinge: ['buff_txhj_wuzhongshengshan', '无中生闪'],
				//六龙骖驾
				txhj_liulongcanjia: ['buff_txhj_wuzhongshengsha', '无中生杀'],
				//虚妄之冕
				txhj_xuwangzhimian: ['buff_txhj_shenfuhuaxie', '攻之宝物'],//QQQ
			};
			('step 1');
			if (!event.list.includes(event.cardname)) event.finish();
			('step 2');
			if (!lib.config.taixuhuanjing.buff.includes(event.equiplist[event.cardname][0])) {
				lib.config.taixuhuanjing.buff.push(event.equiplist[event.cardname][0]);
				if (game.me.buff) game.me.buff.update();
				game.log(get.translation(event.cardname) + ':', player, `获得了【${event.equiplist[event.cardname][1]}】`);
			}
		},
	};
	//--------神器失去buff------//
	lib.skill._txhj_XXXshenqi = {
		trigger: {
			player: 'loseAfter',
			global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
		},
		forced: true,
		mode: ['taixuhuanjing'],
		_priority: 2,
		filter(event, player) {
			if (player != game.me) return false;
			var evt = event.getl(player);
			var cardlist = ['txhj_lingbaoxianhu', 'txhj_taijifuchen', 'txhj_chongyingshenfu', 'txhj_xuwangzhimian', 'txhj_guofengyupao', 'txhj_juechenjinge', 'txhj_chiyanzhenhunqin', 'txhj_feilong', 'txhj_liulongcanjia'];
			if (evt && evt.player == player && evt.es && evt.es.length) {
				return true;
			}
			return false;
		},
		content() {
			'step 0';
			var loselist = trigger.getl(player).es;
			event.losecard = [];
			var cardlist = ['txhj_lingbaoxianhu', 'txhj_taijifuchen', 'txhj_chongyingshenfu', 'txhj_xuwangzhimian', 'txhj_guofengyupao', 'txhj_juechenjinge', 'txhj_chiyanzhenhunqin', 'txhj_feilong', 'txhj_liulongcanjia'];
			for (var i = 0; i < loselist.length; i++) {
				var evt = loselist[i];
				if (cardlist.includes(evt.name)) event.losecard.push(evt.name);
			}
			event.num = event.losecard.length - 1;
			('step 1');
			if (event.num < 0) event.finish();
			('step 2');
			event.cardname = event.losecard[event.num];
			event.list = ['txhj_feilong', 'txhj_chiyanzhenhunqin', 'txhj_lingbaoxianhu', 'txhj_taijifuchen', 'txhj_chongyingshenfu', 'txhj_guofengyupao', 'txhj_juechenjinge', 'txhj_xuwangzhimian', 'txhj_liulongcanjia'];
			event.equiplist = {
				//飞龙夺凤
				txhj_feilong: ['buff_txhj_pozhenzhifeng', '破阵之锋'],
				//赤焰镇魂琴
				txhj_chiyanzhenhunqin: ['buff_txhj_yanhuozhiren', '焱火之刃'],
				//灵宝仙葫
				txhj_lingbaoxianhu: ['buff_txhj_xianhujiqu', '仙葫汲取'],
				//太极拂尘
				txhj_taijifuchen: ['buff_txhj_fuchendangmo', '拂尘荡魔'],
				//冲应神符
				txhj_chongyingshenfu: ['buff_txhj_shenfuhuaxie', '神符化邪'],
				//国风玉袍
				txhj_guofengyupao: ['buff_txhj_juejingzhice', '绝境之策'],
				//绝尘金戈
				txhj_juechenjinge: ['buff_txhj_wuzhongshengshan', '无中生闪'],
				//六龙骖驾
				txhj_liulongcanjia: ['buff_txhj_wuzhongshengsha', '无中生杀'],
				//虚妄之冕
				txhj_xuwangzhimian: ['buff_txhj_shenfuhuaxie', '攻之宝物'],//QQQ
			};
			('step 3');
			if (!event.list.includes(event.cardname)) event.finish();
			('step 4');
			if (lib.config.taixuhuanjing.buff.includes(event.equiplist[event.cardname][0])) {
				lib.config.taixuhuanjing.buff.remove(event.equiplist[event.cardname][0]);
				if (game.me.buff && game.me.buff[event.equiplist[event.cardname][0]]) {//QQQ
					game.me.buff[event.equiplist[event.cardname][0]].remove();
				}
				game.log(get.translation(event.cardname) + ':', player, `失去了【${event.equiplist[event.cardname][1]}】`);
			}
			('step 5');
			event.num--;
			event.goto(1);
		},
	};
	//----------------------------------------//
	//-------------------------------------------------------------//
	//1 焱火
	lib.skill._buff_txhj_yanhuo = {
		trigger: {
			source: 'damageBegin1',
		},
		filter(event, player) {
			return event.nature == 'fire' && event.notLink() && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_yanhuo');
		},
		mode: ['taixuhuanjing'],
		forced: true,
		content() {
			game.log(player, '发动了【焱火】');
			trigger.num++;
			if (player.buff) {
				player.buff.buff_txhj_yanhuo.update();
			}
		},
	};
	//2 惊雷
	lib.skill._buff_txhj_jinglei = {
		trigger: {
			source: 'damageBegin1',
		},
		filter(event, player) {
			return event.nature == 'thunder' && event.notLink() && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_jinglei');
		},
		forced: true,
		mode: ['taixuhuanjing'],
		content() {
			game.log(player, '发动了【惊雷】');
			trigger.num++;
			if (player.buff) {
				player.buff.buff_txhj_jinglei.update();
			}
		},
	};
	//3 熄火
	lib.skill._buff_txhj_xihuo = {
		trigger: {
			player: 'damageBegin3',
		},
		filter(event, player) {
			return event.nature == 'fire' && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_xihuo');
		},
		forced: true,
		mode: ['taixuhuanjing'],
		content() {
			game.log(player, '触发了【熄火】');
			trigger.num--;
			if (player.buff) {
				player.buff.buff_txhj_xihuo.update();
			}
		},
	};
	//4 定雷
	lib.skill._buff_txhj_dinglei = {
		trigger: {
			player: 'damageBegin3',
		},
		filter(event, player) {
			return event.nature == 'thunder' && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_dinglei');
		},
		forced: true,
		mode: ['taixuhuanjing'],
		content() {
			game.log(player, '触发了【定雷】');
			trigger.num--;
			if (player.buff) {
				player.buff.buff_txhj_dinglei.update();
			}
		},
	};
	//5 无中生杀 【六龙骖驾】
	lib.skill._buff_txhj_wuzhongshengsha = {
		trigger: {
			player: 'phaseZhunbeiBegin',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			if (player.getEquip('txhj_liulongcanjia') && player != game.me) return true;
			return player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_wuzhongshengsha');
		},
		content() {
			game.log(player, '触发了【无中生杀】获得了【杀】');
			var card = get.cardPile(function (card) {
				return card.name == 'sha';
			});
			if (card) player.gain(card, 'gain2');
			if (player.buff) {
				player.buff.buff_txhj_wuzhongshengsha.update();
			}
		},
	};
	//6 无中生闪  【绝尘金戈】
	lib.skill._buff_txhj_wuzhongshengshan = {
		trigger: {
			player: 'phaseJieshuBegin',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			if (player.getEquip('txhj_juechenjinge') && player != game.me) return true;
			return player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_wuzhongshengshan');
		},
		content() {
			game.log(player, '触发了【无中生闪】获得了【闪】');
			var card = get.cardPile(function (card) {
				return card.name == 'shan';
			});
			if (card) player.gain(card, 'gain2');
			if (player.buff) {
				player.buff.buff_txhj_wuzhongshengshan.update();
			}
		},
	};
	//7 丰裕生财
	lib.skill._buff_txhj_fengyushengcai = {
		trigger: {
			player: 'roundStart',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return player == game.me && player.isHealthy() && lib.config.taixuhuanjing.buff.includes('buff_txhj_fengyushengcai');
		},
		content() {
			game.log(player, '未受伤,触发了【丰裕生财】');
			player.draw();
			if (player.buff) {
				player.buff.buff_txhj_fengyushengcai.update();
			}
		},
	};
	//8 击破敌阵
	lib.skill._buff_txhj_jipodizhen = {
		trigger: {
			source: 'damageEnd',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_jipodizhen');
		},
		content() {
			if (trigger.player && trigger.player.isIn() && !trigger._notrigger.includes(trigger.player)) {
				trigger.player.randomDiscard(true, 'he');
				game.log(trigger.player, '【击破敌阵】弃置了一张牌');
			}
			if (player.buff) {
				player.buff.buff_txhj_jipodizhen.update();
			}
		},
	};
	//9 文和缜略
	lib.skill._buff_txhj_wenhezhenlue = {
		trigger: {
			player: 'useCard',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return get.type(event.card) == 'trick' && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_wenhezhenlue');
		},
		content() {
			game.log('【文和缜略】', trigger.card, '不可被无懈可击响应');
			trigger.nowuxie = true;
			if (player.buff) {
				player.buff.buff_txhj_wenhezhenlue.update();
			}
		},
	};
	//10 文和计备 (衍生)
	lib.skill._buff_txhj_wenhejibei = {
		trigger: {
			global: 'gameStart',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_wenhejibei');
		},
		content() {
			game.log(player, '获得了【文和计备】');
			player.addSkill('txhj_wenhejibei');
			if (player.buff) {
				player.buff.buff_txhj_wenhejibei.update();
			}
		},
	};
	//11 月英的智慧 (衍生)
	lib.skill._buff_txhj_yueyingdezhihui = {
		trigger: {
			global: 'gameStart',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_yueyingdezhihui');
		},
		content() {
			game.log(player, '获得了【月英的智慧】');
			player.addSkill('txhj_yueyingdezhihui');
			if (player.buff) {
				player.buff.buff_txhj_yueyingdezhihui.update();
			}
		},
	};
	//12 长兵广刃 (衍生)
	lib.skill._buff_txhj_changbingguangren = {
		trigger: {
			global: 'gameStart',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_changbingguangren');
		},
		content() {
			game.log(player, '获得了【长兵广刃】');
			player.addSkill('txhj_changbingguangren');
			if (player.buff) {
				player.buff.buff_txhj_changbingguangren.update();
			}
		},
	};
	//13 富足
	lib.skill._buff_txhj_fuzu = {
		trigger: {
			global: ['gameStart'],
		},
		forced: true,
		_priority: 2,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return player == game.me && player.countCards('h') != player.maxHp && lib.config.taixuhuanjing.buff.includes('buff_txhj_fuzu');
		},
		content() {
			game.log(player, '触发了【富足】');
			if (player.buff) {
				player.buff.buff_txhj_fuzu.update();
			}
		},
	};
	//14 枭姬的勇武
	lib.skill._buff_txhj_xiaojideyongwu = {
		trigger: {
			player: 'loseAfter',
			global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
		},
		forced: true,
		mode: ['taixuhuanjing'],
		forced: true,
		filter(event, player) {
			var evt = event.getl(player);
			return evt && evt.player == player && player == game.me && !player.hasSkill('xiaoji') && lib.config.taixuhuanjing.buff.includes('buff_txhj_xiaojideyongwu') && evt.es && evt.es.length;
		},
		content() {
			'step 0';
			event.count = trigger.getl(player).es.length;
			('step 1');
			event.count--;
			player.draw(2);
			game.log(player, '发动了【枭姬的勇武】');
			('step 2');
			if (event.count > 0) {
				event.goto(1);
			} else {
				event.finish();
			}
			if (player.buff) {
				player.buff.buff_txhj_xiaojideyongwu.update();
			}
		},
	};
	//15 雄姿英发 (衍生)
	lib.skill._buff_txhj_xiongziyingfa = {
		trigger: {
			player: 'phaseDrawBegin2',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		preHidden: true,
		filter(event, player) {
			return !event.numFixed && player == game.me && !player.hasSkill('reyingzi') && lib.config.taixuhuanjing.buff.includes('buff_txhj_xiongziyingfa');
		},
		content() {
			if (!player.hasSkill('txhj_xiongziyingfa')) {
				player.addSkill('txhj_xiongziyingfa');
			}
			game.log(player, '触发了【雄姿英发】');
			trigger.num++;
			if (player.buff) {
				player.buff.buff_txhj_xiongziyingfa.update();
			}
		},
	};
	//16 吴相的心血 (衍生)
	lib.skill._buff_txhj_wuxiangdexinxue = {
		trigger: {
			global: 'gameStart',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_wuxiangdexinxue');
		},
		content() {
			game.log(player, '获得了【吴相的心血】');
			player.addSkill('txhj_wuxiangdexinxue');
		},
	};
	//17 巨贾之道
	//18 破阵之锋 【飞龙夺凤】
	lib.skill._buff_txhj_pozhenzhifeng = {
		trigger: {
			player: ['phaseUseBegin', 'equipAfter'],
			global: ['addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
		},
		forced: true,
		mode: ['taixuhuanjing'],
		_priority: 10,
		filter(event, player) {
			if (player.getEquip('txhj_feilong') && player != game.me) return _status.currentPhase == player && player.isPhaseUsing() && !player.hasSkill('txhj_pozhenzhifeng');
			return lib.config.taixuhuanjing.buff.includes('buff_txhj_pozhenzhifeng') && player == game.me && player.isPhaseUsing() && _status.currentPhase == player && player.getEquip(1) && !player.hasSkill('txhj_pozhenzhifeng');
		},
		popup: false,
		content() {
			player.addTempSkill('txhj_pozhenzhifeng', { player: 'phaseUseAfter' });
			game.log(player, '获得了【破阵之锋】');
			if (player.buff) {
				player.buff.buff_txhj_pozhenzhifeng.update();
			}
		},
	};
	//19 燕人之怒
	lib.skill._buff_txhj_yanrenzhinu = {
		trigger: {
			player: 'useCard',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			if (event.card.name != 'sha') return false;
			var evt = event.getParent('phaseUse');
			if (!evt || evt.player != player) return false;
			var index = player
				.getHistory('useCard', function (evtx) {
					return evtx.card.name == 'sha' && evtx.getParent('phaseUse') == evt;
				})
				.indexOf(event);
			return index == 1 && player.getEquip(1) && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_yanrenzhinu');
		},
		content() {
			var evt = trigger.getParent('phaseUse');
			var index = player
				.getHistory('useCard', function (evtx) {
					return evtx.card.name == 'sha' && evtx.getParent('phaseUse') == evt;
				})
				.indexOf(trigger);
			if (index == 1) {
				game.log(trigger.card, '不可被响应');
				trigger.directHit.addArray(game.players);
			}
			if (player.buff) {
				player.buff.buff_txhj_yanrenzhinu.update();
			}
		},
	};
	//20 遁甲咒法
	lib.skill._buff_txhj_dunjiazhoufa = {
		trigger: {
			player: 'shaBegin',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return event.card && event.card.nature && player.getEquip(1) && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_dunjiazhoufa');
		},
		content() {
			game.log(trigger.card, '不可被【闪】响应');
			trigger.directHit = true;
			if (player.buff) {
				player.buff.buff_txhj_dunjiazhoufa.update();
			}
		},
	};
	//21 子义的勇战
	lib.skill._buff_txhj_ziyideyongzhan = {
		trigger: {
			player: 'useCard',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			if (event.card.name != 'sha') return false;
			var evt = event.getParent('phaseUse');
			if (!evt || evt.player != player) return false;
			var index = player
				.getHistory('useCard', function (evtx) {
					return evtx.card.name == 'sha' && evtx.getParent('phaseUse') == evt;
				})
				.indexOf(event);
			return index == 1 && player.getEquip(1) && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_ziyideyongzhan');
		},
		content() {
			var evt = trigger.getParent('phaseUse');
			var index = player
				.getHistory('useCard', function (evtx) {
					return evtx.card.name == 'sha' && evtx.getParent('phaseUse') == evt;
				})
				.indexOf(trigger);
			if (index == 1) {
				game.log(trigger.card, '造成的伤害将+1');
				if (typeof trigger.baseDamage != 'number') trigger.baseDamage = 1;
				trigger.baseDamage++;
			}
			if (player.buff) {
				player.buff.buff_txhj_ziyideyongzhan.update();
			}
		},
	};
	//22 焱火之刃 【赤焰镇魂琴】
	lib.skill._buff_txhj_yanhuozhiren = {
		trigger: {
			source: 'damageBegin1',
		},
		filter(event, player) {
			if (player.getEquip('txhj_chiyanzhenhunqin') && player != game.me) return event.nature == 'fire' && event.notLink() && player.getEquip(1);
			return event.nature == 'fire' && event.notLink() && player.getEquip(1) && (player.getEquip('txhj_chiyanzhenhunqin') || player == game.me) && lib.config.taixuhuanjing.buff.includes('buff_txhj_yanhuozhiren');
		},
		_priority: 4,
		forced: true,
		mode: ['taixuhuanjing'],
		content() {
			game.log('【焱火之刃】火焰伤害+1');
			trigger.num++;
			if (player.buff) {
				player.buff.buff_txhj_yanhuozhiren.update();
			}
		},
	};
	//23 惊雷之刃
	lib.skill._buff_txhj_jingleizhiren = {
		trigger: {
			source: 'damageBegin1',
		},
		filter(event, player) {
			return event.nature == 'thunder' && event.notLink() && player.getEquip(1) && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_jingleizhiren');
		},
		mode: ['taixuhuanjing'],
		forced: true,
		content() {
			game.log('【惊雷之刃】雷电伤害+1');
			trigger.num++;
			if (player.buff) {
				player.buff.buff_txhj_jingleizhiren.update();
			}
		},
	};
	//24 应急措施甲
	lib.skill._buff_txhj_yingjicuoshijia = {
		trigger: {
			player: 'loseEnd',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			if (Array.isArray(event.cards))
				for (var i of event.cards) {
					if (get.subtype(i) == 'equip2') return player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_yingjicuoshijia');
				}
			return false;
		},
		content() {
			game.log(player, '触发了【应急措施甲】');
			player.recover(1, true);
			if (player.buff) {
				player.buff.buff_txhj_yingjicuoshijia.update();
			}
		},
	};
	//25 应急措施乙
	lib.skill._buff_txhj_yingjicuoshiyi = {
		trigger: {
			player: 'loseEnd',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			if (Array.isArray(event.cards))
				for (var i of event.cards) {
					if (get.subtype(i) == 'equip2') return player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_yingjicuoshiyi');
				}
			return false;
		},
		content() {
			game.log(player, '触发了【应急措施乙】');
			player.draw(2, true);
			if (player.buff) {
				player.buff.buff_txhj_yingjicuoshiyi.update();
			}
		},
	};
	//26 熄火之铠
	lib.skill._buff_txhj_xihuozhikai = {
		trigger: {
			player: 'damageBegin3',
		},
		filter(event, player) {
			return event.nature == 'fire' && player.getEquip(2) && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_xihuozhikai');
		},
		forced: true,
		mode: ['taixuhuanjing'],
		content() {
			game.log(player, '触发了【熄火之铠】');
			trigger.num--;
			if (player.buff) {
				player.buff.buff_txhj_xihuozhikai.update();
			}
		},
	};
	//27 定雷之铠
	lib.skill._buff_txhj_dingleizhikai = {
		trigger: {
			player: 'damageBegin3',
		},
		filter(event, player) {
			return event.nature == 'thunder' && player.getEquip(2) && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_dingleizhikai');
		},
		forced: true,
		mode: ['taixuhuanjing'],
		content() {
			game.log(player, '触发了【定雷之铠】');
			trigger.num--;
			if (player.buff) {
				player.buff.buff_txhj_dingleizhikai.update();
			}
		},
	};
	//28 月英的机巧
	lib.skill._buff_txhj_yueyingdejiqiao = {
		trigger: {
			player: 'judgeEnd',
		},
		preHidden: true,
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return get.position(event.result.card, true) == 'o' && player.countCards('e') && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_yueyingdejiqiao');
		},
		content() {
			game.log('月英的机巧:摸一张牌');
			player.draw(1, true);
			if (player.buff) {
				player.buff.buff_txhj_yueyingdejiqiao.update();
			}
		},
	};
	//29 太平咒法
	lib.skill._buff_txhj_taipingzhoufa = {
		trigger: {
			player: 'shaBegin',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player, card) {
			return event.card && event.card.name == 'sha' && event.card.nature && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_taipingzhoufa');
		},
		content() {
			game.log('属性【杀】造成的伤害+1');
			if (typeof trigger.extraDamage != 'number') {
				trigger.extraDamage = 0;
			}
			trigger.extraDamage++;
			if (player.buff) {
				player.buff.buff_txhj_taipingzhoufa.update();
			}
		},
	};
	//30 白驹鞬出
	lib.skill._buff_txhj_baijujianchu = {
		trigger: {
			source: 'damageEnd',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player, card) {
			if (event.nature) return false;
			return event.card && event.card.name == 'sha' && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_baijujianchu');
		},
		content() {
			if (trigger.player && trigger.player.isIn() && !trigger._notrigger.includes(trigger.player)) {
				trigger.player.randomDiscard(true, 'he');
				game.log(player, '对', trigger.player, '发动了【白驹鞬出】');
			}
			if (player.buff) {
				player.buff.buff_txhj_baijujianchu.update();
			}
		},
	};
	//31 绝境之策 【国风玉袍】
	lib.skill._buff_txhj_juejingzhice = {
		trigger: {
			player: 'shanEnd',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			if (player.getEquip('txhj_guofengyupao') && player != game.me) return !player.countCards('h');
			return !player.countCards('h') && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_juejingzhice');
		},
		content() {
			game.log('绝境之策:', player, '摸了两张牌');
			player.draw(2, true);
			if (player.buff) {
				player.buff.buff_txhj_juejingzhice.update();
			}
		},
	};
	//32 续命神药
	lib.skill._buff_txhj_xumingshenyao = {
		trigger: {
			target: 'taoBegin',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return event.player == player && player.hp <= 0 && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_xumingshenyao');
		},
		content() {
			game.log('续命神药:回复量+1');
			player.recover(true);
			if (player.buff) {
				player.buff.buff_txhj_xumingshenyao.update();
			}
		},
	};
	//33 无为之乐  (衍生)
	lib.skill._buff_txhj_wuweizhile = {
		trigger: {
			player: 'judgeEnd',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player, card) {
			return event.cardname == 'lebu' && event.player != game.me && event.result && event.result.suit != 'heart' && _status.currentPhase != game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_wuweizhile');
		},
		content() {
			event.player = trigger.player;
			game.log(trigger.player, '触发了【无为之乐】');
			if (!trigger.player.hasSkill('txhj_wuweizhile')) {
				trigger.player.addSkill('txhj_wuweizhile');
			}
			trigger.player.addMark('txhj_wuweizhile', 1, false);
			event.finish();
			if (player.buff) {
				player.buff.buff_txhj_wuweizhile.update();
			}
		},
	};
	//34 远断敌略 (衍生)
	lib.skill._buff_txhj_yuanduandilue = {
		trigger: {
			global: 'gameStart',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_yuanduandilue');
		},
		content() {
			game.log(player, '获得了【远断敌略】');
			player.addSkill('txhj_yuanduandilue');
			if (player.buff) {
				player.buff.buff_txhj_yuanduandilue.update();
			}
		},
	};
	//35 截辎之道
	lib.skill._buff_txhj_jiezizhidao = {
		trigger: {
			player: 'judgeEnd',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player, card) {
			return event.cardname == 'bingliang' && event.result && event.result.suit != 'club' && lib.config.taixuhuanjing.buff.includes('buff_txhj_jiezizhidao');
		},
		content() {
			game.log(player, '触发了【截辎之道】');
			game.me.draw(1, true);
			if (player.buff) {
				player.buff.buff_txhj_jiezizhidao.update();
			}
			event.finish();
		},
	};
	//36 黄天逆转 (衍生)
	lib.skill._buff_txhj_huangtiannizhuan = {
		trigger: {
			global: 'gameStart',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_huangtiannizhuan');
		},
		content() {
			'step 0';
			event.list = player.getEnemies().sortBySeat();
			('step 1');
			if (event.list.length) {
				var target = event.list.shift();
				player.line(target, 'green');
				target.addSkill('txhj_huangtiannizhuan');
				target.addMark('txhj_huangtiannizhuan', 1, false);
				game.log(target, '获得了负面效果:【黄天逆转】');
				event.redo();
			}
			if (player.buff) {
				player.buff.buff_txhj_huangtiannizhuan.update();
			}
		},
	};
	//37 洞察之眼
	lib.skill._buff_txhj_dongchazhiyan = {
		trigger: {
			player: 'useCardToTargeted',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		_priority: 10,
		filter(event, player) {
			return event.card && event.card.name == 'shunshou' && _status.currentPhase == player && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_dongchazhiyan');
		},
		popup: false,
		content() {
			game.log(player, '触发了【洞察之眼】');
			player.addTempSkill('txhj_kapaikeshi', 'useCardAfter');
			if (player.buff) {
				player.buff.buff_txhj_dongchazhiyan.update();
			}
		},
	};
	//38 明镜之眼
	lib.skill._buff_txhj_mingjingzhiyan = {
		trigger: {
			player: 'useCardToTargeted',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		_priority: 10,
		filter(event, player) {
			return event.card && event.card.name == 'guohe' && _status.currentPhase == player && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_mingjingzhiyan');
		},
		popup: false,
		content() {
			game.log(player, '触发了【明镜之眼】');
			player.addTempSkill('txhj_kapaikeshi', 'useCardAfter');
			if (player.buff) {
				player.buff.buff_txhj_mingjingzhiyan.update();
			}
		},
	};
	//39 巨象之锋
	lib.skill._buff_txhj_juxiangzhifeng = {
		trigger: {
			player: 'useCardToPlayered',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return event.card && event.card.name == 'nanman' && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_juxiangzhifeng');
		},
		logTarget: 'target',
		content() {
			'step 0';
			var num = trigger.target.countCards('h', 'sha');
			var next = trigger.target
				.chooseToDiscard('弃置一张牌,或不能响应' + get.translation(trigger.card), 'he')
				.set('ai', function (card) {
					var num = _status.event.num;
					if (num == 0) return 0;
					if (card.name == 'sha') return num > 1 ? 2 : 0;
					return 6 - get.value(card);
				})
				.set('num', num);
			('step 1');
			if (result.bool == false) {
				game.log('【巨象之锋】:', trigger.target, '不可响应', trigger.card);
				trigger.directHit.add(trigger.target);
			}
			if (player.buff) {
				player.buff.buff_txhj_juxiangzhifeng.update();
			}
		},
	};
	//40 乱击锋矢
	lib.skill._buff_txhj_luanjifengshi = {
		trigger: {
			player: 'useCardToPlayered',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return event.card && event.card.name == 'wanjian' && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_luanjifengshi');
		},
		logTarget: 'target',
		content() {
			'step 0';
			var num = trigger.target.countCards('h', 'shan');
			var next = trigger.target
				.chooseToDiscard('弃置一张牌,或不能响应' + get.translation(trigger.card), 'he')
				.set('ai', function (card) {
					var num = _status.event.num;
					if (num == 0) return 0;
					if (card.name == 'shan') return num > 1 ? 2 : 0;
					return 6 - get.value(card);
				})
				.set('num', num);
			('step 1');
			if (result.bool == false) {
				game.log('【乱击锋矢】:', trigger.target, '不可响应', trigger.card);
				trigger.directHit.add(trigger.target);
			}
			if (player.buff) {
				player.buff.buff_txhj_luanjifengshi.update();
			}
		},
	};
	//41 桃园义誓 (衍生)
	lib.skill._buff_txhj_taoyuanyishi = {
		trigger: {
			player: 'useCardToPlayered',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		_priority: 3,
		filter(event, player, card) {
			return event.card && event.card.name == 'taoyuan' && event.target && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_taoyuanyishi');
		},
		content() {
			if (!player.hasSkill('txhj_taoyuanyishi')) {
				player.addTempSkill('txhj_taoyuanyishi', 'useCardToAfter');
			}
			if (player.buff) {
				player.buff.buff_txhj_taoyuanyishi.update();
			}
		},
	};
	//42 好施的报偿
	lib.skill._buff_txhj_haoshidebaochao = {
		trigger: {
			player: 'useCardEnd',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player, card) {
			return event.card && event.card.name == 'wugu' && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_haoshidebaochao');
		},
		content() {
			game.log(player, '发动了【好施的报偿】');
			player.draw(1, true);
			if (player.buff) {
				player.buff.buff_txhj_haoshidebaochao.update();
			}
		},
	};
	//43 夺策己用
	lib.skill._buff_txhj_duocejiyong = {
		trigger: {
			player: 'useCard',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return event.respondTo && event.respondTo[0] && event.card && event.card.name == 'wuxie' && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_duocejiyong');
		},
		content() {
			var cards = trigger.respondTo[1].cards;
			player.gain(cards, 'log', 'gain2');
			game.log(player, '触发了【夺策己用】');
			if (player.buff) {
				player.buff.buff_txhj_duocejiyong.update();
			}
		},
	};
	//46 博闻强识
	//47 巨富雄豪  【虚妄之冕】
	/*	lib.skill._buff_txhj_jufuxionghao = {
		trigger: {
				player: "useCardAfter",
			},
			forced: true,
			filter(event, player) {
				if (_status.currentPhase != player&&player!=game.me) return false;
				if (_status.currentPhase != player&&player==game.me) return false;
				var suit = get.suit(event.card, 'heart');
				var suits = [];
				var cards = player.getCards("e");
				if (Array.isArray(cards)) for (var i of cards) {
					if (get.subtype(i) == "equip3" || get.subtype(i) == "equip4") suits.push(get.suit(i));
				}
				 if(player!=game.me&&player.getEquip('txhj_xuwangzhimian'))
				  return suits.includes(get.suit(event.card)) && player.getHistory('custom', function(evt) {
					return evt.jufuxionghao_name == suit;
				}).length == 0;
				  return lib.config.taixuhuanjing.buff.includes('buff_txhj_jufuxionghao')&&player==game.me&&suits.includes(get.suit(event.card)) && player.getHistory('custom', function(evt) {
					return evt.jufuxionghao_name == suit;
			}).length == 0;
			},
			content() {
				'step 0'
				event.suit = get.suit(trigger.card, 'heart');
				game.log(player, '触发了【巨富雄豪】');
				if (player.buff&&player==game.me) {
					player.buff.buff_txhj_jufuxionghao.update();
				}
				player.draw();
				'step 1'
				player.getHistory('custom').push({
					jufuxionghao_name: event.suit
				});
			},
		};*/
	//48 马均的改造 (涉及游戏外获得卡牌)
	//49 仙葫汲取  【灵宝仙葫】(涉及游戏结算)
	//50 拂尘荡魔  【太极拂尘】   (不存在相关trigger时机,或者重写卡牌)
	//51 神符化邪 【冲应神符】
	lib.skill._buff_txhj_shenfuhuaxie = {
		trigger: {
			player: 'damageEnd',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			if (player.getEquip('txhj_chongyingshenfu') && player != game.me) return get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o' && !player.hasSkill('jianxiong');
			return get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o' && !player.hasSkill('jianxiong') && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_shenfuhuaxie');
		},
		content() {
			player.gain(trigger.cards, 'gain2');
			game.log(player, '触发了【神符化邪】');
			if (player.buff) {
				player.buff.buff_txhj_shenfuhuaxie.update();
			}
		},
	};
	//52 攻之宝物
	lib.skill._buff_txhj_gongzhibaowu = {
		trigger: {
			player: 'phaseZhunbeiBegin',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			//	if (player.getEquip('txhj_xuwangzhimian') && player != game.me)
			return (player.getEquip(3) || player.getEquip(4)) && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_gongzhibaowu');
		},
		content() {
			game.log(player, '触发了【攻之宝物】获得了【杀】');
			var card = get.cardPile(function (card) {
				return card.name == 'sha';
			});
			if (card) player.gain(card, 'gain2');
			if (player.buff) {
				player.buff.buff_txhj_gongzhibaowu.update();
			}
		},
	};
	//53 防之宝物
	lib.skill._buff_txhj_fangzhibaowu = {
		trigger: {
			player: 'phaseJieshuBegin',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return (player.getEquip(3) || player.getEquip(4)) && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_fangzhibaowu');
		},
		content() {
			game.log(player, '触发了【防之宝物】获得了【闪】');
			var card = get.cardPile(function (card) {
				return card.name == 'shan';
			});
			if (card) player.gain(card, 'gain2');
			if (player.buff) {
				player.buff.buff_txhj_fangzhibaowu.update();
			}
		},
	};
	//54 碎盔裂甲
	lib.skill._buff_txhj_suikuiliejia = {
		trigger: {
			source: 'damageEnd',
		},
		filter(event, player) {
			return (
				event.card &&
				event.card.name == 'sha' &&
				event.notLink() &&
				event.player.getCards('e', {
					subtype: 'equip2',
				}).length &&
				player.getEquip(1) &&
				player == game.me &&
				lib.config.taixuhuanjing.buff.includes('buff_txhj_suikuiliejia')
			);
		},
		_priority: 16,
		forced: true,
		mode: ['taixuhuanjing'],
		content() {
			trigger.player.discard(
				trigger.player.getCards('e', {
					subtype: 'equip2',
				})
			);
			game.log(player, '触发了【碎盔裂甲】');
			if (player.buff) {
				player.buff.buff_txhj_suikuiliejia.update();
			}
		},
	};
	//55 一鼓作气
	lib.skill._buff_txhj_yiguzuoqi = {
		trigger: {
			player: 'useCard',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			if (event.card.name != 'sha') return false;
			var evt = event.getParent('phaseUse');
			if (!evt || evt.player != player) return false;
			var index = player
				.getHistory('useCard', function (evtx) {
					return evtx.card.name == 'sha' && evtx.getParent('phaseUse') == evt;
				})
				.indexOf(event);
			return index == 1 && player.getEquip(1) && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_yiguzuoqi');
		},
		content() {
			var evt = trigger.getParent('phaseUse');
			var index = player
				.getHistory('useCard', function (evtx) {
					return evtx.card.name == 'sha' && evtx.getParent('phaseUse') == evt;
				})
				.indexOf(trigger);
			if (index == 1) {
				game.log(player, '触发了【一鼓作气】');
				player.draw(1, true);
			}
			if (player.buff) {
				player.buff.buff_txhj_yiguzuoqi.update();
			}
		},
	};
	//56 上将的膂力
	//57 深寒雪饮
	//58 修罗的怜悯
	lib.skill._buff_txhj_xiuluodebeimin = {
		trigger: {
			global: 'recoverEnd',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return event.source && event.source == player && player.getEquip(1) && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_xiuluodebeimin');
		},
		content() {
			game.log(player, '触发了【修罗的怜悯】');
			player.draw(1, true);
			if (player.buff) {
				player.buff.buff_txhj_xiuluodebeimin.update();
			}
		},
	};
	//59 策备不虞
	lib.skill._buff_txhj_cebeibuyu = {
		trigger: {
			player: 'damageBegin3',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return event.card && (get.type(event.card, 'trick') == 'trick' || get.type(event.card, 'delay') == 'delay') && player.getEquip(2) && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_cebeibuyu');
		},
		content() {
			game.log(player, '触发了【策备不虞】:', trigger.card, '造成的伤害-1');
			trigger.num--;
			if (player.buff) {
				player.buff.buff_txhj_cebeibuyu.update();
			}
		},
	};
	//60 公台之智
	lib.skill._buff_txhj_gongtaizhizhi = {
		trigger: {
			global: 'roundStart',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return player == game.me && player.getEquip(2) && player.isHealthy() && lib.config.taixuhuanjing.buff.includes('buff_txhj_gongtaizhizhi');
		},
		content() {
			game.log(player, '未受伤,触发了【公台之智】');
			player.draw(1, true);
			if (player.buff) {
				player.buff.buff_txhj_gongtaizhizhi.update();
			}
		},
	};
	//61 天下无双!
	lib.skill._buff_txhj_tianxiawushuang = {
		trigger: {
			source: 'damageBegin1',
		},
		filter(event, player, card) {
			if (event.nature) return false;
			return event.card && event.card.name == 'sha' && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_tianxiawushuang');
		},
		forced: true,
		mode: ['taixuhuanjing'],
		content() {
			game.log(player, '触发了【天下无双!】:', trigger.card, '伤害+1');
			trigger.num++;
			if (player.buff) {
				player.buff.buff_txhj_tianxiawushuang.update();
			}
		},
	};
	//62 击剑长歌
	lib.skill._buff_txhj_jijianchangge = {
		trigger: {
			player: ['useCard', 'respond'],
		},
		filter(event, player) {
			return event.card && event.card.name == 'sha' && _status.currentPhase != player && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_jijianchangge');
		},
		forced: true,
		mode: ['taixuhuanjing'],
		content() {
			game.log(player, '触发了【击剑长歌】');
			player.draw(1, true);
			if (player.buff) {
				player.buff.buff_txhj_jijianchangge.update();
			}
		},
	};
	//63 黄天之怒
	lib.skill._buff_txhj_huangtianzhinu = {
		trigger: {
			source: 'damageEnd',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return event.nature && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_huangtianzhinu');
		},
		content() {
			if (trigger.player && trigger.player.isIn() && !trigger._notrigger.includes(trigger.player)) {
				trigger.player.randomDiscard(true, 'he');
				game.log(trigger.player, '【黄天之怒】弃置了一张牌');
			}
			if (player.buff) {
				player.buff.buff_txhj_huangtianzhinu.update();
			}
		},
	};
	//64 洛神绝章 (衍生)
	lib.skill._buff_txhj_luoshenjuezhang = {
		trigger: {
			global: 'gameStart',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_luoshenjuezhang');
		},
		content() {
			game.log(player, '获得了【洛神绝章】');
			player.addSkill('txhj_luoshenjuezhang');
			if (player.buff) {
				player.buff.buff_txhj_luoshenjuezhang.update();
			}
		},
	};
	//65 神医之道
	lib.skill._buff_txhj_shenyizhidao = {
		trigger: {
			player: 'useCard',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return event.card && event.card.name == 'tao' && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_shenyizhidao');
		},
		content() {
			game.log(player, '触发了【神医之道】');
			trigger.baseDamage++;
			if (player.buff) {
				player.buff.buff_txhj_shenyizhidao.update();
			}
		},
	};
	//66 魔王的佳酿	(衍生)
	lib.skill._buff_txhj_mowangdejianiang = {
		trigger: {
			player: 'useCardEnd',
		},
		filter(event, player, card) {
			return event.card && (event.card.name == 'jiu' || event.card.name == 'txhj_xionghuangjiu') && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_mowangdejianiang');
		},
		forced: true,
		mode: ['taixuhuanjing'],
		content() {
			if (!player.hasSkill('txhj_mowangdejianiang')) {
				player.addTempSkill('txhj_mowangdejianiang', {
					player: 'phaseAfter',
				});
			}
			player.storage.txhj_mowangdejianiang++;
			player.syncStorage('txhj_mowangdejianiang');
			player.markSkill('txhj_mowangdejianiang');
			if (player.buff) {
				player.buff.buff_txhj_mowangdejianiang.update();
			}
		},
	};
	//67 酣怒
	lib.skill._buff_txhj_hannu = {
		trigger: {
			player: 'useCardAfter',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player, card) {
			return event.card && (event.card.name == 'jiu' || event.card.name == 'txhj_xionghuangjiu') && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_hannu');
		},
		content() {
			game.log(player, '触发了【酣怒】');
			var card = get.cardPile(function (card) {
				return card.name == 'sha';
			});
			if (card) player.gain(card, 'gain2');
			if (player.buff) {
				player.buff.buff_txhj_hannu.update();
			}
		},
	};
	//68 国色绝艳
	lib.skill._buff_txhj_gusoejueyan = {
		trigger: {
			player: 'judgeEnd',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player, card) {
			return event.cardname == 'lebu' && event.result && event.result.suit != 'heart' && lib.config.taixuhuanjing.buff.includes('buff_txhj_gusoejueyan');
		},
		content() {
			game.log(game.me, '触发了【国色绝艳】');
			game.me.draw(1, true);
			if (player.buff) {
				player.buff.buff_txhj_gusoejueyan.update();
			}
		},
	};
	//69 命运的旨意
	lib.skill._buff_txhj_mingyundezhiyi = {
		trigger: {
			player: 'useCardEnd',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return event.card && event.card.name == 'shandian' && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_mingyundezhiyi');
		},
		content() {
			'step 0';
			event.list = player.getEnemies().sortBySeat();
			game.log(player, '发动了【命运的旨意】');
			('step 1');
			if (event.list.length) {
				var target = event.list.shift();
				if (!target.isLinked()) {
					target.link();
					player.line(target, 'green');
				}
				event.redo();
			} else {
				event.finish();
			}
			if (player.buff) {
				player.buff.buff_txhj_mingyundezhiyi.update();
			}
		},
	};
	//70 系盟之利
	lib.skill._buff_txhj_ximengzhili = {
		trigger: {
			player: 'drawBefore',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return event.parent.name == 'txhj_yuanjiao' && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_ximengzhili');
		},
		content() {
			game.log(player, '触发了【系盟之利】');
			trigger.num++;
			if (player.buff) {
				player.buff.buff_txhj_ximengzhili.update();
			}
		},
	};
	//71 横行无忌
	lib.skill._buff_txhj_hengxingwuji = {
		trigger: {
			player: 'useCardAfter',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return event.card && event.card.name == 'guohe' && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_hengxingwuji');
		},
		content() {
			game.log(player, '触发了【横行无忌】');
			player.draw(1, true);
			if (player.buff) {
				player.buff.buff_txhj_hengxingwuji.update();
			}
		},
	};
	//72 十二奇策·进 (衍生)
	lib.skill._buff_txhj_shierqicejin = {
		trigger: {
			global: 'gameStart',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_shierqicejin');
		},
		content() {
			'step 0';
			event.list = player.getFriends().sortBySeat();
			('step 1');
			if (event.list.length) {
				var target = event.list.shift();
				player.line(target, 'green');
				target.addSkill('txhj_shierqicejin');
				game.log(target, '获得了正面效果:【十二奇策·进】');
				event.redo();
			}
			if (player.buff) {
				player.buff.buff_txhj_shierqicejin.update();
			}
		},
	};
	//73 十二奇策·退 (衍生)
	lib.skill._buff_txhj_shierqicetui = {
		trigger: {
			global: 'gameStart',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_shierqicetui');
		},
		content() {
			'step 0';
			event.list = player.getEnemies().sortBySeat();
			('step 1');
			if (event.list.length) {
				var target = event.list.shift();
				player.line(target, 'green');
				target.addSkill('txhj_shierqicetui');
				game.log(target, '获得了负面效果:【十二奇策·退】');
				event.redo();
			}
			if (player.buff) {
				player.buff.buff_txhj_shierqicetui.update();
			}
		},
	};
	//74 破釜沉舟  (衍生)
	lib.skill._buff_txhj_pofuchenzhou = {
		trigger: {
			global: ['gameStart'],
		},
		forced: true,
		mode: ['taixuhuanjing'],
		_priority: 7,
		filter(event, player) {
			return player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_pofuchenzhou');
		},
		content() {
			player.addSkill('txhj_pofuchenzhou');
			game.log(player, '触发了【破釜沉舟】');
			if (player.buff) {
				player.buff.buff_txhj_pofuchenzhou.update();
			}
		},
	};
	//75 黄天已立
	lib.skill._buff_txhj_huangtianyili = {
		trigger: { global: 'judge' },
		forced: true,
		_priority: 7,
		filter(event, player) {
			return event.player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_huangtianyili');
		},
		content() {
			'step 1';
			player.popup('spade');
			if (!trigger.fixedResult || trigger.fixedResult) trigger.fixedResult = {};
			if (player.buff) {
				player.buff.buff_txhj_huangtianyili.update();
			}
			game.log('【黄天已立】:', player, '的判定结果视为♠️️');
			trigger.fixedResult.suit = 'spade';
			trigger.fixedResult.color = get.color({ suit: 'spade' });
		},
	};
	//76 黄天之诅
	lib.skill._buff_txhj_huangtianzhizu = {
		trigger: { global: 'judge' },
		forced: true,
		_priority: 5,
		filter(event, player) {
			return event.player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_huangtianzhizu');
		},
		content() {
			'step 1';
			player.popup('spade');
			if (!trigger.fixedResult || trigger.fixedResult) trigger.fixedResult = {};
			if (player.buff) {
				player.buff.buff_txhj_huangtianzhizu.update();
			}
			game.log('【黄天之诅】:', player, '的判定结果视为♠️<b>5</b>️');
			trigger.fixedResult = {
				suit: 'spade',
				color: get.color({ suit: 'spade' }),
				number: 5,
			};
		},
	};
	//77 黄天之悯
	lib.skill._buff_txhj_huangtianzhimin = {
		trigger: { player: 'judgeEnd' },
		preHidden: true,
		forced: true,
		filter(event, player) {
			return get.position(event.result.card, true) == 'o' && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_huangtianzhimin');
		},
		content() {
			game.log('【黄天之悯】:', player, '摸一张牌');
			player.draw(1, true);
			if (player.buff) {
				player.buff.buff_txhj_huangtianzhimin.update();
			}
		},
	};
	//-------------------------------------------------------------//
	//-----------类mod技能,和一些开局加入的技能------------//
	//特殊效果  AI手牌可视
	lib.skill.txhj_kapaikeshi = {
		charlotte: true,
		forced: true,
		ai: {
			viewHandcard: true,
		},
	};
	//一些buff类mod
	//10 文和计备
	lib.skill.txhj_wenhejibei = {
		forced: true,
		mod: {
			targetEnabled(card, player, target) {
				if (get.type(card) == 'delay') {
					return false;
				}
			},
		},
	};
	//11 月英的智慧
	lib.skill.txhj_yueyingdezhihui = {
		forced: true,
		mod: {
			targetInRange(card, player, target, now) {
				var type = get.type(card);
				if (type == 'trick' || type == 'delay') return true;
			},
		},
	};
	//12 长兵广刃
	lib.skill.txhj_changbingguangren = {
		forced: true,
		mod: {
			attackRange(player, num) {
				return num + 3;
			},
		},
	};
	//15 雄姿英发
	lib.skill.txhj_xiongziyingfa = {
		forced: true,
		mod: {
			maxHandcardBase(player, num) {
				return player.maxHp;
			},
		},
	};
	//16 吴相的心血
	lib.skill.txhj_wuxiangdexinxue = {
		forced: true,
		mod: {
			maxHandcard(player, num) {
				return num + 3;
			},
		},
	};
	//破阵之锋
	lib.skill.txhj_pozhenzhifeng = {
		init(player, skill) {
			game.log(player, '获得了临时效果【破阵之锋】');
		},
		onremove(player, skill) {
			game.log(player, '失去了临时效果【破阵之锋】');
		},
		forced: true,
		trigger: {
			player: 'useCardToBegin',
		},
		filter(event, player) {
			if (event.target == game.me) return false;
			return event.targets && event.targets.length >= 1 && player.getEnemies().includes(event.target) && player.getEquip(1) && player == game.me;
		},
		content() {
			if (player.buff) {
				player.buff.buff_txhj_pozhenzhifeng.update();
			}
		},
		ai: {
			unequip: true,
			skillTagFilter(player, tag, arg) {
				if (!lib.config.taixuhuanjing.buff.includes('buff_txhj_pozhenzhifeng') && !player.getEquip('txhj_feilong')) return false;
				if (arg && arg.target && arg.target.isEnemiesOf(player) && (player.getEquip(1) || player.getEquip('txhj_feilong'))) return true;
				return false;
			},
		},
	};
	//33 无为之乐
	lib.skill.txhj_wuweizhile = {
		forced: true,
		mark: true,
		marktext: '💔️',
		intro: {
			name: '无为之乐',
			content: '本局游戏手牌上限-#',
		},
		mod: {
			maxHandcard(player, num) {
				var n = player.countMark('txhj_wuweizhile');
				return num - n;
			},
		},
	};
	//34 远断敌略
	lib.skill.txhj_yuanduandilue = {
		forced: true,
		mod: {
			targetInRange(card, player, target, now) {
				if (card.name == 'bingliang') return true;
			},
		},
	};
	//36 黄天逆转
	lib.skill.txhj_huangtiannizhuan = {
		charlotte: true,
		marktext: '☯',
		intro: {
			name: '黄天逆转',
			content: '本局游戏内计算【闪电】的效果时反转#次',
		},
		mod: {
			judge(player, result) {
				if (_status.event.cardname == 'shandian' && player.countMark('txhj_huangtiannizhuan') % 2 == 1) {
					if (result.bool == false) {
						result.bool = true;
					} else {
						result.bool = false;
					}
				}
			},
		},
	};
	//41 桃园义誓
	lib.skill.txhj_taoyuanyishi = {
		init(player, skill) {
			game.log(player, '获得了【桃园义誓】');
		},
		onremove(player, skill) {
			game.log(player, '失去了【桃园义誓】');
		},
		global: 'taoyuanyishiX',
	};
	lib.skill.taoyuanyishiX = {
		trigger: {
			player: 'recoverBefore',
		},
		forced: true,
		filter(event, player) {
			if (event.player.isEnemyOf(game.me)) return false;
			return event.player.isFriendOf(game.me);
		},
		content() {
			trigger.num++;
			game.log('【桃园义誓】:', trigger.player, '回复量+1');
		},
	};
	//47 巨富雄豪
	//lib.skill.txhj_jufuxionghao = {
	//};
	//64 洛神绝章
	lib.skill.txhj_luoshenjuezhang = {
		trigger: {
			player: 'useCardAfter',
		},
		filter(event, player) {
			return event.card && event.card.name == 'shan' && !player.hasSkill('txhj_luoshen');
		},
		forced: true,
		round: 1,
		content() {
			game.log(player, '触发了【洛神绝章】');
			player.draw(1, true);
			player.addSkill('txhj_luoshen');
		},
	};
	lib.skill.txhj_luoshen = {
		trigger: {
			global: 'roundStart',
		},
		forced: true,
		mark: true,
		marktext: '♥️️️',
		intro: {
			name: '洛神绝章',
			content: '本回合已触发【洛神绝章】,下一轮开始时重置次数.',
		},
		content() {
			player.removeSkill('txhj_luoshen');
		},
	};
	//66 魔王的佳酿
	lib.skill.txhj_mowangdejianiang = {
		init(player, skill) {
			game.log(player, '获得了【魔王的佳酿】');
			player.storage.txhj_mowangdejianiang = 0;
			player.syncStorage('txhj_mowangdejianiang');
			player.markSkill('txhj_mowangdejianiang');
		},
		onremove(player, skill) {
			game.log(player, '失去了【魔王的佳酿】');
		},
		trigger: {
			source: 'damageBegin1',
		},
		filter(event, player) {
			if (event.getParent(2).jiu == true) return false;
			return !player.hasSkill('jiu') && event.card && event.notLink() && event.card.name == 'sha';
		},
		group: 'txhj_jianiang_clear',
		_priority: 6,
		forced: true,
		content() {
			var n = player.storage.txhj_mowangdejianiang;
			if (player.buff) {
				player.buff.buff_txhj_mowangdejianiang.update();
			}
			game.log(player, '发动了【魔王的佳酿】');
			trigger.num += n;
		},
		marktext: '佳酿',
		intro: {
			name: '魔王的佳酿',
			content: '本回合酒的持续效果增加.【杀】伤害+#,直到回合结束',
		},
	};
	lib.skill.txhj_jianiang_clear = {
		trigger: {
			player: 'phaseEnd',
		},
		filter(event, player) {
			return player.storage.txhj_mowangdejianiang > 0;
		},
		forced: true,
		content() {
			var a = player.storage.txhj_mowangdejianiang;
			player.storage.txhj_mowangdejianiang -= a;
			player.syncStorage('txhj_mowangdejianiang');
			player.unmarkSkill('txhj_mowangdejianiang');
		},
	};
	//72 十二奇策·进
	lib.skill.txhj_shierqicejin = {
		trigger: {
			target: 'useCardToTarget',
		},
		mark: true,
		marktext: '奇策·进',
		intro: {
			name: '十二奇策·进',
			content: '本局游戏中,成为玩家使用【万箭齐发】或【南蛮入侵】的目标时,取消之.',
		},
		forced: true,
		filter(event, player) {
			return event.player == game.me && ['wanjian', 'nanman'].includes(event.card.name);
		},
		content() {
			trigger.targets.remove(player);
			trigger.parent.triggeredTargets2.remove(player);
			trigger.untrigger();
			trigger.cancel();
			game.log(player, '受【十二奇策·进】保护');
		},
	};
	//73 十二奇策·退
	lib.skill.txhj_shierqicetui = {
		trigger: {
			target: 'useCardToTarget',
		},
		mark: true,
		marktext: '奇策·退',
		intro: {
			name: '十二奇策·退',
			content: '本局游戏中,成为玩家使用【五谷丰登】或【桃园结义】的目标时,取消之.',
		},
		forced: true,
		filter(event, player) {
			return event.player == game.me && ['wugu', 'taoyuan'].includes(event.card.name);
		},
		content() {
			trigger.parent.excluded.add(player);
			game.log(player, '受【十二奇策·退】排斥');
		},
	};
	//74 破釜沉舟
	lib.skill.txhj_pofuchenzhou = {
		trigger: {
			player: ['phaseBegin', 'phaseEnd'],
		},
		mark: true,
		marktext: '破釜',
		intro: {
			name: '破釜沉舟',
			content: '本局游戏,回合开始/结束阶段,摸一张牌.',
		},
		forced: true,
		_priority: 12,
		content() {
			player.draw(1, true);
			game.log(player, '发动了【破釜沉舟】');
		},
	};
	//魔改和缝改的buff(非官方)
	//艳丽红颜
	lib.skill._buff_txhj_yanlihongyan = {
		trigger: { global: 'judge' },
		forced: true,
		_priority: 7,
		filter(event, player) {
			return event.player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_yanlihongyan');
		},
		content() {
			'step 1';
			player.popup('heart');
			if (!trigger.fixedResult || trigger.fixedResult) trigger.fixedResult = {};
			if (player.buff) {
				player.buff.buff_txhj_yanlihongyan.update();
			} //QQQ
			game.log('【艳丽红颜】:', player, '的判定结果视为♥️️️');
			trigger.fixedResult.suit = 'heart';
			trigger.fixedResult.color = get.color({ suit: 'heart' });
		},
	};
	//魔骑的扬威
	lib.skill._buff_txhj_moqiyangwei = {
		trigger: {
			source: 'damageEnd',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player, card) {
			if (event.nature) return false;
			return event.card && event.card.name == 'sha' && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_moqiyangwei');
		},
		content() {
			player.draw(2, true);
			game.log(player, '对', trigger.player, '发动了【魔骑的扬威】');
			if (player.buff) {
				player.buff.buff_txhj_moqiyangwei.update();
			}
		},
	};
	//狂狼之噬
	lib.skill._buff_txhj_kuanglangzhishi = {
		trigger: {
			source: 'damageEnd',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_kuanglangzhishi');
		},
		content() {
			player.recover(1, true);
			game.log(trigger.player, '【狂狼之噬】回复了1点体力');
			if (player.buff) {
				player.buff.buff_txhj_kuanglangzhishi.update();
			}
		},
	};
	//凉勇之骁
	lib.skill._buff_txhj_liangyongzhixiao = {
		trigger: { player: 'useCard' },
		forced: true,
		filter(event, player) {
			return event.card && event.card.name == 'sha' && get.color(event.card) == 'black' && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_liangyongzhixiao');
		},
		content() {
			trigger.directHit.addArray(game.players);
			game.log(player, '触发了【凉勇之骁】');
			if (player.buff) {
				player.buff.buff_txhj_liangyongzhixiao.update();
			}
		},
	};
	//汉室衰微
	lib.skill._buff_txhj_hanshishuaiwei = {
		trigger: { global: 'phaseJieshuBegin' },
		forced: true,
		filter(event, player) {
			return player != event.player && event.player.isIn() && event.player.isMinHp() && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_hanshishuaiwei');
		},
		logTarget: 'player',
		content() {
			trigger.player.loseHp();
			game.log(player, '触发了【汉室衰微】');
			if (player.buff) {
				player.buff.buff_txhj_hanshishuaiwei.update();
			}
		},
	};
	//反间之计
	lib.skill._buff_txhj_fanjianzhiji = {
		trigger: {
			global: 'gainAfter',
			player: 'loseAsyncAfter',
		},
		//forced:true,
		forced: true,
		filter(event, player) {
			if (event.name == 'loseAsync') {
				if (event.type != 'gain') return false;
				var cards = event.getl(player).cards2;
				return game.hasPlayer(function (current) {
					if (current == player) return false;
					var cardsx = event.getg(current);
					for (var i of cardsx) {
						if (cards.includes(i)) return true;
					}
					return false;
				});
			}
			if (event.player != player) {
				var evt = event.getl(player);
				return evt && evt.hs && evt.hs.length && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_fanjianzhiji');
			}
			return false;
		},
		preHidden: true,
		content() {
			trigger.player.damage();
			game.log(player, '触发了【反间之计】');
			if (player.buff) {
				player.buff.buff_txhj_fanjianzhiji.update();
			}
		},
	};
	/*不世之功
	lib.skill._buff_txhj_bushizhigong = {
	trigger:{player:'compare',target:'compare'},
			filter:function(event,player){
							if(event.player==player){
								return !event.iwhile&&get.colour(event.card1)=='red'&& player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_bushizhigong');//&&event.card1.vanishtag.includes('tianbian');
							}
							else{
								return get.colour(event.card2)=='red'&& player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_bushizhigong');//&&event.card2.vanishtag.includes('tianbian');
							}
						},
						silent:true,
						content:function(){
							game.log(player,'拼点牌点数视为','#yK');
							if(player==trigger.player){
								trigger.num1=13;
							}
							else{
								trigger.num2=13;
								game.log(player, '触发了【不世之功】');
								if (player.buff) {
			 player.buff.buff_txhj_bushizhigong.update();
				   }
						}
					},
				};	*/
	//百步穿杨
	lib.skill._buff_txhj_baibuchuanyang = {
		trigger: { source: 'damageBegin1' },
		check(event, player) {
			return get.attitude(player, event.player) <= 0;
		},
		forced: true,
		filter(event, player) {
			return !event.player.inRange(player) && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_baibuchuanyang');
		},
		content() {
			trigger.num++;
			game.log(player, '触发了【百步穿杨】');
			if (player.buff) {
				player.buff.buff_txhj_baibuchuanyang.update();
			}
		},
	};
	//国色天香
	lib.skill._buff_txhj_guosetianxiang = {
		trigger: {
			player: 'loseEnd',
		},
		usable: 1,
		forced: true,
		charlotte: true,
		filter(event, player) {
			return _status.currentPhase && player != _status.currentPhase && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_guosetianxiang');
		},
		content() {
			player.draw(2, true);
			game.log(player, '触发了【国色天香】');
			if (player.buff) {
				player.buff.buff_txhj_guosetianxiang.update();
			}
		},
	};
	//勇冠三军
	lib.skill._buff_txhj_yongguansanjun = {
		trigger: { player: 'useCard' },
		//frequent:true,
		forced: true,
		preHidden: true,
		filter(event, player) {
			return get.type(event.card) == 'basic' && event.card.isCard && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_yongguansanjun');
		},
		content() {
			player.gain(
				get.cardPile(function (card) {
					return get.type(card, 'trick') == 'trick';
				}),
				'gain2'
			);
			game.log(player, '触发了【勇冠三军】');
			if (player.buff) {
				player.buff.buff_txhj_yongguansanjun.update();
			}
		},
	};
	lib.translate.buff_txhj_yongguansanjun = '勇冠三军';
	//黄天已也死了
	lib.skill._buff_txhj_huangtianyisi = {
		trigger: { player: 'judgeEnd' },
		preHidden: true,
		forced: true,
		filter(event, player) {
			return get.position(event.result.card, true) == 'o' && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_huangtianyisi');
		},
		content() {
			game.log('【黄天也死了】:', player, '摸一张牌');
			player.loseHp(1, true);
			if (player.buff) {
				player.buff.buff_txhj_huangtianyisi.update();
			}
		},
	};
	//尾蜂的采酿
	lib.skill._buff_txhj_weifengcainiang = {
		trigger: {
			player: 'useCardAfter',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player, card) {
			return event.card && event.card.name == 'tao' && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_weifengcainiang');
		},
		content() {
			game.log(player, '触发了【尾蜂的采酿】');
			var card = get.cardPile(function (card) {
				return card.name == 'shan';
			});
			if (card) player.gain(card, 'gain2');
			if (player.buff) {
				player.buff.buff_txhj_weifengcainiang.update();
			}
		},
	};
	//老者的嘱托
	lib.skill._buff_txhj_laozhedezhutuo = {
		trigger: {
			player: ['useCard', 'respond'],
		},
		filter(event, player) {
			return event.card && event.card.name == 'shan' && _status.currentPhase != player && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_laozhedezhutuo');
		},
		forced: true,
		mode: ['taixuhuanjing'],
		content() {
			game.log(player, '触发了【老者的嘱托】');
			player.draw(1, true);
			if (player.buff) {
				player.buff.buff_txhj_laozhedezhutuo.update();
			}
		},
	};
	//荧惑兽心
	lib.skill._buff_txhj_yinghuoshouxin = {
		trigger: {
			global: 'roundStart',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return player == game.me && player.getEquip(2) && player.isHealthy() && lib.config.taixuhuanjing.buff.includes('buff_txhj_yinghuoshouxin');
		},
		content() {
			game.log(player, '未受伤,触发了【荧惑兽心】');
			player.gainMaxHp(1, true);
			if (player.buff) {
				player.buff.buff_txhj_yinghuoshouxin.update();
			}
		},
	};
	//折刀断器
	lib.skill._buff_txhj_zhedaoduanqi = {
		trigger: {
			source: 'damageEnd',
		},
		filter(event, player) {
			return (
				event.card &&
				event.card.name == 'sha' &&
				event.notLink() &&
				event.player.getCards('e', {
					subtype: 'equip1',
				}).length &&
				player.getEquip(1) &&
				player == game.me &&
				lib.config.taixuhuanjing.buff.includes('buff_txhj_zhedaoduanqi')
			);
		},
		_priority: 16,
		forced: true,
		mode: ['taixuhuanjing'],
		content() {
			trigger.player.discard(
				trigger.player.getCards('e', {
					subtype: 'equip1',
				})
			);
			game.log(player, '触发了【折刀断器】');
			if (player.buff) {
				player.buff.buff_txhj_zhedaoduanqi.update();
			}
		},
	};
	//火势逆风
	lib.skill._buff_txhj_huoshinifeng = {
		trigger: {
			global: 'gameStart',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_huoshinifeng');
		},
		content() {
			'step 0';
			event.list = player.getEnemies().sortBySeat();
			('step 1');
			if (event.list.length) {
				var target = event.list.shift();
				player.line(target, 'green');
				target.addSkill('txhj_huoshinifeng');
				target.addMark('txhj_huoshinifeng', 1, false);
				game.log(target, '获得了负面效果:【火势逆风】');
				event.redo();
			}
			if (player.buff) {
				player.buff.buff_txhj_huoshinifeng.update();
			}
		},
	};
	//火势逆风衍生
	lib.skill.txhj_huoshinifeng = {
		charlotte: true,
		marktext: '☯',
		intro: {
			name: '火势逆风',
			content: '本局游戏内计算【火山】的效果时反转#次',
		},
		mod: {
			judge(player, result) {
				if (_status.event.cardname == 'huoshan' && player.countMark('txhj_huoshinifeng') % 2 == 1) {
					if (result.bool == false) {
						result.bool = true;
					} else {
						result.bool = false;
					}
				}
			},
		},
	};
	//冰封
	lib.skill._buff_txhj_bingfeng = {
		trigger: {
			source: 'damageBegin1',
		},
		filter(event, player) {
			return event.nature == 'ice' && event.notLink() && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_bingfeng');
		},
		forced: true,
		mode: ['taixuhuanjing'],
		content() {
			game.log(player, '发动了【冰封】');
			trigger.num++;
			if (player.buff) {
				player.buff.buff_txhj_bingfeng.update();
			}
		},
	};
	//杀戮无赦
	lib.skill._buff_txhj_shanluwushe = {
		trigger: {
			player: 'useCardAfter',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return event.card && event.card.name == 'sha' && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_shanluwushe');
		},
		content() {
			game.log(player, '触发了【杀戮无赦】');
			player.draw(1, true);
			if (player.buff) {
				player.buff.buff_txhj_shanluwushe.update();
			}
		},
	};
	//毒仕的迷烟
	lib.skill._buff_txhj_dushidemiyan = {
		trigger: { global: 'judge' },
		forced: true,
		_priority: 5,
		filter(event, player) {
			return event.player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_dushidemiyan');
		},
		content() {
			'step 1';
			player.popup('spade');
			if (!trigger.fixedResult || trigger.fixedResult) trigger.fixedResult = {};
			if (player.buff) {
				player.buff.buff_txhj_dushidemiyan.update();
			}
			game.log('【毒仕的迷烟】:', player, '的判定结果视为♣️️<b>4</b>️');
			trigger.fixedResult = {
				suit: 'club',
				color: get.color({ suit: 'club' }),
				number: 4,
			};
		},
	};
	//趁虚而入
	lib.skill._buff_txhj_chenxverru = {
		trigger: {
			player: 'phaseZhunbeiBegin',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			if (player.getEquip('txhj_houzi') && player != game.me) return (player.getEquip(3) || player.getEquip(4)) && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_chenxverru');
		},
		content() {
			game.log(player, '触发了【趁虚而入】获得了【趁火打劫】');
			var card = get.cardPile(function (card) {
				return card.name == 'zhujinqiyuan';
			});
			if (card) player.gain(card, 'gain2');
			if (player.buff) {
				player.buff.buff_txhj_chenxverru.update();
			}
		},
	};
	//讨贼锋矢
	lib.skill._buff_txhj_taozeifengshi = {
		trigger: {
			player: 'useCardToPlayered',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return event.card && event.card.name == 'sha' && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_taozeifengshi');
		},
		logTarget: 'target',
		content() {
			'step 0';
			var num = trigger.target.countCards('h', 'shan');
			var next = trigger.target
				.chooseToDiscard('弃置一张牌,或不能响应' + get.translation(trigger.card), 'he')
				.set('ai', function (card) {
					var num = _status.event.num;
					if (num == 0) return 0;
					if (card.name == 'shan') return num > 1 ? 2 : 0;
					return 6 - get.value(card);
				})
				.set('num', num);
			('step 1');
			if (result.bool == false) {
				game.log('【讨贼锋矢】:', trigger.target, '不可响应', trigger.card);
				trigger.directHit.add(trigger.target);
			}
			if (player.buff) {
				player.buff.buff_txhj_taozeifengshi.update();
			}
		},
	};
	//百里偷劫
	lib.skill._buff_txhj_bailitoujie = {
		trigger: {
			global: 'gameStart',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_bailitoujie');
		},
		content() {
			game.log(player, '获得了【百里偷劫】');
			player.addSkill('txhj_bailitoujie');
			if (player.buff) {
				player.buff.buff_txhj_bailitoujie.update();
			}
		},
	};
	//百里偷劫衍生
	lib.skill.txhj_bailitoujie = {
		forced: true,
		mod: {
			targetInRange(card, player, target, now) {
				if (card.name == 'shunshou') return true;
			},
		},
	};
	//虎豹冲杀
	lib.skill._buff_txhj_hubaochongsha = {
		trigger: {
			global: 'gameStart',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_hubaochongsha');
		},
		content() {
			game.log(player, '获得了【虎豹冲杀】');
			player.addSkill('txhj_hubaochongsha');
			if (player.buff) {
				player.buff.buff_txhj_hubaochongsha.update();
			}
		},
	};
	//虎豹冲杀衍生
	lib.skill.txhj_hubaochongsha = {
		forced: true,
		mod: {
			targetInRange(card, player, target, now) {
				var type = get.type(card);
				if (type == 'basic') return true;
			},
		},
	};
	//黄巾符身
	lib.skill._buff_txhj_huangjinfushen = {
		mode: ['taixuhuanjing'],
		mod: {
			targetEnabled(card, player, target) {
				if (target == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_huangjinfushen') && get.type(card) == 'trick') {
					return false;
				}
			},
		},
	};
	//暗箭之摧
	lib.skill._buff_txhj_anjianzhicui = {
		trigger: {
			player: 'useCard',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return get.type(event.card) == 'basic' && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_anjianzhicui');
		},
		content() {
			game.log('【暗箭之摧】', trigger.card, '不可被闪避');
			trigger.directHit.addArray(game.players);
			if (player.buff) {
				player.buff.buff_txhj_anjianzhicui.update();
			}
		},
	};
	//蛮族造乱
	lib.skill._buff_txhj_manzuzaoluan = {
		trigger: {
			player: 'phaseZhunbeiBegin',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			if (player.getEquip('txhj_houzi') && player != game.me) return true;
			return player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_manzuzaoluan');
		},
		content() {
			game.log(player, '触发了【蛮族造乱】获得了【南蛮入侵】');
			var card = get.cardPile(function (card) {
				return card.name == 'nanman';
			});
			if (card) player.gain(card, 'gain2');
			if (player.buff) {
				player.buff.buff_txhj_manzuzaoluan.update();
			}
		},
	};
	lib.skill._buff_txhj_zhengjunjingwu = {
		trigger: {
			source: 'damageBegin1',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			if (!event.player.isHealthy() && event.player.countCards('e') > 0 && event.player.countCards('h') > 0) return false;
			return player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_zhengjunjingwu');
		},
		content() {
			var num = 0;
			if (trigger.player.isHealthy()) num++;
			if (trigger.player.countCards('e') == 0) num++;
			if (trigger.player.countCards('h') == 0) num++;
			trigger.num += num;
			game.log(player, '触发了【整军经武】伤害+' + num);
			if (player.buff) {
				player.buff.buff_txhj_zhengjunjingwu.update();
			}
		},
	};
	lib.skill._buff_txhj_jueyijinguo = {
		trigger: {
			player: 'loseHpAfter',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_jueyijinguo');
		},
		content() {
			game.log(player, '触发了【决意巾帼】');
			player.gainMaxHp();
			if (player.buff) {
				player.buff.buff_txhj_jueyijinguo.update();
			}
		},
	};
	lib.skill._buff_txhj_luanshiyingjie = {
		trigger: {
			player: 'loseAfter',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return player.countCards('h') < 4 - player.countCards('e') && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_luanshiyingjie');
		},
		content() {
			game.log(player, '触发了【乱世英杰】');
			player.draw(4 - player.countCards('h') - player.countCards('e'));
			if (player.buff) {
				player.buff.buff_txhj_luanshiyingjie.update();
			}
		},
	};
	lib.skill._buff_txhj_yanranyixiao = {
		trigger: {
			player: 'dying',
		},
		forced: true,
		round: 1,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			var target = _status.currentPhase;
			if (!target || target.isHealthy()) return false; //QQQ
			return player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_yanranyixiao');
		},
		content() {
			var target = _status.currentPhase;
			player.hp = player.maxHp;
			target.hp = target.maxHp;
			game.log(player, '触发了【嫣然一笑】');
			if (player.buff) {
				player.buff.buff_txhj_yanranyixiao.update();
			}
		},
	};
	lib.skill._buff_txhj_tianmingmichang = {
		trigger: {
			player: ['gainMaxHpAfter', 'loseMaxHpBefore'],
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_tianmingmichang');
		},
		content() {
			game.log(player, '触发了【天命靡常】');
			if (trigger.name == 'gainMaxHp') {
				player.recover(trigger.num);
			} else {
				player.damage(trigger.num, 'nosource');
			}
			if (player.buff) {
				player.buff.buff_txhj_tianmingmichang.update();
			}
		},
	};
	lib.skill._buff_txhj_mingliangqiangu = {
		trigger: { player: 'useCardToPlayered' },
		logTarget: 'target',
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return player != event.target && event.card.name == 'sha' && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_mingliangqiangu');
		},
		content() {
			game.log(player, '触发了【明良千古】');
			var target = trigger.target;
			target.addTempSkill('txhj_mingliangqiangu_block');
			var map = trigger.parent.customArgs;
			var id = target.playerid;
			if (!map[id]) map[id] = {};
			if (typeof map[id].extraDamage != 'number') {
				map[id].extraDamage = 0;
			}
			map[id].extraDamage++;
			if (player.buff) {
				player.buff.buff_txhj_mingliangqiangu.update();
			}
		},
	};
	lib.skill.txhj_mingliangqiangu_block = {
		init(player, skill) {
			player.addSkillBlocker(skill);
		},
		onremove(player, skill) {
			player.removeSkillBlocker(skill);
		},
		charlotte: true,
		skillBlocker(skill, player) {
			return !lib.skill[skill].charlotte && get.is.locked(skill, player);
		},
	};
	lib.skill._buff_txhj_xunyuliangjie = {
		trigger: {
			player: 'phaseUseBegin',
			source: 'damageBegin1',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			if (event.name == 'damage' && !event.player.hasSkill('jiu')) return false;
			return player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_xunyuliangjie');
		},
		content() {
			'step 0';
			game.log(player, '触发了【巡域两界】');
			if (trigger.name == 'phaseUse') {
				player.useCard({ name: 'jiu' }, player, false);
			} else {
				trigger.num++;
			}
			if (player.buff) {
				player.buff.buff_txhj_xunyuliangjie.update();
			}
		},
	};
	lib.skill._buff_txhj_jieqiaoxianden = {
		trigger: {
			player: 'phaseUseBegin',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return player.getEnemies().length && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_jieqiaoxianden');
		},
		content() {
			'step 0';
			game.log(player, '触发了【界桥先登】');
			if (player.buff) {
				player.buff.buff_txhj_jieqiaoxianden.update();
			}
			event.list = player.getEnemies().sortBySeat();
			('step 1');
			if (event.list.length) {
				var target = event.list.shift();
				player.useCard({ name: 'juedou' }, target, false);
				event.redo();
			}
		},
	};
	lib.skill._buff_txhj_linjunduizhen = {
		mod: {
			cardnumber(card, player) {
				if (player.countUsed('sha', true) > 0 && card.name == 'sha' && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_linjunduizhen')) return 13;
			},
		},
		trigger: {
			player: 'useCard',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return get.number(event.card) == 13 && event.card.name == 'sha' && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_linjunduizhen');
		},
		content() {
			game.log(player, '触发了【临军对阵】');
			if (typeof trigger.baseDamage != 'number') trigger.baseDamage = 1;
			trigger.baseDamage++;
			if (player.buff) {
				player.buff.buff_txhj_linjunduizhen.update();
			}
		},
	};
	lib.skill._buff_txhj_shiguanjianshi = {
		trigger: {
			source: 'damageBegin1',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return event.player.countCards('h', (card) => card.name == 'shan') && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_shiguanjianshi');
		},
		content() {
			var num = trigger.player.countCards('h', (card) => card.name == 'shan');
			trigger.num += num;
			game.log(player, '触发了【矢贯坚石】伤害+' + num);
			if (player.buff) {
				player.buff.buff_txhj_shiguanjianshi.update();
			}
		},
	};
	lib.skill._buff_txhj_xiongjuyizhou = {
		mod: {
			cardname(card, player, name) {
				if (player.isHealthy() && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_xiongjuyizhou') && card.name == 'shan') return 'wanjian';
			},
		},
		mode: ['taixuhuanjing'],
	};
	lib.skill._buff_txhj_bianruxuanhe = {
		mod: {
			cardUsable(card, player, num) {
				if (player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_bianruxuanhe') && (card.name == 'txhj_xionghuangjiu' || card.name == 'jiu' || (card.name == 'sha' && player.hasSkill('jiu')))) return Infinity;
			},
		},
		mode: ['taixuhuanjing'],
	};
	lib.skill._buff_txhj_ziwuqimou = {
		trigger: {
			player: 'recoverBefore',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			if (player.isDying()) return false;
			return player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_ziwuqimou');
		},
		content() {
			trigger.cancel();
			player.changeHujia(trigger.num);
			player.draw(trigger.num * 2);
			game.log(player, '触发了【子午奇谋】');
			if (player.buff) {
				player.buff.buff_txhj_ziwuqimou.update();
			}
		},
	};
	lib.skill._buff_txhj_weizhenhuaxia = {
		trigger: { player: 'useCardToPlayered' },
		logTarget: 'target',
		forced: true,
		_priority: 10,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return event.card && event.card.suit && event.card.name == 'sha' && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_weizhenhuaxia');
		},
		content() {
			var target = trigger.target;
			var hs = target.getCards('he', { suit: trigger.card.suit });
			if (hs.length) {
				target.discard(hs);
				if (player.stat[player.stat.length - 1].card.sha > 0) {
					player.stat[player.stat.length - 1].card.sha--;
				}
				game.log(player, '触发了【威震华夏】');
				if (player.buff) {
					player.buff.buff_txhj_weizhenhuaxia.update();
				}
			}
		},
	};
	lib.skill._buff_txhj_wumouyizongheng = {
		mod: {
			cardname(card, player, name) {
				if (_status.currentPhase && player != _status.currentPhase && _status.currentPhase == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_wumouyizongheng') && card.name != 'wuxie') return 'wuxie';
			},
		},
		mode: ['taixuhuanjing'],
	};
	lib.skill._buff_txhj_zhougongtupu = {
		trigger: {
			player: 'useCardAfter',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return event.card && event.card.name == 'wugu' && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_zhougongtupu');
		},
		content() {
			game.log(player, '触发了【周公吐哺】');
			if (player.buff) {
				player.buff.buff_txhj_zhougongtupu.update();
			}
			player.damage();
			var num = game.filterPlayer(function (current) {
				return !current.inRange(player);
			}).length;
			player.draw(4 + num);
		},
	};
	lib.skill._buff_txhj_jigumacao = {
		trigger: {
			player: 'useCardToPlayered',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_jigumacao');
		},
		content() {
			if (player.storage.buff_txhj_jigumacao && player.storage.buff_txhj_jigumacao == trigger.target) {
				game.log(player, '触发了【击鼓骂曹】');
				if (player.buff) {
					player.buff.buff_txhj_jigumacao.update();
				}
				trigger.target.loseHp();
			} else {
				player.storage.buff_txhj_jigumacao = trigger.target;
			}
		},
	};
	lib.skill._buff_txhj_dushangweilou = {
		trigger: {
			global: 'turnOverAfter',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return event.player.isTurnedOver() && event.player.isPhaseUsing() && event.player != player && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_dushangweilou');
		},
		content() {
			game.log(player, '触发了【独上危楼】');
			if (player.buff) {
				player.buff.buff_txhj_dushangweilou.update();
			}
			var evt = _status.event;
			for (var i = 0; i < 10; i++) {
				if (evt && evt.getParent) evt = evt.parent;
				if (evt.name == 'phaseUse') {
					evt.skipped = true;
					break;
				}
			}
		},
	};
	lib.skill._buff_txhj_jingfengpiaobairi = {
		trigger: {
			player: 'turnOverAfter',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return !player.isTurnedOver() && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_jingfengpiaobairi');
		},
		content() {
			game.log(player, '触发了【惊风飘白日】');
			if (player.buff) {
				player.buff.buff_txhj_jingfengpiaobairi.update();
			}
			player.insertPhase();
		},
	};
	lib.skill._buff_txhj_biyuexiuhua = {
		trigger: { source: 'damageBegin1' },
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return player.isTurnedOver() && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_biyuexiuhua');
		},
		content() {
			game.log(player, '触发了【闭月羞花】');
			if (player.buff) {
				player.buff.buff_txhj_biyuexiuhua.update();
			}
			trigger.num++;
		},
	};
	lib.skill._buff_txhj_hunyoujiangtong = {
		trigger: {
			player: ['phaseZhunbeiBefore', 'phaseZhunbeiAfter'],
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return lib.config.taixuhuanjing.buff.includes('buff_txhj_hunyoujiangtong');
		},
		content() {
			if (player.storage.buff_txhj_hunyoujiangtong) {
				player.hp = player.storage.buff_txhj_hunyoujiangtong;
				player.storage.buff_txhj_hunyoujiangtong = false;
			} else {
				game.log(player, '触发了【魂佑江东】');
				if (player.buff) {
					player.buff.buff_txhj_hunyoujiangtong.update();
				}
				player.storage.buff_txhj_hunyoujiangtong = player.hp;
				player.hp = 1;
			}
		},
	};
	lib.skill._buff_txhj_wotazhice = {
		trigger: {
			global: 'phaseZhunbeiBegin',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return player.hp <= event.player.hp && event.player != player && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_wotazhice');
		},
		content() {
			game.log(player, '触发了【卧榻之侧】');
			if (player.buff) {
				player.buff.buff_txhj_wotazhice.update();
			}
			player.useCard({ name: 'juedou' }, trigger.player, false);
		},
	};
	lib.skill._buff_txhj_yizhenqingmeng = {
		trigger: {
			player: 'damageBegin3',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			if (event.card && event.card.name == 'juedou') return false;
			return player.countCards('h') == 0 && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_yizhenqingmeng');
		},
		content() {
			game.log(player, '触发了【一枕清梦】');
			if (player.buff) {
				player.buff.buff_txhj_yizhenqingmeng.update();
			}
			trigger.num--;
		},
	};
	lib.skill._buff_txhj_jiejiashichou = {
		trigger: {
			player: 'phaseDiscardBegin',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_jiejiashichou');
		},
		content() {
			game.log(player, '触发了【解甲事仇】');
			if (player.buff) {
				player.buff.buff_txhj_jiejiashichou.update();
			}
			var hs = player.getCards('h');
			if (hs.length) {
				player.changeHujia(hs.length, null, true);
				player.discard(hs);
			}
		},
	};
	lib.skill._buff_txhj_zuoshanguanhudou = {
		trigger: {
			player: 'phaseBefore',
		},
		firstdo: true,
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return player != game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_zuoshanguanhudou');
		},
		content() {
			if (player.hasSkill('txhj_zuoshanguanhudou')) {
				player.removeSkill('txhj_zuoshanguanhudou');
			} else {
				game.log(game.me, '触发了【坐山观虎斗】');
				if (game.me.buff) {
					game.me.buff.buff_txhj_zuoshanguanhudou.update();
				}
				player.addSkill('txhj_zuoshanguanhudou');
				game.me.addTempSkill('diaohulishan');
			}
		},
	};
	lib.skill.txhj_zuoshanguanhudou = {
		mark: true,
		marktext: '幕',
		charlotte: true,
		intro: {
			name: '坐山观虎斗',
			content: '贾诩观看了这一出好戏',
		},
	};
	lib.skill._buff_txhj_yunchouweiwo2 = {
		trigger: {
			player: 'gainBefore',
			global: ['gameStart'],
		},
		forced: true,
		popup: false,
		filter(event, player) {
			return player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_yunchouweiwo') && (player.getCards('h').length || event.name == 'gain');
		},
		content() {
			if (trigger.name == 'gain') {
				trigger.cancel();
				var owner = get.owner(trigger.cards[0]);
				if (owner && owner.getCards('hejsx').includes(trigger.cards[0])) owner.lose(trigger.cards, ui.discardPile);
				else game.cardsDiscard(trigger.cards);
				game.log(trigger.cards, '进入了弃牌堆');
			} else {
				var cards = player.getCards('h');
				if (cards.length) {
					player.discard(cards);
				}
			}
		},
		mode: ['taixuhuanjing'],
	};
	lib.skill.buff_txhj_yunchouweiwo1 = {
		copy(cards) {
			var result = [];
			for (var i of cards) {
				var card = ui.create.card(ui.special);
				card.init([i.suit, i.number, i.name, i.nature]);
				(card.cardid = i.cardid), (card.wunature = i.wunature), (card.storage = i.storage), (card.relatedCard = i);
				result.push(card);
			}
			return result;
		},
		contentx() {
			'step 0';
			if (trigger.result.bool) {
				if (trigger.onresult) {
					trigger.onresult(trigger.result);
					delete trigger.onresult;
				}
			}
			('step 1');
			player.lose(event.cards, ui.special)._triggered = null;
			('step 2');
			for (var i of event.cards) {
				i.fix();
				i.remove();
				i.destroyed = true;
			}
		},
	};
	lib.skill._buff_txhj_yunchouweiwo = {
		trigger: {
			player: ['chooseToRespondBegin', 'chooseToUseBegin'],
		},
		forced: true,
		lastDo: true,
		popup: false,
		mark: true,
		hiddenCard(player, name) {
			var cardPile = Array.from(ui.cardPile.childNodes);
			if (!cardPile.length) return false;
			var num = Math.ceil(cardPile.length / 7);
			cardPile = cardPile.slice(0, num);
			return cardPile.some((i) => i.name == name) && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_yunchouweiwo');
		},
		filter(event, player) {
			if (event.responded || event.skill) return false;
			var cardPile = Array.from(ui.cardPile.childNodes);
			if (!cardPile.length) return false;
			var num = Math.ceil(cardPile.length / 7);
			cardPile = cardPile.slice(0, num);
			return (cardPile.some((i) => event.filterCard && event.filterCard(i, player, event)) || player.isPhaseUsing()) && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_yunchouweiwo');
		},
		mod: {
			cardEnabled2(card, player) {
				if (_status.event.skill && get.itemtype(card) == 'card' && card.hasGaintag('buff_txhj_yunchouweiwo')) return false;
			},
		},
		content() {
			'step 0';
			var cardPile = Array.from(ui.cardPile.childNodes);
			var num = Math.ceil(cardPile.length / 7);
			cardPile = cardPile.slice(0, num);
			event.cards = lib.skill.buff_txhj_yunchouweiwo1.copy(cardPile);
			player.directgains(event.cards, null, 'buff_txhj_yunchouweiwo');
			('step 1');
			var evt = trigger;
			var onresult = false;
			if (evt.onresult) {
				onresult = evt.onresult;
			}
			var next2 = game.createEvent('buff_txhj_yunchouweiwo_clear', false);
			next2.cards = event.cards;
			next2.player = player;
			next2._trigger = evt;
			next2.setContent(lib.skill.buff_txhj_yunchouweiwo1.contentx);
			event.next.remove(next2);
			evt.after.push(next2);
			evt.onresult = function (result) {
				if (evt.after.includes(next2)) {
					evt.after.remove(next2);
					evt.next.push(next2);
				}
				if (result.cards && result.cards.length && (result.cards[0].hasGaintag('buff_txhj_yunchouweiwo') || event.cards.includes(result.cards[0]))) {
					var card2 = result.cards[0];
					result.cards[0] = result.cards[0].relatedCard;
					var cardx = result.cards[0];
					result.card = {
						name: get.name(card2),
						suit: get.suit(card2),
						number: get.number(card2),
						nature: get.nature(card2),
						isCard: true,
						cardid: cardx.cardid,
						wunature: cardx.wunature,
						storage: cardx.storage,
						cards: [cardx],
					};
				}
				if (onresult) onresult.apply(evt, arguments);
				delete evt.onresult;
			};
			var cards = player.getCards('hs');
			var sort2 = function (b, a) {
				if (a.name != b.name) return lib.sort.card(a.name, b.name);
				else if (a.suit != b.suit) return lib.suit.indexOf(a) - lib.suit.indexOf(b);
				else return a.number - b.number;
			};
			if (cards.length > 1) {
				cards.sort(sort2);
				player.directgain(cards, false); //QQQ
			}
		},
		mode: ['taixuhuanjing'],
	};
	lib.translate.buff_txhj_yunchouweiwo = '运筹帷幄';
	lib.skill._buff_txhj_jianyanbaoshi = {
		trigger: {
			player: 'damageBegin3',
		},
		filter(event, player) {
			return player == game.me && lib.config.taixuhuanjing.buff_txhj_jianyanbaoshi > 0;
		},
		mode: ['taixuhuanjing'],
		forced: true,
		content() {
			var numjs = lib.config.taixuhuanjing.buff_txhj_jianyanbaoshi;
			game.log(player, '触发了【坚石宝石】伤害-' + numjs);
			trigger.num -= numjs;
			if (player.buff) {
				player.buff.buff_txhj_jianyanbaoshi.update();
			}
		},
	};
	lib.skill._buff_txhj_qingquanbaoshi = {
		trigger: {
			player: 'phaseDrawBegin',
		},
		filter(event, player) {
			return !event.numFixed && player == game.me && lib.config.taixuhuanjing.buff_txhj_qingquanbaoshi > 0;
		},
		mode: ['taixuhuanjing'],
		forced: true,
		content() {
			var numqq = lib.config.taixuhuanjing.buff_txhj_qingquanbaoshi;
			game.log(player, '触发了【清泉宝石】摸牌数+' + numqq);
			trigger.num += numqq;
			if (player.buff) {
				player.buff.buff_txhj_qingquanbaoshi.update();
			}
		},
	};
	lib.skill._buff_txhj_huimiebaoshi = {
		trigger: {
			source: 'damageBegin1',
		},
		filter(event, player) {
			return player == game.me && lib.config.taixuhuanjing.buff_txhj_huimiebaoshi > 0;
		},
		mode: ['taixuhuanjing'],
		forced: true,
		content() {
			var numhm = lib.config.taixuhuanjing.buff_txhj_huimiebaoshi;
			game.log(player, '触发了【毁灭宝石】伤害+' + numhm);
			trigger.num += numhm;
			if (player.buff) {
				player.buff.buff_txhj_huimiebaoshi.update();
			}
		},
	};
	lib.skill._buff_txhj_cijidaifa = {
		trigger: {
			player: 'shaBegin',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player, card) {
			return event.card && event.card.name == 'sha' && player.countUsed('sha', true) <= game.roundNumber && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_cijidaifa');
		},
		content() {
			game.log(player, '触发了【伺机待发】');
			if (typeof trigger.extraDamage != 'number') {
				trigger.extraDamage = 0;
			}
			trigger.extraDamage++;
			if (player.buff) {
				player.buff.buff_txhj_cijidaifa.update();
			}
		},
	};
	lib.skill._buff_txhj_tongqiangtiebi = {
		trigger: {
			player: 'damageBegin3',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player, card) {
			return event.card && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_tongqiangtiebi');
		},
		content() {
			game.log(player, '触发了【铜墙铁壁】');
			if (get.type(trigger.card) == 'basic') {
				trigger.num--;
			} else {
				trigger.num++;
			}
			if (player.buff) {
				player.buff.buff_txhj_tongqiangtiebi.update();
			}
		},
	};
	lib.skill._buff_txhj_guzhielai = {
		trigger: {
			source: 'damageBegin1',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_guzhielai');
		},
		content() {
			trigger.num++;
			player.loseHp();
			game.log(player, '触发了【古之恶来】伤害+1');
			if (player.buff) {
				player.buff.buff_txhj_guzhielai.update();
			}
		},
	};
	//急攻速战
	lib.skill._buff_txhj_jigongsuzhan = {
		trigger: {
			player: 'phaseZhunbeiBegin',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			if (player.getEquip('txhj_houzi') && player != game.me) return true;
			return player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_jigongsuzhan');
		},
		content() {
			game.log(player, '触发了【急攻速战】获得了伤害类型锦囊牌');
			var card = get.cardPile(function (card) {
				return get.type(card, 'trick') == 'trick' && get.tag(card, 'damage');
			});
			if (card) player.gain(card, 'gain2');
			if (player.buff) {
				player.buff.buff_txhj_jigongsuzhan.update();
			}
		},
	};
	//趫捷勇猛
	lib.skill._buff_txhj_qiaojieyongmeng = {
		trigger: { player: 'phaseJieshuBegin' },
		forced: true,
		/*check:function(event,player){*/
		filter(event, player) {
			if (player.getEquip('txhj_houzi') && player != game.me) return true;
			return /*event.player.hp+player.countCards('h')<4 && */ player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_qiaojieyongmeng');
		},
		content() {
			game.log(player, '触发了【趫捷勇猛】效果');
			player.draw(player.countCards('e') + 1);
			if (player.buff) {
				player.buff.buff_txhj_qiaojieyongmeng.update();
			}
		},
	};
	//以少胜多
	lib.skill._buff_txhj_yishaoshengduo = {
		trigger: { source: 'damageBegin1' },
		forced: true,
		logTarget: 'player',
		filter(event, player) {
			var target = event.player;
			return event.parent.name == 'sha' && player.countCards('h') < target.countCards('h') && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_yishaoshengduo');
		},
		content() {
			game.log(player, '触发了【以少胜多】的效果');
			trigger.num += 2;
			if (player.buff) {
				player.buff.buff_txhj_yishaoshengduo.update();
			}
		},
	};
	//摧封无懈
	lib.skill._buff_txhj_cuifengwuxie = {
		trigger: {
			player: 'phaseJieshuBegin',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			if (player.getEquip('txhj_houzi') && player != game.me) return true;
			return player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_cuifengwuxie');
		},
		content() {
			game.log(player, '触发了【摧封无懈】获得了【无懈可击】');
			var card = get.cardPile(function (card) {
				return card.name == 'wuxie';
			});
			if (card) player.gain(card, 'gain2');
			if (player.buff) {
				player.buff.buff_txhj_cuifengwuxie.update();
			}
		},
	};
	//箭支充足
	lib.skill._buff_txhj_jianzhichongzu = {
		trigger: {
			player: 'useCardEnd',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player, card) {
			return event.card && event.card.name == 'wanjian' && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_jianzhichongzu');
		},
		content() {
			game.log(player, '发动了【箭支充足】');
			player.draw(1, true);
			if (player.buff) {
				player.buff.buff_txhj_jianzhichongzu.update();
			}
		},
	};
	//抽刀伺动
	lib.skill._buff_txhj_choudaosidong = {
		trigger: {
			player: 'useCard',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return event.respondTo && event.respondTo[0] && event.card && event.card.name == 'shan' && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_choudaosidong');
		},
		content() {
			var cards = trigger.respondTo[1].cards;
			player.gain(cards, 'log', 'gain2');
			game.log(player, '触发了【抽刀伺动】');
			if (player.buff) {
				player.buff.buff_txhj_choudaosidong.update();
			}
		},
	};
	//虚伪的尊威
	lib.skill._buff_txhj_xuweidezunwei = {
		trigger: {
			player: 'drawBefore',
		},
		forced: true,
		mode: ['taixuhuanjing'],
		filter(event, player) {
			return event.parent.name == 'wuzhong' && player == game.me && lib.config.taixuhuanjing.buff.includes('buff_txhj_xuweidezunwei');
		},
		content() {
			game.log(player, '触发了【虚伪的尊威】');
			trigger.num++;
			if (player.buff) {
				player.buff.buff_txhj_xuweidezunwei.update();
			}
		},
	};
	//------------------------------//
	//-----------手杀国服太虚技能增补------------//
	//谋断,搬运自国战吕蒙
	lib.skill.txhj_mouduan = {
		trigger: {
			player: 'phaseJieshuBegin',
		},
		//_priority:2,
		audio: 'botu',
		filter(event, player) {
			var history = player.getHistory('useCard');
			var suits = [];
			var types = [];
			for (var i = 0; i < history.length; i++) {
				var suit = get.suit(history[i].card);
				if (suit) suits.add(suit);
				types.add(get.type(history[i].card));
			}
			return suits.length >= 4 || types.length >= 3;
		},
		check(event, player) {
			return player.canMoveCard(true);
		},
		content() {
			player.moveCard();
		},
	};
	lib.translate.txhj_mouduan = '谋断';
	lib.translate.txhj_mouduan_info = '结束阶段,若你于本回合内使用过四种花色或三种类别的牌,则你可以移动场上的一张牌.';
	//缮甲,手杀海外服为ol增强版本
	//新杀改了之后,本体没独立出来旧的ol技能也是离谱
	lib.skill.olshanjia = {
		group: ['olshanjia_count'],
		mod: {
			aiValue(player, card, num) {
				if ((player.storage.olshanjia || 0) < 3 && get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) {
					return num / player.hp;
				}
			},
		},
		subSkill: {
			count: {
				forced: true,
				silent: true,
				popup: false,
				trigger: {
					player: 'loseEnd',
				},
				filter(event, player) {
					return event.cards2 && event.cards2.length;
				},
				content() {
					lib.skill.olshanjia.sync(player);
				},
			},
		},
		audio: 'shanjia',
		trigger: {
			player: 'phaseUseBegin',
		},
		intro: {
			content: '本局游戏内已失去过#张装备牌',
		},
		forced: true,
		sync(player) {
			var history = player.actionHistory;
			var num = 0;
			for (var i = 0; i < history.length; i++) {
				for (var j = 0; j < history[i].lose.length; j++) {
					if (history[i].lose[j].parent.name == 'useCard') continue;
					num += history[i].lose[j].cards2.filter(function (card) {
						return get.type(card, false) == 'equip';
					}).length;
				}
			}
			player.storage.olshanjia = num;
			if (num > 0) player.markSkill('olshanjia');
		},
		content() {
			'step 0';
			player.draw(3);
			('step 1');
			lib.skill.olshanjia.sync(player);
			var num = 3 - player.storage.olshanjia;
			if (num > 0) {
				player.chooseToDiscard('he', true, num).ai = get.disvalue;
			}
			('step 2');
			var bool = true;
			if (result.cards) {
				if (Array.isArray(result.cards))
					for (var i of result.cards) {
						if (['basic', 'trick'].includes(get.type(i, 'trick', i.original == 'h' ? player : false))) {
							bool = false;
							break;
						}
					}
			}
			if (bool) {
				player.chooseUseTarget({ name: 'sha' }, '是否视为使用一张【杀】？', false, 'nodistance');
			}
		},
		ai: {
			threaten: 3,
			noe: true,
			reverseOrder: true,
			skillTagFilter(player) {
				if (player.storage.olshanjia > 2) return false;
			},
			effect: {
				target(card, player, target) {
					if (player.storage.olshanjia < 3 && get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) return [1, 3];
				},
			},
		},
	};
	lib.translate.olshanjia = '缮甲';
	lib.translate.olshanjia_info = '出牌阶段开始时,你可以摸三张牌,然后弃置3-X张牌(X为你本局游戏内失去过的装备牌的数目且至多为3).若你没有以此法弃置基本牌或锦囊牌,则你可以视为使用了一张不计入出牌阶段使用次数的【杀】.';
	//玄雷,搬运自对战断狱仲达
	lib.skill.boss_xuanlei = {
		audio: true,
		trigger: { player: 'phaseBegin' },
		forced: true,
		filter(event, player) {
			return game.hasPlayer(function (current) {
				return current.isEnemyOf(player) && current.countCards('j');
			});
		},
		content() {
			'step 0';
			event.targets = game.filterPlayer(function (current) {
				return current.isEnemyOf(player) && current.countCards('j');
			});
			event.targets.sort(lib.sort.seat);
			player.line(event.targets, 'thunder');
			('step 1');
			if (event.targets.length) {
				event.targets.shift().damage('thunder');
				event.redo();
			}
		},
	};
	lib.translate.boss_xuanlei = '玄雷';
	lib.translate.boss_xuanlei_info = '锁定技,准备阶段,令所有判定区内有牌的敌方角色受到1点雷电伤害.';
	//旋略,搬运自国战凌统
	lib.skill.txhj_xuanlve = {
		trigger: {
			player: 'loseAfter',
			global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
		},
		forced: true,
		preHidden: true,
		filter(event, player) {
			var evt = event.getl(player);
			return evt && evt.es && evt.es.length;
		},
		content() {
			'step 0';
			player
				.chooseTarget(get.prompt('txhj_xuanlve'), '弃置一名其他角色的一张牌', function (card, player, target) {
					return target != player && target.countDiscardableCards(player, 'he');
				})
				.set('ai', function (target) {
					var player = _status.event.player;
					return get.effect(target, { name: 'guohe_copy2' }, player, player);
				})
				.setHiddenSkill(event.name);
			('step 1');
			if (result.bool) {
				player.discardPlayerCard(result.targets[0], 'he', true);
			}
		},
		ai: {
			noe: true,
			reverseEquip: true,
			effect: {
				target(card, player, target, current) {
					if (get.type(card) == 'equip') return [1, 1];
				},
			},
		},
	};
	lib.translate.txhj_xuanlve = '旋略';
	lib.translate.txhj_xuanlve_info = '当你失去装备区里的牌后,你可以弃置一名其他角色的一张牌.';
	//穿云,搬运自对战绝尘妙才
	//这个技能和新杀童渊的技能穿云同名,但是两个技能执行的效果不一样,童渊技能是造成伤害掉对面装备
	lib.skill.boss_chuanyun = {
		audio: true,
		trigger: { player: 'phaseEnd' },
		forced: true,
		content() {
			'step 0';
			player.chooseTarget(get.prompt('boss_chuanyun'), function (card, player, target) {
				return player.hp < target.hp;
			}).ai = function (target) {
				return get.damageEffect(target, player, player);
			};
			('step 1');
			if (result.bool) {
				result.targets[0].damage();
			}
		},
	};
	lib.translate.boss_chuanyun = '穿云';
	lib.translate.boss_chuanyun_info = '结束阶段,你可以对体力比你多的一名其他角色造成1点伤害.';
	//暴敛,搬运自boss牛头&黑无常
	lib.skill.boss_baolian = {
		trigger: { player: 'phaseJieshuBegin' },
		forced: true,
		content() {
			player.draw(2);
		},
	};
	lib.translate.boss_baolian = '暴敛';
	lib.translate.boss_baolian_info = '锁定技,结束阶段,你摸两张牌.';
	//灵锋,搬运自对战昭烈玄德
	lib.skill.boss_lingfeng = {
		audio: 2,
		trigger: { player: 'phaseDrawBefore' },
		content() {
			'step 0';
			trigger.cancel();
			event.cards = get.cards(2);
			player.showCards(event.cards);
			('step 1');
			if (get.color(event.cards[0]) != get.color(event.cards[1])) {
				player.chooseTarget('是否令一名敌方角色失去1点体力？', function (card, player, target) {
					return !target.isFriendOf(player);
				}).ai = function (target) {
					return -get.attitude(player, target);
				};
			}
			('step 2');
			if (result.bool && result.targets && result.targets.length) {
				player.line(result.targets, 'green');
				result.targets[0].loseHp();
			}
			('step 3');
			player.gain(event.cards);
			player.$draw(event.cards);
		},
		ai: {
			threaten: 1.4,
		},
	};
	lib.translate.boss_lingfeng = '灵锋';
	lib.translate.boss_lingfeng_info = '摸牌阶段,你可以改为亮出牌堆顶的两张牌,然后获得之,若这些牌的颜色不同,你令一名敌方角色失去1点体力.';
	//殷富,搬运自缘之空的个人扩展
	//开黑节地主的新增技能,懂的都懂,大鬼的最爱
	lib.skill.dz_gs_yinfu = {
		trigger: { player: 'phaseBegin' },
		filter(event, player) {
			return player.getDamagedHp() >= game.roundNumber;
		},
		charlotte: true,
		forced: true,
		content() {
			player.recover();
			if (player.getAllHistory('useSkill', (evt) => evt.skill == 'dz_gs_yinfu').length >= 3) player.removeSkill('dz_gs_yinfu');
		},
	};
	lib.translate.dz_gs_yinfu = '殷富';
	lib.translate.dz_gs_yinfu_info = '回合开始时,若你已损失的体力值不小于游戏轮次,你回复1点体力.该技能发动三次后,你失去技能<殷富>.';
	//雷厉,搬运自对战绝尘妙才
	lib.skill.boss_leili = {
		audio: 2,
		trigger: { source: 'damageEnd' },
		forced: true,
		filter(event, player) {
			return event.card && event.card.name == 'sha';
		},
		content() {
			'step 0';
			player.chooseTarget(get.prompt('boss_leili'), function (card, player, target) {
				if (target == trigger.player) return false;
				return target.isEnemyOf(player);
			}).ai = function (target) {
				return get.damageEffect(target, player, player, 'thunder');
			};
			('step 1');
			if (result.bool) {
				result.targets[0].damage('thunder');
			}
		},
		ai: {
			expose: 0.2,
			threaten: 1.3,
		},
	};
	lib.translate.boss_leili = '雷厉';
	lib.translate.boss_leili_info = '每当你的【杀】造成伤害后,你可以对另一名敌方角色造成1点雷电伤害.';
	//风行,搬运自对战绝尘妙才
	lib.skill.boss_fengxing = {
		audio: true,
		trigger: { player: 'phaseBegin' },
		forced: true,
		content() {
			'step 0';
			player.chooseTarget(get.prompt('boss_fengxing'), function (card, player, target) {
				if (target.isFriendOf(player)) return false;
				return lib.filter.targetEnabled({ name: 'sha' }, player, target);
			}).ai = function (target) {
				return get.effect(target, { name: 'sha' }, player);
			};
			('step 1');
			if (result.bool) {
				player.useCard({ name: 'sha' }, result.targets, false);
			}
		},
		ai: {
			expose: 0.2,
			threaten: 1.3,
		},
	};
	lib.translate.boss_fengxing = '风行';
	lib.translate.boss_fengxing_info = '准备阶段,你可以选择一名敌方角色,若如此做,视为对其使用了一张【杀】.';
	//驭兽,搬运自boss罗刹
	lib.skill.boss_yushou = {
		trigger: { player: 'phaseUseBegin' },
		content() {
			var list = game.filterPlayer(function (current) {
				return player.canUse('nanman', current) && current.isEnemyOf(player);
			});
			list.sort(lib.sort.seat);
			player.useCard({ name: 'nanman' }, list);
		},
	};
	lib.translate.boss_yushou = '驭兽';
	lib.translate.boss_yushou_info = '出牌阶段开始时,你可以对所有敌方角色使用一张南蛮入侵.';
	//吸星,搬运自boss黑无常
	lib.skill.boss_xixing = {
		trigger: { player: 'phaseZhunbeiBegin' },
		forced: true,
		content() {
			'step 0';
			player.chooseTarget(get.prompt('boss_xixing'), function (card, player, target) {
				return player != target && target.isLinked();
			}).ai = function (target) {
				return get.damageEffect(target, player, player, 'thunder');
			};
			('step 1');
			if (result.bool) {
				result.targets[0].damage('thunder');
				player.recover();
			}
		},
	};
	lib.translate.boss_xixing = '吸星';
	lib.translate.boss_xixing_info = '准备阶段,对任意一名横置的其他角色造成1点雷电伤害,然后回复1点体力.';
	//魔炎,搬运自boss罗刹
	lib.skill.boss_moyany = {
		trigger: { player: 'loseEnd' },
		forced: true,
		filter(event, player) {
			return _status.currentPhase != player;
		},
		content() {
			'step 0';
			player.judge(function (card) {
				return get.color(card) == 'red' ? 1 : 0;
			});
			('step 1');
			if (result.bool) {
				player.chooseTarget(true, '选择一个目标对其造成两点火焰伤害', function (card, player, target) {
					return player != target;
				}).ai = function (target) {
					return get.damageEffect(target, player, player, 'fire');
				};
			} else {
				event.finish();
			}
			('step 2');
			if (result.targets.length) {
				player.line(result.targets, 'fire');
				result.targets[0].damage(2, 'fire');
			}
		},
		ai: {
			effect: {
				target(card) {
					if (get.tag(card, 'loseCard')) {
						return [0.5, 1];
					}
				},
			},
		},
	};
	lib.translate.boss_moyany = '魔炎';
	lib.translate.boss_moyany_info = '每当你于回合外失去牌时,你可以进行一次判定,若结果为红色,你对一名其他角色造成2点火焰伤害.';
	//丹术,搬运自boss夜叉
	lib.skill.boss_danshu = {
		trigger: { player: 'loseEnd' },
		forced: true,
		filter(event, player) {
			return _status.currentPhase != player && player.hp < player.maxHp;
		},
		content() {
			'step 0';
			player.judge(function (card) {
				return get.color(card) == 'red' ? 1 : 0;
			});
			('step 1');
			if (result.color == 'red') {
				player.recover();
			}
		},
		ai: {
			effect: {
				target(card) {
					if (get.tag(card, 'loseCard')) {
						return [0.5, 1];
					}
				},
			},
		},
	};
	lib.translate.boss_danshu = '丹术';
	lib.translate.boss_danshu_info = '每当你于回合外失去牌时,你可以进行一次判定,若结果为红色,你回复1点体力.';
	//天陨,搬运自对战炽羽朱雀
	lib.skill.boss_tianyun = {
		trigger: { player: 'phaseEnd' },
		forced: true,
		content() {
			'step 0';
			event.forceDie = true;
			player.chooseTarget(get.prompt('boss_tianyun'), function (card, player, target) {
				return target.isEnemyOf(player);
			}).ai = function (target) {
				if (player.hp <= 1) return 0;
				if (get.attitude(player, target) > -3) return 0;
				var eff = get.damageEffect(target, player, player, 'fire');
				if (eff > 0) {
					return eff + target.countCards('e') / 2;
				}
				return 0;
			};
			('step 1');
			if (result.bool) {
				player.loseHp();
				event.target = result.targets[0];
			} else {
				event.finish();
			}
			('step 2');
			if (event.target) {
				event.target.damage(Math.random() > 0.4 ? 2 : 3, 'fire');
			}
			('step 3');
			if (event.target) {
				var es = event.target.getCards('e');
				if (es.length) {
					event.target.discard(es);
				}
			}
		},
		ai: {
			threaten: 2,
		},
	};
	lib.translate.boss_tianyun = '天陨';
	lib.translate.boss_tianyun_info = '结束阶段,你可以失去1点体力,然后令一名敌方角色随机受到2~3点火焰伤害并弃置其装备区里的所有牌.';
	//魔道,搬运自boss罗刹、夜叉及法轮王
	lib.skill.boss_modao = {
		trigger: { player: 'phaseZhunbeiBegin' },
		forced: true,
		content() {
			player.draw(2);
		},
	};
	lib.translate.boss_modao = '魔道';
	lib.translate.boss_modao_info = '锁定技,准备阶段,你摸两张牌.';
	//夙智,搬运自国战司马昭
	//国战大爹技能,野心家头子
	lib.skill.txhj_suzhi = {
		audio: 'gzsuzhi',
		derivation: 'fankui',
		mod: {
			targetInRange(card, player, target) {
				if (player == _status.currentPhase && player.countMark('txhj_suzhi_count') < 3 && get.type2(card) == 'trick') return true;
			},
		},
		trigger: { player: 'phaseJieshuBegin' },
		forced: true,
		filter(event, player) {
			return player.countMark('txhj_suzhi_count') < 3;
		},
		content() {
			player.addTempSkill('fankui', { player: 'phaseBegin' });
		},
		group: ['txhj_suzhi_damage', 'txhj_suzhi_draw', 'txhj_suzhi_gain'],
		preHidden: ['txhj_suzhi_damage', 'txhj_suzhi_draw', 'txhj_suzhi_gain'],
		subSkill: {
			damage: {
				audio: 'txhj_suzhi',
				trigger: { source: 'damageBegin1' },
				forced: true,
				filter(event, player) {
					return player == _status.currentPhase && player.countMark('txhj_suzhi_count') < 3 && event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.parent.type == 'card';
				},
				content() {
					trigger.num++;
					player.addTempSkill('txhj_suzhi_count');
					player.addMark('txhj_suzhi_count', 1, false);
				},
			},
			draw: {
				audio: 'txhj_suzhi',
				trigger: { player: 'useCard' },
				forced: true,
				filter(event, player) {
					return player == _status.currentPhase && player.countMark('txhj_suzhi_count') < 3 && event.card.isCard && get.type2(event.card) == 'trick';
				},
				content() {
					player.draw();
					player.addTempSkill('txhj_suzhi_count');
					player.addMark('txhj_suzhi_count', 1, false);
				},
			},
			gain: {
				audio: 'txhj_suzhi',
				trigger: { global: 'loseAfter' },
				forced: true,
				filter(event, player) {
					if (player != _status.currentPhase || event.type != 'discard' || player == event.player || player.countMark('txhj_suzhi_count') >= 3) return false;
					return event.player.countGainableCards(player, 'he') > 0;
				},
				logTarget: 'player',
				content() {
					'step 0';
					player.addTempSkill('txhj_suzhi_count');
					player.addMark('txhj_suzhi_count', 1, false);
					if (trigger.delay == false) game.delay();
					('step 1');
					player.gainPlayerCard(trigger.player, 'he', true);
				},
			},
			count: {
			},
		},
	};
	lib.translate.txhj_suzhi = '夙智';
	lib.translate.txhj_suzhi_info = '锁定技,每回合累计限三次;①当你于回合内因执行【杀】或【决斗】造成伤害时,此伤害+1;②你于回合内使用非转化的锦囊牌时摸一张牌,且无距离限制;③当有其他角色于你的回合内弃置牌后,你获得该角色的一张牌;④结束阶段,你获得〖反馈〗直到下回合开始.';
	//绝汲,搬运自对战巧魁儁乂
	lib.skill.boss_jueji = {
		audio: 2,
		trigger: { global: 'phaseDrawBegin' },
		filter(event, player) {
			if (event.player.isFriendOf(player)) {
				return false;
			}
			return event.num > 0 && event.player != player && event.player.hp < event.player.maxHp;
		},
		logTarget: 'player',
		content() {
			player.line(trigger.player, 'green');
			trigger.num--;
		},
		ai: {
			expose: 0.2,
			threaten: 1.4,
		},
	};
	lib.translate.boss_jueji = '绝汲';
	lib.translate.boss_jueji_info = '敌方角色摸牌阶段,若其已受伤,你可以令其少摸一张牌.';
	//魔箭,搬运自boss夜叉
	lib.skill.boss_mojian = {
		trigger: { player: 'phaseUseBegin' },
		content() {
			var list = game.filterPlayer(function (current) {
				return player.canUse('wanjian', current) && current.isEnemyOf(player);
			});
			list.sort(lib.sort.seat);
			player.useCard({ name: 'wanjian' }, list);
		},
		ai: {
			threaten: 1.8,
		},
	};
	lib.translate.boss_mojian = '魔箭';
	lib.translate.boss_mojian_info = '出牌阶段开始时,你可以对所有敌方角色使用一张万箭齐发.';
	//炼狱,搬运自boss马面
	lib.skill.boss_lianyu = {
		trigger: { player: 'phaseJieshuBegin' },
		content() {
			'step 0';
			event.players = get.players(player);
			('step 1');
			if (event.players.length) {
				var current = event.players.shift();
				if (current.isEnemyOf(player)) {
					player.line(current, 'fire');
					current.damage('fire');
				}
				event.redo();
			}
		},
		ai: {
			threaten: 2,
		},
	};
	lib.translate.boss_lianyu = '炼狱';
	lib.translate.boss_lianyu_info = '结束阶段,你可以对所有敌方角色造成1点火焰伤害.';
	//控魂,搬运自对战断狱仲达
	lib.skill.boss_skonghun = {
		audio: true,
		trigger: { player: 'phaseUseBegin' },
		filter(event, player) {
			var num = player.maxHp - player.hp;
			if (num == 0) return false;
			for (var i of game.players) {
				if (i.side != player.side) {
					num--;
				}
			}
			return num >= 0;
		},
		forced: true,
		content() {
			'step 0';
			var targets = game.filterPlayer(function (current) {
				return current.isEnemyOf(player);
			});
			targets.sort(lib.sort.seat);
			event.targets = targets;
			player.line(targets, 'thunder');
			event.num = targets.length;
			('step 1');
			if (event.targets.length) {
				event.targets.shift().damage('thunder');
				event.redo();
			}
			('step 2');
			player.recover(event.num);
		},
		ai: {
			threaten(player, target) {
				if (target.hp == 1) return 2;
				if (target.hp == 2 && game.players.length < 8) return 1.5;
				return 0.5;
			},
		},
	};
	lib.translate.boss_skonghun = '控魂';
	lib.translate.boss_skonghun_info = '出牌阶段开始时,若你已损失体力值不小于敌方角色数,你可以对所有敌方角色各造成1点雷电伤害,然后你恢复X点体力(X为受到伤害的角色数).';
	//筑围,搬运自国战陆抗
	lib.skill.txhj_zhuwei = {
		audio: 'zhuwei',
		trigger: { player: 'judgeEnd' },
		filter(event, player) {
			if (get.owner(event.result.card)) return false;
			if (event.nogain && event.nogain(event.result.card)) return false;
			return true;
			//return event.result.card.name=='sha'||event.result.card.name=='juedou';
		},
		forced: true,
		preHidden: true,
		content() {
			'step 0';
			player.gain(trigger.result.card, 'gain2');
			player.chooseBool(`是否令${get.translation(_status.currentPhase)}本回合的手牌上限和使用【杀】的次数上限+1？`).ai = function () {
				return get.attitude(player, _status.currentPhase) > 0;
			};
			('step 1');
			if (result.bool) {
				var target = _status.currentPhase;
				if (!target.hasSkill('txhj_zhuwei_eff')) {
					target.addTempSkill('txhj_zhuwei_eff');
					target.storage.txhj_zhuwei_eff = 1;
				} else target.storage.txhj_zhuwei_eff++;
				target.updateMarks();
			}
		},
		subSkill: {
			eff: {
				mod: {
					cardUsable(card, player, num) {
						if (card.name == 'sha') return num + player.storage.txhj_zhuwei_eff;
					},
					maxHandcard(player, num) {
						return num + player.storage.txhj_zhuwei_eff;
					},
				},
				mark: true,
				charlotte: true,
				intro: {
					content(storage) {
						if (storage) return `使用【杀】的次数上限+${storage},手牌上限+` + storage;
					},
				},
			},
		},
	};
	lib.translate.txhj_zhuwei = '筑围';
	lib.translate.txhj_zhuwei_info = '当你的判定牌生效后,你可以获得之.然后,你可令当前回合角色本回合内使用【杀】的次数上限和手牌上限+1.';
	//震怒,本体没技能,因为技能简单所以萌新自己抄了抄其他技能的写法
	lib.skill.boss_zhennu = {
		trigger: { player: 'phaseZhunbeiBegin' },
		forced: true,
		content() {
			'step 0';
			event.list = game.filterPlayer(function (current) {
				return current != player;
			});
			event.list.sort(lib.sort.seat);
			player.line(event.list, 'green');
			('step 1');
			var target = event.list.shift();
			target.damage();
			if (event.list.length) event.redo();
		},
		ai: {
			threaten: 2,
		},
	};
	lib.translate.boss_zhennu = '震怒';
	lib.translate.boss_zhennu_info = '锁定技,准备阶段,你对所有其他角色造成1点伤害.';
	//除害,改自手杀周处技能,去除了使命
	lib.skill.txhj_chuhai = {
		audio: 'chuhai',
		enable: 'phaseUse',
		usable: 1,
		filter(event, player) {
			return !player.hasSkillTag('noCompareSource');
		},
		filterTarget(card, player, target) {
			return target != player && target.countCards('h') > 0 && !target.hasSkillTag('noCompareTarget');
		},
		prompt: '与一名其他角色进行拼点',
		content() {
			'step 0';
			player.draw();
			('step 1');
			if (player.canCompare(target)) player.chooseToCompare(target);
			else event.finish();
			('step 2');
			if (result.bool) {
				player.storage.txhj_chuhai2 = target;
				player.addTempSkill('txhj_chuhai2', 'phaseUseEnd');
				if (target.countCards('h') > 0) {
					player.viewHandcards(target);
					var types = [],
						cards = [],
						hs = target.getCards('h');
					for (var i of hs) {
						types.add(get.type2(i, target));
					}
					for (var i of types) {
						var card = get.cardPile(function (card) {
							return get.type2(card, false) == i;
						});
						if (card) cards.push(card);
					}
					if (cards.length) player.gain(cards, 'gain2', 'log');
				}
			}
		},
		subSkill: {
			add: {
				trigger: { player: 'compare' },
				forced: true,
				popup: false,
				filter(event, player) {
					return event.parent.name == 'txhj_chuhai' && event.num1 < 13 && player.countCards('e') < 4;
				},
				content() {
					var num = 4 - player.countCards('e');
					game.log(player, '的拼点牌点数+', num);
					trigger.num1 = Math.min(13, trigger.num1 + num);
				},
			},
		},
		ai: {
			order: 9,
			result: {
				target(player, target) {
					if (
						player.countCards('hs', function (card) {
							return get.tag(card, 'damage') > 0 && player.canUse(card, target, null, true) && get.effect(target, card, player, player) > 0 && player.hasValueTarget(card, null, true);
						}) > 0
					)
						return -3;
					return -1;
				},
			},
		},
	};
	lib.skill.txhj_chuhai2 = {
		trigger: { source: 'damageSource' },
		forced: true,
		charlotte: true,
		filter(event, player) {
			if (event.player != player.storage.txhj_chuhai2) return false;
			for (var i = 1; i < 6; i++) {
				if (player.isEmpty(i)) return true;
			}
			return false;
		},
		content() {
			for (var i = 1; i < 7; i++) {
				if (player.isEmpty(i)) {
					var sub = 'equip' + i,
						card = get.cardPile(function (card) {
							return get.subtype(card, false) == sub && !get.cardtag(card, 'gifts');
						});
					if (card) {
						player.$gain2(card);
						player.equip(card);
						break;
					}
				}
			}
		},
	};
	lib.translate.txhj_chuhai = '除害';
	lib.translate.txhj_chuhai_info = '出牌阶段限一次,你可以摸一张牌,然后和一名其他角色拼点.若你赢,则你观看其手牌,并从牌堆/弃牌堆中获得其手牌中包含的类型的牌各一张,且当你于此阶段内对其造成伤害后,你将牌堆/弃牌堆中的一张装备牌置于你的一个空置装备栏内.';
});
