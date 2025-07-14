'use strict';
game.import('card', function (lib, game, ui, get, ai, _status) {
    const txhj_cardPack = {
        name: '太虚幻境',
        connect: true,
        card: {
            //---------------//
            /*诸葛连弩*/
            txhj_zhuge: {
                type: 'equip',
                subtype: 'equip1',
                ai: {
                    order() {
                        return get.order({ name: 'sha' }) - 0.1;
                    },
                    equipValue(card, player) {
                        if (player._zhuge_temp) return 1;
                        player._zhuge_temp = true;
                        var result = (function () {
                            if (
                                !game.hasPlayer(function (current) {
                                    return get.distance(player, current) <= 1 && player.canUse('sha', current) && get.effect(current, { name: 'sha' }, player, player) > 0;
                                })
                            ) {
                                return 1;
                            }
                            if (player.hasSha() && _status.currentPhase == player) {
                                if ((player.getEquip('zhuge') && player.countUsed('sha')) || player.getCardUsable('sha') == 0) {
                                    return 10;
                                }
                            }
                            var num = player.countCards('h', 'sha');
                            if (num > 1) return 6 + num;
                            return 3 + num;
                        })();
                        delete player._zhuge_temp;
                        return result;
                    },
                    basic: {
                        equipValue: 5,
                        order: 5,
                        useful: 2,
                        value: 5,
                    },
                    tag: {
                        valueswap: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                skills: ['txhj_zhuge'],
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            /*麒麟弓*/
            txhj_qilingong: {
                type: 'equip',
                subtype: 'equip1',
                distance: {
                    attackFrom: -4,
                },
                ai: {
                    basic: {
                        equipValue: 2.5,
                        order: 1,
                        useful: 2,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                skills: ['txhj_qilingong'],
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            /*方天画戟*/
            txhj_fangtianhuaji: {
                type: 'equip',
                subtype: 'equip1',
                distance: {
                    attackFrom: -3,
                },
                ai: {
                    basic: {
                        equipValue: 2.5,
                        order: 1,
                        useful: 2,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                skills: ['txhj_fangtianhuaji'],
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            /*知己知彼*/
            txhj_zhijizhibi: {
                audio: true,
                type: 'trick',
                enable: true,
                chongzhu: true,
                filterTarget(card, player, target) {
                    if (player == target) return false;
                    return target.countCards('h') || target.isUnseen(2);
                },
                content() {
                    'step 0';
                    if (!player.storage.zhibi) {
                        player.storage.zhibi = [];
                    }
                    player.storage.zhibi.add(target);
                    var controls = [];
                    if (target.countCards('h')) controls.push('手牌');
                    if (target.isUnseen(0)) controls.push('主将');
                    if (target.isUnseen(1)) controls.push('副将');
                    if (controls.length > 1) {
                        player.chooseControl(controls).set('ai', function () {
                            return 1;
                        });
                    }
                    if (controls.length == 0) event.finish();
                    ('step 1');
                    var content;
                    var str = get.translation(target) + '的';
                    if (result.control) {
                        if (result.control == '手牌') {
                            content = [str + '手牌', target.getCards('h')];
                            game.log(player, '观看了', target, '的手牌');
                        } else if (result.control == '主将') {
                            content = [str + '主将', [[target.name1], 'character']];
                            game.log(player, '观看了', target, '的主将');
                        } else {
                            content = [str + '副将', [[target.name2], 'character']];
                            game.log(player, '观看了', target, '的副将');
                        }
                    } else if (target.countCards('h')) {
                        content = [str + '手牌', target.getCards('h')];
                        game.log(player, '观看了', target, '的手牌');
                    } else if (target.isUnseen(0)) {
                        content = [str + '主将', [[target.name1], 'character']];
                        game.log(player, '观看了', target, '的主将');
                    } else {
                        content = [str + '副将', [[target.name2], 'character']];
                        game.log(player, '观看了', target, '的副将');
                    }
                    player.chooseControl('ok').set('dialog', content);
                    player.draw();
                },
                ai: {
                    order: 9.5,
                    wuxie() {
                        return 0;
                    },
                    result: {
                        player(player, target) {
                            if (player.countCards('h') <= player.hp) return 0;
                            if (player.storage.zhibi && player.storage.zhibi.includes(target)) return 0;
                            return target.isUnseen() ? 1 : 0;
                        },
                    },
                },
                selectTarget: 1,
            },
            /*远交近攻*/
            txhj_yuanjiao: {
                audio: true,
                type: 'trick',
                enable(card, player) {
                    if (player.isUnseen()) return false;
                    return true;
                },
                filterTarget(card, player, target) {
                    return player != target;
                },
                content() {
                    target.draw();
                    player.draw(3);
                },
                ai: {
                    basic: {
                        useful: 4,
                        value: 8,
                        order: 9,
                    },
                    result: {
                        target: 1,
                        player: 3,
                    },
                },
                selectTarget: 1,
            },
            txhj_yiyi: {
                audio: true,
                type: 'trick',
                enable: true,
                filterTarget(card, player, target) {
                    return player.side == target.side;
                },
                selectTarget() {
                    return [-1, -1]; //QQQ
                },
                content() {
                    target.draw(2);
                    target.chooseToDiscard(2, 'he', true).ai = get.disvalue;
                },
                ai: {
                    wuxie() {
                        return 0;
                    },
                    basic: {
                        useful: 3,
                        value: 3,
                        order: 5,
                    },
                    result: {
                        target(player, target) {
                            var hs = target.getCards('h');
                            if (hs.length <= 1) {
                                if (target == player && (hs.length == 0 || hs[0].name == 'yiyi')) {
                                    return 0;
                                }
                                return 0.3;
                            }
                            return Math.sqrt(target.countCards('he'));
                        },
                    },
                    tag: {
                        loseCard: 1,
                        discard: 1,
                        norepeat: 1,
                    },
                },
            },
            /*虚妄之冕*/
            txhj_xuwangzhimian: {
                type: 'equip',
                subtype: 'equip5',
                skills: ['txhj_xuwangzhimian'],
                ai: {
                    basic: {
                        equipValue: 5,
                        order: 1,
                        useful: 2,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            /*霹雳车*/
            txhj_piliche: {
                type: 'equip',
                subtype: 'equip1',
                distance: {
                    attackFrom: -8,
                },
                skills: ['txhj_piliche', 'txhj_piliche2'],
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
                ai: {
                    basic: {
                        order: 1,
                        useful: 2,
                        equipValue: 1,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
            },
            /*六龙骖驾*/
            txhj_liulongcanjia: {
                audio: true,
                type: 'equip',
                subtype: 'equip6',
                nomod: true,
                nopower: true,
                distance: {
                    globalFrom: -1,
                    globalTo: 1,
                },
                customSwap(card) {
                    var type = get.subtype(card, false);
                    return type == 'equip3' || type == 'equip4' || type == 'equip6';
                },
                skills: ['txhj_liulongcanjia'],
                ai: {
                    equipValue(card, player) {
                        if (player.countCards('e', { subtype: ['equip3', 'equip4'] }) > 1) return 1;
                        if (player.hasSkill('gzzongyu')) return 9;
                        if (
                            game.hasPlayer(function (current) {
                                return current.hasSkill('gzzongyu') && get.attitude(player, current) <= 0;
                            })
                        )
                            return 1;
                        return 7.2;
                    },
                    basic: {
                        equipValue: 7.2,
                        order: 1,
                        useful: 2,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            /*雷击木*/
            txhj_leijimu: {
                type: 'equip',
                subtype: 'equip1',
                distance: {
                    attackFrom: -3,
                },
                ai: {
                    basic: {
                        equipValue: 2,
                        order: 1,
                        useful: 2,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                skills: ['txhj_leijimu'],
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            /*绝尘金戈*/
            txhj_juechenjinge: {
                type: 'equip',
                subtype: 'equip3',
                skills: ['txhj_juechenjinge'],
                distance: {
                    globalTo: 2,
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
                ai: {
                    basic: {
                        order: 1,
                        useful: 2,
                        equipValue: 7,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
            },
            /*借刀杀人*/
            txhj_jiedao: {
                audio: true,
                type: 'trick',
                enable: true,
                singleCard: true,
                targetprompt: ['出杀者', '杀的目标'],
                complexSelect: true,
                complexTarget: true,
                multicheck() {
                    return game.hasPlayer(function (current) {
                        return game.hasPlayer(function (current2) {
                            return current.inRange(current2) && current.canUse('sha', current2, false);
                        });
                    });
                },
                filterTarget(card, player, target) {
                    return (
                        player != target &&
                        game.hasPlayer(function (current) {
                            return target != current && target.inRange(current) && target.canUse('sha', current, false);
                        })
                    );
                },
                filterAddedTarget(card, player, target, preTarget) {
                    return target != preTarget && preTarget.inRange(target) && preTarget.canUse('sha', target, false);
                },
                content() {
                    'step 0';
                    if (event.directHit || !event.addedTarget || (!_status.connectMode && lib.config.skip_shan && !target.hasSha())) {
                        event.directfalse = true;
                    } else {
                        target
                            .chooseToUse(`对${get.translation(event.addedTarget)}使用一张杀,或者你失去一点体力`, function (card, player) {
                                if (card.name != 'sha') return false;
                                return lib.filter.filterCard.apply(this, arguments);
                            })
                            .set('targetRequired', true)
                            .set('complexSelect', true)
                            .set('filterTarget', function (card, player, target) {
                                if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                                return lib.filter.filterTarget.apply(this, arguments);
                            })
                            .set('sourcex', event.addedTarget)
                            .set('addCount', false)
                            .set('respondTo', [player, card]);
                    }
                    ('step 1');
                    if (event.directfalse || result.bool == false) {
                        target.loseHp();
                    }
                },
                ai: {
                    wuxie(target, card, player, viewer) {
                        if (player == game.me && get.attitude(viewer, player) > 0) {
                            return 0;
                        }
                    },
                    basic: {
                        order: 8,
                        value: 2,
                        useful: 1,
                    },
                    result: {
                        target: -1.5,
                        player(player) {
                            if (player.getCards('he').length) return 0;
                            return 1.5;
                        },
                    },
                    tag: {
                        gain: 1,
                        use: 1,
                        useSha: 1,
                        loseCard: 1,
                    },
                },
                selectTarget: 1,
            },
            /*火烧连营*/
            txhj_huoshaolianying: {
                audio: true,
                type: 'trick',
                filterTarget(card, player, target) {
                    return target == player.next;
                },
                enable: true,
                selectTarget: -1,
                modTarget: true,
                content() {
                    'step 0';
                    event.target = targets[0];
                    ('step 1');
                    event.target.damage('fire', event.baseDamage || 1);
                    ('step 2');
                    if (!event.target.getFriends().includes(event.target.next)) event.finish();
                    ('step 3');
                    event.target = event.target.next;
                    event.goto(1);
                },
                ai: {
                    order: 5,
                    value: 6,
                    tag: {
                        damage: 1,
                        natureDamage: 1,
                        fireDamage: 1,
                    },
                    result: {
                        target(player, target) {
                            if (target.hasSkillTag('nofire') || target.hasSkillTag('nodamage')) return 0;
                            if (target.hasSkill('xuying') && target.countCards('h') == 0) return 0;
                            if (!target.isLinked()) {
                                return get.damageEffect(target, player, target, 'fire');
                            }
                            return game.countPlayer(function (current) {
                                if (current.isLinked()) {
                                    return get.sgn(get.damageEffect(current, player, target, 'fire'));
                                }
                            });
                        },
                    },
                },
            },
            /*国风玉袍*/
            txhj_guofengyupao: {
                type: 'equip',
                subtype: 'equip2',
                skills: ['txhj_guofengyupao'],
                ai: {
                    basic: {
                        equipValue: 7.5,
                        order: 1,
                        useful: 2,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            /*飞龙夺凤*/
            txhj_feilong: {
                audio: true,
                type: 'equip',
                subtype: 'equip1',
                nomod: true,
                nopower: true,
                distance: {
                    attackFrom: -1,
                },
                skills: ['txhj_feilong_skill'],
                ai: {
                    equipValue(card, player) {
                        return 9;
                    },
                    basic: {
                        equipValue: 8,
                        order: 13,
                        useful: 2,
                        value: 9,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            /*定澜夜明珠*/
            txhj_dinglanyemingzhu: {
                audio: true,
                type: 'equip',
                subtype: 'equip5',
                nomod: true,
                nopower: true,
                global: 'g_dinglanyemingzhu_ai',
                skills: ['txhj_dinglanyemingzhu'],
                ai: {
                    equipValue(card, player) {
                        if (player.hasSkill('jubao')) return 8;
                        if (player.hasSkill('gzzhiheng')) return 6;
                        if (
                            game.hasPlayer(function (current) {
                                return current.hasSkill('jubao') && get.attitude(player, current) <= 0;
                            })
                        ) {
                            return 0;
                        }
                        return 7;
                    },
                    basic: {
                        equipValue: 6.5,
                    },
                },
            },
            /*调虎离山*/
            txhj_diaohu: {
                audio: true,
                type: 'trick',
                enable: true,
                filterTarget(card, player, target) {
                    return target != player;
                },
                selectTarget: 1,
                content() {
                    target.turnOver();
                    player.draw();
                    target.draw();
                },
                ai: {
                    basic: {
                        order: 9,
                        useful: 5,
                        value: 5,
                    },
                    yingbian(card, player, targets, viewer) {
                        if (get.attitude(viewer, player) <= 0) return 0;
                        if (
                            game.hasPlayer(function (current) {
                                return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                            })
                        )
                            return 6;
                        return 0;
                    },
                    result: {
                        target(player, target) {
                            var att = get.attitude(player, target);
                            var nh = target.countCards('h');
                            if (att > 0) {
                                if (
                                    target.countCards('j', function (card) {
                                        var cardj = card.viewAs ? { name: card.viewAs } : card;
                                        return get.effect(target, cardj, target, player) < 0;
                                    }) > 0
                                )
                                    return 3;
                                if (target.getEquip('baiyin') && target.isDamaged() && get.recoverEffect(target, player, player) > 0) {
                                    if (target.hp == 1 && !target.hujia) return 1.6;
                                }
                                if (
                                    target.countCards('e', function (card) {
                                        if (get.position(card) == 'e') return get.value(card, target) < 0;
                                    }) > 0
                                )
                                    return 1;
                            }
                            var es = target.getCards('e');
                            var noe = es.length == 0 || target.hasSkillTag('noe');
                            var noe2 =
                                es.filter(function (esx) {
                                    return get.value(esx, target) > 0;
                                }).length == 0;
                            var noh = nh == 0 || target.hasSkillTag('noh');
                            if (noh && (noe || noe2)) return 0;
                            if (att <= 0 && !target.countCards('he')) return 1.5;
                            return -1.5;
                        },
                    },
                    tag: {
                        loseCard: 1,
                        discard: 1,
                    },
                },
            },
            /*赤焰镇魂琴*/
            txhj_chiyanzhenhunqin: {
                type: 'equip',
                subtype: 'equip1',
                distance: {
                    attackFrom: -3,
                },
                ai: {
                    basic: {
                        equipValue: 4.5,
                        order: 1,
                        useful: 2,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                skills: ['txhj_chiyanzhenhunqin'],
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            /*草木皆兵*/
            txhj_caomu: {
                audio: true,
                enable: true,
                type: 'trick',
                filterTarget(card, player, target) {
                    return player != target;
                },
                ai: {
                    basic: {
                        order: 1,
                        useful: 1,
                        value: 4.5,
                    },
                    result: {
                        player(player, target) {
                            return game.countPlayer(function (current) {
                                if (get.distance(target, current) <= 1 && current != target) {
                                    var att = get.attitude(player, current);
                                    if (att > 3) {
                                        return 1.1;
                                    } else if (att > 0) {
                                        return 1;
                                    } else if (att < -3) {
                                        return -1.1;
                                    } else if (att < 0) {
                                        return -1;
                                    }
                                }
                            });
                        },
                    },
                },
                content() {
                    target.chooseToDiscard('he', true);
                    var targets = game.filterPlayer(function (current) {
                        return current != target && get.distance(target, current) <= 1;
                    });
                    if (targets.length) {
                        game.asyncDraw(targets);
                    }
                },
            },
            /*灵宝仙葫*/
            txhj_lingbaoxianhu: {
                type: 'equip',
                subtype: 'equip1',
                distance: { attackFrom: -2 },
                ai: {
                    basic: {
                        equipValue: 4.5,
                    },
                },
                skills: ['txhj_lingbaoxianhu'],
            },
            /*冲应神符*/
            txhj_chongyingshenfu: {
                type: 'equip',
                subtype: 'equip2',
                ai: {
                    basic: {
                        equipValue: 7,
                    },
                },
                skills: ['txhj_chongyingshenfu'],
                loseDelay: false,
            },
            //模式卡牌扩充
            //舞踏扇
            txhj_wutashan: {
                fullskin: true,
                image: 'ext:太虚幻境/image/card/txhj_wutashan.png',
                type: 'equip',
                subtype: 'equip1',
                distance: { attackFrom: -2 },
                skills: ['txhj_wutashan'],
                ai: {
                    basic: {
                        equipValue: 5,
                    },
                },
            },
            //炮烙
            txhj_paoluo: {
                fullskin: true,
                image: 'ext:太虚幻境/image/card/txhj_paoluo.png',
                type: 'equip',
                subtype: 'equip2',
                skills: ['txhj_paoluo'],
                ai: {
                    basic: {
                        equipValue: 7,
                    },
                },
            },
            //黄巾起义
            txhj_huangjinqiyi: {
                image: 'ext:太虚幻境/image/card/txhj_huangjinqiyi.png',
                fullskin: true,
                audio: true,
                enable: true,
                type: 'trick',
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return player == target;
                },
                content() {
                    target.showHandcards();
                    if (target.num('h', { name: 'shan' }) <= 0) {
                        target.draw(3);
                    }
                },
                ai: {
                    basic: {
                        order: 7.1,
                        useful: 1,
                        value(event, player) {
                            if (!player.num('h', { name: 'shan' })) return 10;
                            return 2.9;
                        },
                    },
                    result: {
                        target(player) {
                            if (!player.num('h', { name: 'shan' })) return 1;
                            return 0;
                        },
                    },
                },
                tag: {
                    draw: 3,
                },
            },
            //连弩战车
            txhj_liannuzhanche: {
                image: 'ext:太虚幻境/image/card/txhj_liannuzhanche.png',
                fullskin: true,
                type: 'equip',
                subtype: 'equip5',
                skills: ['txhj_liannuzhanche_skill'],
                ai: {
                    basic: {
                        equipValue: 7,
                    },
                },
            },
            //屯粮
            txhj_tunliang: {
                audio: true,
                type: 'trick',
                enable: true,
                selectTarget: [1, 2],
                filterTarget: true,
                content() {
                    target.draw();
                },
                ai: {
                    basic: {
                        order: 7.2,
                        useful: 4.5,
                        value: 9.2,
                    },
                    result: {
                        target: 1,
                    },
                    tag: {
                        draw: 1,
                    },
                },
            },
            //雄黄酒
            txhj_xionghuangjiu: {
                audio: 'jiu',
                type: 'basic',
                enable(event, player) {
                    return !player.hasSkill('jiu') && !player.hasSkill('txhj_xionghuangjiu');
                },
                lianheng: true,
                logv: false,
                savable(card, player, dying) {
                    return dying == player;
                },
                usable: 1,
                selectTarget: -1,
                modTarget: true,
                filterTarget(card, player, target) {
                    return target == player;
                },
                content() {
                    if (target.isDying()) {
                        target.recover();
                        if (_status.currentPhase == target) {
                            target.getStat().card.jiu--;
                        }
                    } else {
                        if (cards && cards.length) {
                            card = cards[0];
                        }
                        game.broadcastAll(
                            function (target, card, gain2) {
                                if (get.population(target.side) == 1) {
                                    target.addSkill('txhj_xionghuangjiu');
                                } else {
                                    if (!target.storage.jiu) target.storage.jiu = 0;
                                    target.storage.jiu++;
                                    target.addSkill('jiu');
                                }
                                game.addVideo('jiuNode', target, true);
                                if (!target.node.jiu && lib.config.jiu_effect) {
                                    target.node.jiu = ui.create.div('.playerjiu', target.node.avatar);
                                    target.node.jiu2 = ui.create.div('.playerjiu', target.node.avatar2);
                                }
                            },
                            target,
                            card,
                            target == targets[0]
                        );
                        if (target == targets[0]) {
                            if (card.clone && (card.clone.parentNode == target.parentNode || card.clone.parentNode == ui.arena)) {
                                game.addVideo('gain2', target, get.cardsInfo([card]));
                            }
                        }
                    }
                },
                ai: {
                    basic: {
                        useful(card, i) {
                            if (_status.event.player.hp > 1) {
                                if (i == 0) return 5;
                                return 1;
                            }
                            if (i == 0) return 7.3;
                            return 3;
                        },
                        value(card, player, i) {
                            if (player.hp > 1) {
                                if (i == 0) return 5;
                                return 1;
                            }
                            if (i == 0) return 7.3;
                            return 3;
                        },
                    },
                    order() {
                        return get.order({ name: 'sha' }) + 0.2;
                    },
                    result: {
                        target(player, target) {
                            if (target && target.isDying()) return 2;
                            if (lib.config.mode == 'stone' && !player.isMin()) {
                                if (player.getActCount() + 1 >= player.actcount) return 0;
                            }
                            var shas = player.getCards('h', 'sha');
                            if (shas.length > 1 && player.getCardUsable('sha') > 1) {
                                return 0;
                            }
                            var card;
                            if (shas.length) {
                                for (var i = 0; i < shas.length; i++) {
                                    if (lib.filter.filterCard(shas[i], target)) {
                                        card = shas[i];
                                        break;
                                    }
                                }
                            } else if (player.hasSha() && player.needsToDiscard()) {
                                if (player.countCards('h', 'hufu') != 1) {
                                    card = { name: 'sha' };
                                }
                            }
                            if (card) {
                                if (
                                    game.hasPlayer(function (current) {
                                        return get.attitude(target, current) < 0 && target.canUse(card, current, true, true) && !current.getEquip('baiyin') && get.effect(current, card, target) > 0;
                                    })
                                ) {
                                    return 1;
                                }
                            }
                            return 0;
                        },
                    },
                    tag: {
                        save: 1,
                    },
                },
            },
            //粽子
            txhj_zong: {
                type: 'basic',
                cardcolor: 'red',
                enable(card, player) {
                    return player.hp < player.maxHp;
                },
                savable(card, player, dying) {
                    return dying.side == player.side;
                },
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player && target.hp < target.maxHp;
                },
                modTarget(card, player, target) {
                    return target.hp < target.maxHp;
                },
                content() {
                    target.recover();
                },
                ai: {
                    basic: {
                        order(card, player) {
                            if (player.hasSkillTag('pretao')) return 5;
                            return 2;
                        },
                        useful: [8, 6.5, 5, 4],
                        value: [8, 6.5, 5, 4],
                    },
                    result: {
                        target(player, target) {
                            if (target.hp <= 0) return 2;
                            var nd = player.needsToDiscard();
                            var keep = false;
                            if (nd <= 0) {
                                keep = true;
                            } else if (nd == 1 && target.hp >= 2 && target.countCards('h', 'tao') <= 1) {
                                keep = true;
                            }
                            var mode = get.mode();
                            if (target.hp >= 2 && keep && target.hasFriend()) {
                                if (target.hp > 2 || nd == 0) return 0;
                                if (target.hp == 2) {
                                    if (
                                        game.hasPlayer(function (current) {
                                            if (target != current && get.attitude(target, current) >= 3) {
                                                if (current.hp <= 1) return true;
                                            }
                                        })
                                    ) {
                                        return 0;
                                    }
                                }
                            }
                            return 2;
                        },
                    },
                    tag: {
                        recover: 1,
                        save: 1,
                    },
                },
            },
            //地契
            txhj_diqi: {
                type: 'equip',
                subtype: 'equip2',
                skills: ['txhj_diqi_skill'],
                ai: {
                    basic: {
                        equipValue: 6,
                    },
                },
            },
            //继往开来
            txhj_jiwangkailai: {
                audio: 'jiwangkailai',
                type: 'trick',
                enable(card, player) {
                    var hs = player.getCards('h', function (cardx) {
                        return cardx != card && (!card.cards || !card.cards.includes(cardx));
                    });
                    if (!hs.length) return false;
                    var use = true,
                        discard = true;
                    for (var i of hs) {
                        if (use && !game.checkMod(i, player, 'unchanged', 'cardEnabled2', player)) use = false;
                        if (discard && !lib.filter.cardDiscardable(i, player, 'txhj_jiwangkailai')) discard = false;
                        if (!use && !discard) return false;
                    }
                    return true;
                },
                selectTarget: -1,
                toself: true,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                content() {
                    'step 0';
                    var hs = player.getCards('h');
                    if (hs.length) {
                        var use = true,
                            discard = true;
                        for (var i of hs) {
                            if (use && !game.checkMod(i, player, 'unchanged', 'cardEnabled2', player)) use = false;
                            if (discard && !lib.filter.cardDiscardable(i, player, 'txhj_jiwangkailai')) discard = false;
                            if (!use && !discard) break;
                        }
                        if (use && discard)
                            player
                                .chooseControl()
                                .set('prompt', '继往开来:请选择一项')
                                .set('choiceList', ['弃置所有手牌,摸等量的牌', '将所有手牌当做一张普通锦囊牌使用'])
                                .set('ai', function () {
                                    if (_status.event.player.countCards('h') > 2) return 0;
                                    return 1;
                                });
                        else if (use) event._result = { index: 1 };
                        else if (discard) event._result = { index: 0 };
                        else event.finish();
                    } else event.finish();
                    ('step 1');
                    var cards = player.getCards('h');
                    if (result.index == 0) {
                        player.discard(cards);
                        player.draw(cards.length);
                        event.finish();
                    } else {
                        var list = [];
                        for (var i of lib.inpile) {
                            if (i != 'txhj_jiwangkailai' && get.type(i) == 'trick' && lib.filter.filterCard({ name: i, cards: cards }, player)) list.push(['锦囊', '', i]);
                        }
                        if (list.length) {
                            player.chooseButton(['继往开来:选择要使用的牌', [list, 'vcard']], true).set('ai', function (button) {
                                var player = _status.event.player;
                                return player.getUseValue({ name: button.link[2], cards: player.getCards('h') });
                            });
                        } else event.finish();
                    }
                    ('step 2');
                    if (result.bool) player.chooseUseTarget({ name: result.links[0][2] }, player.getCards('h'), true);
                },
                ai: {
                    basic: {
                        order: 0.5,
                        useful: 3,
                        value: 5,
                    },
                    result: {
                        target(player, target) {
                            if (
                                target.needsToDiscard(1) ||
                                !target.countCards('h', function (card) {
                                    return get.value(card, player) >= 5.5;
                                })
                            )
                                return 1;
                            return 0;
                        },
                    },
                    tag: {
                        draw: 2,
                    },
                },
            },
            //投石车
            txhj_toushiche: {
                type: 'equip',
                subtype: 'equip1',
                distance: { attackFrom: -3 },
                ai: {
                    basic: {
                        equipValue: 2.5,
                    },
                },
                skills: ['txhj_toushiche_skill'],
            },
            //合纵抗秦卡牌补充
            zhenlongchangjian: {
                type: 'equip',
                subtype: 'equip1',
                distance: {
                    attackFrom: -3,
                },
                ai: {
                    basic: {
                        equipValue: 2,
                    },
                },
                skills: ['zhenlongchangjian_skill'],
                enable: true,
            },
            chuanguoyuxi: {
                type: 'equip',
                subtype: 'equip5',
                ai: {
                    basic: {
                        equipValue: 7.5,
                    },
                },
                skills: ['chuanguoyuxi_skill'],
                enable: true,
            },
            qinnu: {
                type: 'equip',
                subtype: 'equip1',
                skills: ['qinnu_skill'],
                distance: {
                    attackFrom: -8,
                },
                enable: true,
                ai: {
                    basic: {
                        useful: 2,
                        equipValue: 1,
                    },
                },
            },
            shangyangbianfa: {
                audio: true,
                global: 'shangyangbianfa_dying',
                type: 'trick',
                enable: true,
                filterTarget(card, player, target) {
                    return target != player;
                },
                selectTarget: 1,
                content() {
                    'step 0';
                    var num = [1, 2].randomGet();
                    target.damage(num).type = 'shangyangbianfa';
                },
                ai: {
                    basic: {
                        order: 5,
                        useful: 1,
                        value: 5.5,
                    },
                    result: {
                        target: -1.5,
                    },
                    tag: {
                        damage: 1,
                    },
                },
            },
            //七星袍
            txhj_qixingpao: {
                type: 'equip',
                subtype: 'equip2',
                skills: ['txhj_qixingpao'],
                ai: {
                    basic: {
                        equipValue: 7,
                    },
                },
            },
            txfengxueren: {
                image: 'ext:太虚幻境/image/card/txfengxueren.png',
                fullskin: true,
                type: 'equip',
                subtype: 'equip1',
                distance: { attackFrom: -1 },
                skills: ['txfengxueren'],
                ai: {
                    basic: {
                        equipValue: 5,
                    },
                },
            },
            txyunliangche: {
                type: 'equip',
                subtype: 'equip5',
                onLose() {
                    if (event.getParent(2) && event.getParent(2).name != 'swapEquip' && event.parent.type != 'equip' && player.countCards('he')) {
                        player.chooseToDiscard(true, 'he');
                    }
                },
                filterLose(card, player) {
                    return;
                },
                clearLose: true,
                equipDelay: false,
                loseDelay: false,
                skills: ['txyunliangche_skill'],
                ai: {
                    equipValue: 7.5,
                    basic: {
                        equipValue: 7.5,
                        order: 1,
                        useful: 2,
                        value: 7.5,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            txyuxi: {
                audio: true,
                type: 'equip',
                subtype: 'equip5',
                skills: ['txyuxi_skill'],
                ai: {
                    equipValue: 9,
                },
            },
            txluojingxiashi: {
                enable: true,
                type: 'trick',
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target != player && target.isDamaged();
                },
                content() {
                    target.damage();
                },
                ai: {
                    order: 3,
                    value: 4,
                    useful: 2,
                    tag: {
                        loseCard: 1,
                        damage: 1,
                    },//QQQ
                    result: {
                        target: -1.5,
                    },
                },
            },
            txmengyanchitu: {
                image: 'ext:太虚幻境/image/card/txmengyanchitu.png',
                fullskin: true,
                type: 'equip',
                subtype: 'equip5',
                skills: ['txmengyanchitu_skill'],
                ai: {
                    basic: {
                        equipValue: 7,
                    },
                },
            },
            txbaihuaqun: {
                image: 'ext:太虚幻境/image/card/txbaihuaqun.png',
                fullskin: true,
                type: 'equip',
                subtype: 'equip2',
                onLose() {
                    player.draw(2);
                },
                skills: ['txbaihuaqun'],
                ai: {
                    basic: {
                        equipValue: 11,
                    },
                },
            },
            txtiegushan: {
                image: 'ext:太虚幻境/image/card/txtiegushan.png',
                fullskin: true,
                type: 'equip',
                subtype: 'equip1',
                skills: ['txtiegushan', 'txtiegushan2'],
                distance: { attackFrom: -1 },
                ai: {
                    basic: {
                        equipValue(card, player) {
                            if (player.hasSkill('paoxiao')) return 13;
                            return 7.9;
                        },
                    },
                },
            },
            txjinwuluorigong: {
                type: 'equip',
                subtype: 'equip1',
                skills: ['txiwasawa_crowbow'],
                distance: { attackFrom: -8 },
                ai: {
                    basic: {
                        equipValue: 7.5,
                    },
                },
            },
            txqicaishenlu: {
                type: 'equip',
                subtype: 'equip4',
                distance: { globalFrom: -1 },
                skills: ['tx_qicaishenlu'],
                nomod: true,
                nopower: true,
                ai: {
                    equipValue: 9,
                },
            },
            txyihuajiemu: {
                type: 'trick',
                enable: true,
                filterTarget(card, player, target) {
                    return target != player && target.countCards('he');
                },
                content() {
                    'step 0';
                    if (target.hasSha()) {
                        target.chooseToUse(
                            function (card, player, event) {
                                return card.name == 'sha' && lib.filter.filterCard.apply(this, arguments);
                            },
                            `使用一张杀,或交给${get.translation(player)}两张牌`
                        );
                    } else {
                        event.directfalse = true;
                    }
                    ('step 1');
                    var nh = target.countCards('he');
                    if ((event.directfalse || !result.bool) && nh) {
                        if (nh <= 2) {
                            event.directcards = true;
                        } else {
                            target.chooseCard('he', 2, true, '将两张牌交给' + get.translation(player));
                        }
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    if (event.directcards) {
                        target.give(target.getCards('he'), player);
                    } else if (result.bool && result.cards && result.cards.length) {
                        target.give(result.cards, player);
                    }
                },
                ai: {
                    order: 7,
                    result: {
                        target(player, target) {
                            if (target.hasSha() && _status.event.getRand() < 0.5) return 1;
                            return -2;
                        },
                    },
                },
            },
            //国战装备转化
            /*明光铠*/
            txminguangkai: {
                audio: 'minguangkai',
                image: 'ext:太虚幻境/image/card/txminguangkai.png',
                fullskin: true,
                type: 'equip',
                subtype: 'equip2',
                skills: ['txminguangkai_cancel', 'txminguangkai_link'],
                ai: {
                    basic: {
                        equipValue: 6,
                    },
                },
            },
            /*诏书*/
            txzhaoshu: {
                audio: 'zhaoshu',
                //mode:['guozhan'],
                type: 'equip',
                subtype: 'equip5',
                skills: ['txzhaoshu_skill'],
                content() {
                    cards = cards.filterInD();
                    if (cards.length && target.isAlive()) {
                        target.addToExpansion(cards, 'gain2').gaintag.add('txzhaoshu_skill');
                        target.addSkill('txzhaoshu_skill');
                        game.addGlobalSkill('txzhaoshu_global');
                    }
                },
                onEquip() {
                    if (player.isAlive()) {
                        player.addToExpansion(card, 'giveAuto').gaintag.add('txzhaoshu_skill');
                        player.markAuto('txzhaoshu_skill', [card]);
                        player.addSkill('txzhaoshu_skill');
                        game.addGlobalSkill('txzhaoshu_global');
                    }
                },
                ai: {
                    order: 12,
                    value: 3,
                    useful: 1,
                    result: {
                        keepAI: true,
                        target: 1,
                    },
                },
            },
            /*太极拂尘*/
            txhj_taijifuchen: {
                type: 'equip',
                subtype: 'equip1',
                distance: {
                    attackFrom: -4,
                },
                ai: {
                    basic: {
                        equipValue: 4.5,
                        order: 1,
                        useful: 2,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                skills: ['gx_taijifuchen'],
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            //白鹄
            txhj_baihu: {
                image: 'ext:太虚幻境/image/card/txhj_baihu.png',
                fullskin: true,
                type: 'equip',
                subtype: 'equip3',
                distance: { globalTo: 2 },
                ai: {
                    basic: {
                        equipValue: 10,
                    },
                },
            },
            //圣光白衣
            txhj_shengguangbaiyi: {
                image: 'ext:太虚幻境/image/card/txhj_shengguangbaiyi.png',
                fullskin: true,
                type: 'equip',
                subtype: 'equip2',
                skills: ['txhj_shengguangbaiyi'],
                ai: {
                    basic: {
                        equipValue: 7,
                    },
                },
            },
            //望梅止渴
            txhj_wangmeizhike: {
                audio: 'wangmeizhike',
                enable: true,
                type: 'trick',
                filterTarget: true,
                content() {
                    'step 0';
                    target.judge(function (card) {
                        if (card.suit == 'club' && target.hp < target.maxHp) return 9;
                        if (card.suit == 'club' && target.hp >= target.maxHp) return 0;
                        return 1;
                    });
                    ('step 1');
                    if (result.suit == 'club') {
                        target.recover();
                    }
                    if (result.suit != 'club') {
                        target.draw();
                    }
                },
                ai: {
                    basic: {
                        useful: 3,
                        value: 1,
                        order: 9,
                    },
                    result: {
                        target(player, target) {
                            if (target.hp < target.maxHp) return target.maxHp - target.hp;
                            return 0.5;
                        },
                    },
                    tag: {
                        draw: 1,
                    },
                },
            },
            //镇魂琴
            txhj_zhenhunqin: {
                image: 'ext:太虚幻境/image/card/txhj_zhenhunqin.png',
                fullskin: true,
                type: 'equip',
                subtype: 'equip1',
                distance: { attackFrom: -3 },
                skills: ['txhj_zhenhunqin'],
                ai: {
                    basic: {
                        equipValue: 5,
                    },
                },
            },
            //邪神面具
            txhj_xieshenmianju: {
                image: 'ext:太虚幻境/image/card/txhj_xieshenmianju.png',
                fullskin: true,
                type: 'equip',
                subtype: 'equip2',
                skills: ['txhj_xieshenmianju'],
                ai: {
                    order: 9.5,
                    basic: {
                        equipValue(card, player) {
                            if (!player.isTurnedOver()) return 6;
                            if (player.isTurnedOver()) return -10;
                            return 0;
                        },
                    },
                },
            },
            /*声东击西*/
            txhj_shengdong: {
                audio: true,
                enable: true,
                chongzhu: true,
                singleCard: true,
                type: 'trick',
                complexTarget: true,
                multitarget: true,
                targetprompt: ['给一张牌', '得两张牌'],
                filterTarget(card, player, target) {
                    return target != player;
                },
                filterAddedTarget(card, player, target) {
                    return true;
                },
                content() {
                    'step 0';
                    if (!player.countCards('h')) {
                        event.finish();
                    } else {
                        event.target1 = target;
                        event.target2 = event.addedTarget;
                        player.chooseCard('h', '将一张手牌交给' + get.translation(event.target1), true);
                    }
                    ('step 1');
                    player.$giveAuto(result.cards, event.target1);
                    event.target1.gain(result.cards, player);
                    ('step 2');
                    if (!event.target1.countCards('h')) {
                        event.finish();
                    } else {
                        var he = event.target1.getCards('h');
                        if (he.length <= 2) {
                            event.directresult = he;
                        } else {
                            event.target1.chooseCard('h', '将两张手牌交给' + get.translation(event.target2), 2, true);
                        }
                    }
                    ('step 3');
                    if (!event.directresult) {
                        event.directresult = result.cards;
                    }
                    event.target1.$giveAuto(event.directresult, event.target2);
                    event.target2.gain(event.directresult, event.target1);
                },
                ai: {
                    order: 2.5,
                    value: [4, 1],
                    useful: 1,
                    wuxie() {
                        return 0;
                    },
                    result: {
                        target(player, target) {
                            var ok = false;
                            var hs = player.getCards('h');
                            if (hs.length <= 1) return 0;
                            for (var i = 0; i < hs.length; i++) {
                                if (get.value(hs[i]) <= 5) {
                                    ok = true;
                                    break;
                                }
                            }
                            if (!ok) return 0;
                            if (ui.selected.targets.length == 1) {
                                if (target.hasSkillTag('nogain')) return 0;
                                return 2;
                            }
                            if (target.countCards('he') == 0) return 0;
                            if (player.hasFriend()) return -1;
                            return 0;
                        },
                    },
                },
            },
            txhj_shuiyan: {
                audio: 'shuiyanqijun',
                type: 'trick',
                filterTarget(card, player, target) {
                    return target != player;
                },
                enable: true,
                content() {
                    'step 0';
                    var cards = target.getCards('e');
                    var num = 0;
                    if (Array.isArray(cards))
                        for (var i of cards) {
                            if (!lib.filter.cardDiscardable(card, target, 'txhj_shuiyan')) continue;
                            if (i.number) num += i.number;
                        }
                    if (num < 6) {
                        var next = target.damage(event.baseDamage || 1);
                        if (!get.is.single()) next.nature = 'thunder';
                        event.finish();
                        return;
                    }
                    ('step 1');
                    var next = target.chooseToDiscard(
                        '是否弃置任意张点之和数不小于6的装备牌？',
                        function (card) {
                            return true;
                        },
                        'e'
                    );
                    next.set('complexCard', true);
                    next.set('selectCard', function () {
                        var sum = 0;
                        if (Array.isArray(ui.selected.cards))
                            for (var i of ui.selected.cards) {
                                sum += i.number;
                            }
                        if (sum >= 6) return [ui.selected.cards.length, Infinity];
                        return ui.selected.cards.length + 2;
                    });
                    next.set(
                        'cardResult',
                        (function () {
                            var cards = target.getCards('e');
                            var l = cards.length;
                            var all = Math.pow(l, 2);
                            var list = [];
                            for (var i = 1; i < all; i++) {
                                var array = [];
                                for (var j = 0; j < l; j++) {
                                    if (Math.floor((i % Math.pow(2, j + 1)) / Math.pow(2, j)) > 0) array.push(cards[j]);
                                }
                                var numx = 0;
                                for (var k of array) {
                                    numx += k.number;
                                }
                                if (numx == num) list.push(array);
                            }
                            if (list.length) {
                                list.sort(function (a, b) {
                                    return get.value(a) - get.value(b);
                                });
                                return list[0];
                            }
                            return list;
                        })()
                    );
                    next.set('ai', function (card) {
                        if (!_status.event.cardResult.includes(card)) return 0;
                        return 6 - get.value(card);
                    });
                    ('step 2');
                    if (result.bool) {
                        event.finish();
                        game.log('弃牌保命');
                    } else {
                        var next = target.damage(event.baseDamage || 1);
                        if (!get.is.single()) next.nature = 'thunder';
                    }
                    event.finish();
                    //----------------//
                },
                ai: {
                    canLink(player, target, card) {
                        if (!target.isLinked() || player.hasSkill('jueqing') || target.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                        var es = target.countCards('e');
                        if (!es) return true;
                        if (target.hp >= 3 && es >= 2) {
                            return true;
                        }
                        return false;
                    },
                    order: 6,
                    value: 4,
                    useful: 2,
                    tag: {
                        damage: 1,
                        thunderDamage: 1,
                        natureDamage: 1,
                        loseCard: 1,
                    },
                    result: {
                        target(player, target, card, isLink) {
                            if (isLink) return -1.5;
                            var es = target.getCards('e');
                            if (!es.length) return -1.5;
                            var val = 0;
                            for (var i of es) val += get.value(i, target);
                            return -Math.min(1.5, val / 5);
                        },
                    },
                },
            },
            //---------------------//
        },
        skill: {
            /*-------分割线--------*/
            /*诸葛连弩*/
            txhj_zhuge: {
                equipSkill: true,
                firstDo: true,
                trigger: {
                    player: 'useCard1',
                },
                forced: true,
                filter(event, player) {
                    return !event.audioed && event.card.name == 'sha' && player.countUsed('sha', true) > 1 && event.parent.type == 'phase';
                },
                content() {
                    trigger.audioed = true;
                },
                mod: {
                    cardUsable(card, player, num) {
                        var cardx = player.getEquip('txhj_zhuge');
                        if (card.name == 'sha' && (!cardx || player.hasSkill('txhj_zhuge', null, false) || (!_status.rw_zhuge_temp && !ui.selected.cards.includes(cardx)))) {
                            return 4;
                        }
                    },
                    cardEnabled2(card, player) {
                        if (!_status.event.addCount_extra || player.hasSkill('txhj_zhuge', null, false)) return;
                        if (card && card == player.getEquip('txhj_zhuge')) {
                            try {
                                var cardz = get.card();
                            } catch (e) {
                                return;
                            }
                            if (!cardz || cardz.name != 'sha') return;
                            _status.rw_zhuge_temp = true;
                            var bool = lib.filter.cardUsable({ name: 'sha' }, player);
                            delete _status.txhj_zhuge_temp;
                            if (!bool) return false;
                        }
                    },
                },
            },
            /*明光铠技能*/
            txminguangkai_cancel: {
                equipSkill: true,
                trigger: { target: 'useCardToTarget' },
                forced: true,
                check(event, player) {
                    return get.effect(event.target, event.card, event.player, player) < 0;
                },
                filter(event, player) {
                    if (['huoshaolianying', 'huogong'].includes(event.card.name)) return true;
                    if (event.card.name == 'sha') return event.card && event.card.nature == 'fire';
                    return false;
                },
                content() {
                    trigger.parent.targets.remove(player);
                },
                ai: {
                    effect: {
                        target(card, player, target, current) {
                            if (['huoshaolianying', 'huogong'].includes(card.name) || (card.name == 'sha' && card.nature == 'fire')) {
                                return 'zeroplayertarget';
                            }
                        },
                    },
                },
            },
            txminguangkai_link: {
                equipSkill: true,
                trigger: { player: 'linkBefore' },
                forced: true,
                filter(event, player) {
                    return player.isDamaged() && !player.isLinked();
                },
                content() {
                    trigger.cancel();
                },
                ai: {
                    effect: {
                        target(card, player, target, current) {
                            if (target.isDamaged() && ['tiesuo', 'lulitongxin'].includes(card.name)) {
                                return 'zeroplayertarget';
                            }
                        },
                    },
                },
            },
            /*方天画戟技能*/
            txhj_fangtianhuaji: {
                trigger: {
                    player: 'useCard2',
                },
                forced: true,
                charlotte: true,
                forced: true,
                filter(event, player) {
                    if (event.card.name != 'sha') return false;
                    var evt = event.getParent('phaseUse');
                    return (
                        evt &&
                        evt.player == player &&
                        player.getHistory('useCard', function (evtx) {
                            return evtx.card.name == 'sha' && evtx.getParent('phaseUse') == evt;
                        })[0] == event &&
                        game.hasPlayer(function (current) {
                            return !event.targets.includes(current) && lib.filter.filterTarget(event.card, player, current);
                        })
                    );
                },
                content() {
                    'step 0';
                    var num = 2;
                    if (Math.min(game.countPlayer()) >= 3) {
                        player.chooseTarget(`请选择至多${num}名其他角色也成为此【杀】的目标？`, [1, num], true, function (card, player, target) {
                            return target != player && !trigger.targets.includes(target) && player.canUse({ name: 'sha' }, target);
                        }).ai = function (target) {
                            return get.effect(target, { name: 'sha' }, _status.event.player);
                        };
                    }
                    ('step 1');
                    if (result.bool && result.targets && result.targets.length) {
                        var targets = result.targets;
                        player.line(targets, trigger.card.nature);
                        trigger.targets.addArray(targets);
                    }
                },
            },
            /*麒麟弓*/
            txhj_qilingong: {
                equipSkill: true,
                trigger: {
                    source: 'damageBegin2',
                },
                filter(event, player) {
                    return event.card && event.card.name == 'sha' && event.notLink() && event.player.getCards('e', { subtype: ['equip5'] }).length;
                },
                forced: true,
                content() {
                    'step 0';
                    var att = get.attitude(player, trigger.player) <= 0;
                    var next = player.chooseButton();
                    next.set('att', att);
                    next.set('createDialog', [`是否发动【麒麟弓】,弃置${get.translation(trigger.player)}的一张宝物牌？`, trigger.player.getCards('e', { subtype: ['equip5'] })]);
                    next.set('ai', function (button) {
                        if (_status.event.att) return get.buttonValue(button);
                        return 0;
                    });
                    ('step 1');
                    if (result.bool) {
                        trigger.player.discard(result.links[0]);
                    }
                },
            },
            /*虚妄之冕技能*/
            txhj_xuwangzhimian: {
                equipSkill: true,
                trigger: {
                    player: 'phaseDrawBegin',
                },
                forced: true,
                content() {
                    trigger.num += 2;
                },
                mod: {
                    maxHandcard(player, num) {
                        return num - 1;
                    },
                },
            },
            /*霹雳车技能*/
            txhj_piliche: {
                equipSkill: true,
                trigger: {
                    source: 'damageEnd',
                },
                filter(event, player) {
                    return event.player != player && event.player.maxHp > 0 && event.player.isAlive();
                },
                prompt2(event, player) {
                    return '令其减少等同伤害值的体力上限.';
                },
                content() {
                    trigger.player.loseMaxHp(trigger.num);
                },
            },
            txhj_piliche2: {},
            /*六龙骖驾技能*/
            txhj_liulongcanjia: {
                equipSkill: true,
                mod: {
                    targetEnabled(card, player, target) {
                        if (['equip3', 'equip4'].includes(get.subtype(card))) return false;
                    },
                },
            },
            /*雷击木*/
            txhj_leijimu: {
                equipSkill: true,
                trigger: {
                    player: 'useCard1',
                },
                filter(event, player) {
                    if (event.card.name == 'sha' && !event.card.nature) return true;
                },
                check(event, player) {
                    var eff = 0;
                    for (var i = 0; i < event.targets.length; i++) {
                        var target = event.targets[i];
                        var eff1 = get.damageEffect(target, player, player);
                        var eff2 = get.damageEffect(target, player, player, 'thunder');
                        eff += eff2;
                        eff -= eff1;
                    }
                    return eff >= 0;
                },
                prompt2(event, player) {
                    return `将${get.translation(event.card)}改为雷属性`;
                },
                content() {
                    trigger.card.nature = 'thunder';
                    if (get.itemtype(trigger.card) == 'card') {
                        var next = game.createEvent('txhj_leijimu_clear');
                        next.card = trigger.card;
                        event.next.remove(next);
                        trigger.after.push(next);
                        next.setContent(function () {
                            delete card.nature;
                        });
                    }
                },
            },
            /*绝尘金戈技能*/
            txhj_juechenjinge: {
                equipSkill: true,
                global: 'txhj_juechenjinge2',
            },
            txhj_juechenjinge2: {
                equipSkill: true,
                mod: {
                    globalTo(from, to, distance) {
                        return (
                            distance +
                            game.countPlayer(function (current) {
                                if (current == to) return;
                                if (current.side != to.side) return;
                                if (current.hasSkill('txhj_juechenjinge')) return 1;
                            })
                        );
                    },
                },
            },
            /*国风玉袍*/
            txhj_guofengyupao: {
                equipSkill: true,
                mod: {
                    targetEnabled(card, player, target, now) {
                        if (target.hasSkillTag('unequip2')) return false;
                        if (player != target) {
                            if (
                                player.hasSkillTag('unequip', false, {
                                    name: card ? card.name : null,
                                    target: player,
                                    card: card,
                                })
                            ) {
                            } else if (get.type(card) == 'trick') return false;
                        }
                    },
                },
            },
            /*飞龙夺凤技能*/
            txhj_feilong_skill: {
                subSkill: {
                    blank: {
                        init(player, skill) {
                            player.addSkillBlocker(skill);
                        },
                        onremove(player, skill) {
                            player.removeSkillBlocker(skill);
                        },
                        charlotte: true,
                        skillBlocker(skill, player) {
                            return !lib.skill[skill].charlotte;
                        },
                    },
                },
                trigger: {
                    source: ['dieAfter'],
                },
                _priority: -25,
                equipSkill: true,
                content() {
                    'step 0';
                    var target = trigger.player;
                    target.addTempSkill('txhj_feilong_skill_blank', { player: 'damageAfter' });
                    target.side = player.side;
                    target.identity = player.identity;
                    target.setIdentity(get.translation(player.identity));
                    target.node.identity.dataset.color = player.identity;
                    target.revive(3);
                    target.maxHp = 3;
                    target.update();
                },
            },
            /*定澜夜明珠技能*/
            txhj_dinglanyemingzhu: {
                equipSkill: true,
                inherit: 'zhiheng',
                filter(event, player) {
                    return !player.hasSkill('gzzhiheng', true);
                },
                selectCard() {
                    var player = _status.event.player;
                    return [1, player.maxHp];
                },
                filterCard(card, player) {
                    return card != player.getEquip(5);
                },
                prompt: '出牌阶段限一次,你可以弃置至多X张牌(X为你的体力上限),摸等量的牌',
            },
            /*赤焰镇魂琴技能*/
            txhj_chiyanzhenhunqin: {
                equipSkill: true,
                trigger: {
                    source: 'damageBegin1',
                },
                _priority: 5,
                forced: true,
                content() {
                    trigger.nature = 'fire';
                },
            },
            /*灵宝仙葫技能*/
            txhj_lingbaoxianhu: {
                trigger: {
                    source: 'damageSource',
                    global: 'dieAfter',
                },
                forced: true,
                equipSkill: true,
                filter(event, player) {
                    if (event.name == 'damage') return event.num > 1;
                    return true;
                },
                content() {
                    player.gainMaxHp();
                    player.recover();
                },
            },
            //废案
            txhj_jiuchiroulin: {
                audio: true,
                type: 'trick',
                enable: true,
                selectTarget: -1,
                reverseOrder: true,
                yingbian_prompt: '当你使用此牌选择目标后,你可为此牌减少一个目标',
                yingbian_tags: ['remove'],
                yingbian(event) {
                    event.yingbian_removeTarget = true;
                },
                filterTarget(card, player, target) {
                    return target != player;
                },
                content() {
                    'step 0';
                    if (typeof event.baseDamage != 'number') event.baseDamage = 1;
                    if (event.directHit) event._result = { bool: false };
                    else {
                        var next = target.chooseToRespond({ name: 'jiu' });
                        next.set('ai', function (card) {
                            var evt = _status.event.parent;
                            if (get.damageEffect(evt.target, evt.player, evt.target) >= 0) return 0;
                            if (evt.player.hasSkillTag('notricksource')) return 0;
                            if (evt.target.hasSkillTag('notrick')) return 0;
                            if (evt.target.hasSkillTag('noShan')) {
                                return -1;
                            }
                            return get.order(card);
                        });
                        next.autochoose = lib.filter.autoRespondShan;
                    }
                    ('step 1');
                    if (result.bool == false) {
                        target.damage(event.baseDamage);
                    }
                },
                ai: {
                    wuxie(target, card, player, viewer) {
                        if (get.attitude(viewer, target) > 0 && target.countCards('h', 'jiu')) {
                            if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                        }
                    },
                    basic: {
                        order: 9,
                        useful: 1,
                        value: 5,
                    },
                    result: {
                        target_use(player, target) {
                            if (player.hasUnknown(2) && get.mode() != 'guozhan') return 0;
                            var nh = target.countCards('h');
                            if (get.mode() == 'identity') {
                                if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
                            }
                            if (nh == 0) return -2;
                            if (nh == 1) return -1.7;
                            return -1.5;
                        },
                        target(player, target) {
                            var nh = target.countCards('h');
                            if (get.mode() == 'identity') {
                                if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
                            }
                            if (nh == 0) return -2;
                            if (nh == 1) return -1.7;
                            return -1.5;
                        },
                    },
                    tag: {
                        respond: 1,
                        respondShan: 1,
                        damage: 1,
                        multitarget: 1,
                        multineg: 1,
                    },
                },
            },
            //国战装备转化
            txzhaoshu_skill: {
                equipSkill: true,
                charlotte: true,
                enable: 'phaseUse',
                usable: 2,
                filter(event, player) {
                    var cards = player.getExpansions('txzhaoshu_cards');
                    if (cards.length < 2) return false;
                    var list = [];
                    for (var i of cards) {
                        list.add(i.suit);
                        if (list.length >= 2) return true;
                    }
                    return false;
                },
                delay: false,
                content() {
                    'step 0';
                    var cards = player.getExpansions('txzhaoshu_cards');
                    player.loseToDiscardpile(cards);
                    ('step 1');
                    var list = [
                        ['spade', 12, 'zhujinqiyuan'],
                        ['diamond', 1, 'chuqibuyi'],
                        ['heart', 1, 'dongzhuxianji'],
                        ['club', 12, 'shuiyanqijunx'],
                    ];
                    for (var i = 0; i < list.length; i++) {
                        if (lib.inpile.includes(list[i][2])) list.splice(i--, 1);
                    }
                    if (list.length) {
                        var card = list.randomGet();
                        lib.inpile.add(card[2]);
                        player.gain(game.createCard2(card[2], card[0], card[1]), 'gain2');
                    }
                },
                ai: {
                    order: 10,
                    result: { player: 1 },
                },
                mark: true,
                marktext: '诏',
                intro: {
                    name: '诏书',
                    mark(dialog, content, player) {
                        var content = player.getExpansions('txzhaoshu_skill');
                        dialog.add(content);
                        dialog.addText('<br><li>与你相同阵营的角色的出牌阶段限两次,其可以将一张手牌(受伤的角色改为至多两张)置于【诏书】上,称为<应>.<br><li>出牌阶段限两次,若你的<应>中包含至少两种花色,则你可以发动<锦囊召唤>,将所有<应>置入弃牌堆,随机获得一张未加入牌堆的额外锦囊牌(洞烛先机、逐近弃远、水淹七军、出其不意).', false);
                        var cards = player.getExpansions('txzhaoshu_cards');
                        if (cards.length) {
                            dialog.addAuto(cards);
                        }
                    },
                    content: 'expansion',
                    markcount(content, player) {
                        return player.getExpansions('txzhaoshu_cards').length;
                    },
                },
                onremove(player, skill) {
                    var cards = player.getExpansions(skill).concat(player.getExpansions('txzhaoshu_cards'));
                    if (cards.length) player.loseToDiscardpile(cards);
                },
            },
            txzhaoshu_global: {
                enable: 'phaseUse',
                usable: 2,
                filter(event, player) {
                    if (!player.countCards('h')) return false;
                    return game.hasPlayer(function (current) {
                        return current.hasSkill('txzhaoshu_skill') && current.isFriendsOf(player);
                    });
                },
                filterCard: true,
                selectCard() {
                    if (_status.event.player.isDamaged()) return [1, 2];
                    return [1, 1];
                },
                position: 'h',
                discard: false,
                lose: false,
                delay: false,
                check(card) {
                    var player = _status.event.player,
                        cards = ui.selected.cards.concat(
                            game
                                .findPlayer(function (current) {
                                    return current.hasSkill('txzhaoshu_skill') && current.isFriendsOf(player);
                                })
                                .getExpansions('txzhaoshu_cards')
                        ),
                        suit = card.suit;
                    for (var i of cards) {
                        if (i.suit == suit) return 0;
                    }
                    return 5 + player.needsToDiscard() * 1.5 - get.value(card);
                },
                filterTarget(card, player, target) {
                    return target.hasSkill('txzhaoshu_skill') && target.isFriendsOf(player);
                },
                selectTarget() {
                    if (
                        game.countPlayer(function (current) {
                            return current.hasSkill('txzhaoshu_skill') && current.isFriendsOf(_status.event.player);
                        }) == 1
                    )
                        return [-1, -1];
                    return [1, 1];
                },
                prompt() {
                    var player = _status.event.player;
                    return (
                        '将' +
                        (player.isDamaged() ? '至多两' : '一') +
                        '张手牌置于' +
                        get.translation(
                            game.filterPlayer(function (current) {
                                return current.hasSkill('txzhaoshu_skill') && current.isFriendsOf(player);
                            })
                        ) +
                        '的【诏书】上'
                    );
                },
                content() {
                    target.addToExpansion(cards, player, 'give').gaintag.add('txzhaoshu_cards');
                },
                ai: {
                    order: 1,
                    result: {
                        player: 1,
                    },
                },
            },
            //民间卡牌
            /*	//南蛮战象
            txhj_nanmanzhanxiang_skill:{
            trigger:{target:"useCardBefore"},
                                forced:true,
                                filter:function(event,player){
                                    return event.card && event.card.name=="nanman";
                                },
                                content:function(){
                                    trigger.untrigger();
                                    trigger.finish();
                                }
                            },			
                //八门金锁
                txhj_bamenjinsuo:{
                mod:{
                globalFrom:function (from,to,distance){
                return distance+Infinity;
                    }
                  }
                },		
                //天霜凝碧杖
                txhj_tianshuangningbizhang:{
                mod:{
                suit:function(card,suit){
                        if(suit=='spade') return 'club';
                                }
                          }
                },
                //姬神弓
                txhj_jishengong:{
                trigger:{
                source:"damageBegin",
                },
                direct:true,
                audio:true,
                filter:function (event){
                return event.card&&event.card.name=='sha'&&event.player.num('e');
                },
                content:function (){
                player.gainPlayerCard('e',trigger.player);
                  }
                        },*/
            //明光凯
            txhj_mingguangkai: {
                trigger: {
                    global: 'phaseBegin',
                },
                content() {
                    'step 0';
                    player.judge(function (card) {
                        if (card.suit == 'heart' && player.hp < player.maxHp) return 2;
                        return 0;
                    });
                    ('step 1');
                    if (result.bool) {
                        player.recover();
                    }
                },
            },
            //圣光白衣
            txhj_shengguangbaiyi: {
                trigger: {
                    target: 'shaBefore',
                },
                audio: true,
                forced: true,
                filter(event, player) {
                    return event.card.name == 'sha' && get.color(event.card) == 'red' && !event.parent.player.num('s', 'unequip');
                },
                content() {
                    trigger.untrigger();
                    trigger.finish();
                },
                ai: {
                    effect: {
                        target(card, player) {
                            var equip1 = player.get('e', '1');
                            if (equip1 && equip1.name == 'qinggang') return 1;
                            if (player.num('s', 'unequip')) return;
                            if (card.name == 'sha' && get.color(card) == 'red') return 'zerotarget';
                        },
                    },
                },
                group: ['txhj_shengguangbaiyi2'],
            },
            txhj_shengguangbaiyi2: {
                mod: {
                    maxHandcard(player, num) {
                        return (num += 2);
                    },
                },
            },
            //镇魂琴
            txhj_zhenhunqin: {
                trigger: { player: 'useCardToBefore' },
                _priority: 7,
                filter(event, player) {
                    if (event.card.name == 'sha' && !event.card.nature) return true;
                },
                audio: 'ext:太虚幻境/audio/card:1',
                check(event, player) {
                    var att = get.attitude(player, event.target);
                    if (event.target.hasSkillTag('nothunder')) {
                        return att > 0;
                    }
                    return att <= 0;
                },
                content() {
                    trigger.card.nature = 'thunder';
                },
            },
            //邪神面具
            txhj_xieshenmianju: {
                trigger: { player: 'turnOverBefore' },
                forced: true,
                audio: 'ext:太虚幻境/audio/card:1',
                content() {
                    trigger.untrigger();
                    trigger.finish();
                },
                ai: {
                    noturnOver: true,
                    effect: {
                        target(card, player, target, current) {
                            if (get.tag(card, 'turnOver')) return [0, 0];
                        },
                    },
                },
                group: ['txhj_xieshenmianju2'],
            },
            txhj_xieshenmianju2: {
                trigger: { player: 'damageBegin' },
                forced: true,
                audio: 'ext:太虚幻境/audio/card:1',
                filter(event, player) {
                    if (event.num <= 1) return false;
                    if (event.parent.player.num('s', 'unequip')) return false;
                    return true;
                },
                _priority: -10,
                content() {
                    trigger.num--;
                },
            },
            //模式卡牌扩充
            //舞踏扇
            txhj_wutashan: {
                enable: ['chooseToUse'],
                filterCard: { name: 'shan' },
                viewAs: { name: 'sha', nature: 'thunder' },
                viewAsFilter(player) {
                    if (!player.num('h', 'shan')) return false;
                },
                prompt: '将一张闪当雷杀使用或打出',
                check() {
                    return 1;
                },
                ai: {
                    effect: {
                        target(card, player, target, current) {
                            if (get.tag(card, 'respondSha') && current < 0) return 0.6;
                        },
                    },
                    respondSha: true,
                    skillTagFilter(player) {
                        if (!player.num('h', 'shan')) return false;
                    },
                    order: 4,
                    useful: -1,
                    value: -1,
                },
            },
            //炮烙
            txhj_paoluo: {
                trigger: {
                    player: 'damageBefore',
                },
                audio: true,
                forced: true,
                content() {
                    'step 0';
                    player.chooseTarget('是否发动【炮烙】？', function (card, player, target) {
                        return get.distance(player, target, 'attack') <= 1;
                    }).ai = function (target) {
                        var player = _status.event.player;
                        if (get.attitude(_status.event.player, target) > 0) return 0;
                        if (get.attitude(_status.event.player, target) < 0 && target.num('h') <= 5) return 7 - target.num('h');
                        return 1;
                    };
                    ('step 1');
                    if (result.bool == false) {
                        event.finish();
                        return;
                    }
                    var target = result.targets[0];
                    event.target = target;
                    player.line(target, 'green');
                    target
                        .chooseCard('h', `【炮烙】<br><br><div class="text center">交给${get.translation(player)}一张手牌,或失去一点体力.`, function (card, player, target) {
                            return true;
                        })
                        .set('ai', function (card) {
                            if (get.attitude(_status.event.player, _status.event.parent.player) > 0) {
                                return 11 - get.value(card);
                            }
                            if (get.attitude(_status.event.player, _status.event.parent.player) <= 0) {
                                return 9 - get.value(card);
                            }
                        });
                    ('step 2');
                    var target = event.target;
                    if (result.bool) {
                        player.gain(result.cards);
                        target.$give(result.cards, player);
                    } else {
                        target.loseHp();
                    }
                },
            },
            //连弩战车
            txhj_liannuzhanche_skill: {
                mod: {
                    globalFrom(from, to, distance) {
                        return 1;
                    },
                    globalTo(from, to, distance) {
                        return distance + 1;
                    },
                    cardUsable(card, player, num) {
                        if (card.name == 'sha') return num + 1;
                    },
                },
            },
            //雄黄酒
            txhj_xionghuangjiu: {
                trigger: { source: 'damageBegin1' },
                filter(event, player) {
                    return event.card && event.card == player.storage.txhj_xionghuangjiu && event.notLink();
                },
                forced: true,
                content() {
                    trigger.num++;
                },
                temp: true,
                onremove(player) {
                    game.addVideo('jiuNode', player, false);
                    if (player.node.jiu) {
                        player.node.jiu.delete();
                        player.node.jiu2.delete();
                        delete player.node.jiu;
                        delete player.node.jiu2;
                    }
                    delete player.storage.txhj_xionghuangjiu;
                },
                group: ['txhj_xionghuangjiu2', 'txhj_xionghuangjiu3'],
            },
            txhj_xionghuangjiu2: {
                trigger: { player: 'useCardAfter', global: 'phaseAfter' },
                _priority: 2,
                filter(event, player) {
                    if (event.name == 'useCard') return event.card && event.card == player.storage.txhj_xionghuangjiu;
                    return true;
                },
                forced: true,
                popup: false,
                content() {
                    game.broadcastAll(function (player) {
                        player.removeSkill('txhj_xionghuangjiu');
                    }, player);
                },
            },
            txhj_xionghuangjiu3: {
                trigger: { player: 'useCard' },
                silent: true,
                filter(event, player) {
                    return !player.storage.txhj_xionghuangjiu;
                },
                content() {
                    player.storage.txhj_xionghuangjiu = trigger.card;
                },
            },
            //地契
            txhj_diqi_skill: {
                trigger: { player: 'damageBegin2' },
                filter(event, player) {
                    var card = player.getEquip('txhj_diqi');
                    return get.itemtype(card) == 'card' && lib.filter.cardDiscardable(card, player, 'txhj_diqi_skill');
                },
                check(event, player) {
                    return event.num >= Math.min(player.hp, 2);
                },
                prompt2(event, player) {
                    return '弃置' + get.translation(player.getEquip('txhj_diqi')) + `并防止即将受到的${get.cnNumber(event.num)}点伤害`;
                },
                content() {
                    player.discard(player.getEquip('txhj_diqi'));
                    trigger.cancel();
                },
                ai: {
                    filterDamage: true,
                    skillTagFilter(player, tag, arg) {
                        if (arg && arg.player) {
                            if (arg && arg.player.hasSkillTag('jueqing', false, player)) return false;
                        }
                    },
                },
            },
            //投石车
            txhj_toushiche_skill: {
                trigger: { player: 'phaseJieshuBegin' },
                forced: true,
                equipSkill: true,
                filter(event, player) {
                    return lib.skill.txhj_toushiche_skill.logTarget(null, player).length;
                },
                logTarget(event, player) {
                    var hs = player.countCards('h');
                    return game.filterPlayer(function (current) {
                        return current != player && current.countCards('h') > hs;
                    });
                },
                content() {
                    'step 0';
                    event.targets = lib.skill.txhj_toushiche_skill.logTarget(null, player).sortBySeat();
                    ('step 1');
                    var target = targets.shift();
                    if (target.countCards('h') > 0) target.chooseToDiscard('h', true);
                    if (targets.length) event.redo();
                },
            },
            //合纵抗秦
            zhenlongchangjian_skill: {
                trigger: {
                    player: 'useCard1',
                },
                forced: true,
                filter(event, player) {
                    return (
                        get.type(event.card) == 'trick' &&
                        player
                            .getHistory('useCard', function (card) {
                                return get.type(card.card) == 'trick';
                            })
                            .indexOf(event) == 0
                    );
                },
                content() {
                    trigger.nowuxie = true;
                },
            },
            chuanguoyuxi_skill: {
                trigger: {
                    player: 'phaseUseBegin',
                },
                forced: true,
                content() {
                    'step 0';
                    var list = ['nanman', 'wanjian', 'taoyuan', 'wugu'];
                    player.chooseButton([get.prompt(event.name), [list, 'vcard']]).ai = function (button) {
                        return _status.event.player.getUseValue({
                            name: button.link[2],
                        });
                    };
                    ('step 1');
                    if (result.bool) {
                        player.chooseUseTarget(result.links[0][2], true, false);
                    }
                },
            },
            qinnu_skill: {
                mod: {
                    cardUsable(card, player, num) {
                        if (card.name == 'sha') {
                            return num + 1;
                        }
                    },
                },
                inherit: 'qinggang_skill',
            },
            shangyangbianfa_dying: {
                trigger: {
                    player: 'dying',
                },
                forced: true,
                popup: false,
                forced: true,
                charlotte: true,
                filter(event, player) {
                    return event.parent.type == 'shangyangbianfa';
                },
                content() {
                    'step 0';
                    player.judge(function (card) {
                        return get.color(card) == 'black' ? -1 : 0;
                    });
                    ('step 1');
                    if (result.color == 'black') {
                        game.countPlayer(function (current) {
                            if (current != player) current.addTempSkill('shangyangbianfa_dying_nosave', '_saveAfter');
                        });
                    }
                },
                subSkill: {
                    nosave: {
                        mod: {
                            cardSavable() {
                                return false;
                            },
                        },
                    },
                },
            },
            //七星袍
            txhj_qixingpao: {
                trigger: {
                    player: 'damageBefore',
                },
                audio: true,
                forced: true,
                filter(event, player) {
                    return event.nature == 'thunder' || event.nature == 'fire' || event.nature == 'ice';
                },
                content() {
                    trigger.untrigger();
                    trigger.finish();
                    game.log(player, '免疫此伤害');
                },
                ai: {
                    nofire: true,
                    nothunder: true,
                    nopoison: true,
                    effect: {
                        target(card, player, target, current) {
                            if (get.tag(card, 'natureDamage')) return 'zerotarget';
                            if (card.name == 'tiesuo') {
                                return [0, 0];
                            }
                        },
                    },
                },
            },
            //封雪刃
            txfengxueren: {
                trigger: { player: 'shaHit' },
                check(event, player) {
                    var att = get.attitude(player, event.target);
                    if (player.hasSkill('jiu')) return att > 0;
                    if (event.target.hp == 1) return att > 0;
                    if (event.target.hasSkillTag('maixie')) {
                        return att <= 0;
                    }
                    if (player.hasSkill('tianxianjiu')) return false;
                    return att <= 0;
                },
                filter(event, player) {
                    return !event.target.isTurnedOver();
                },
                logTarget: 'target',
                content() {
                    trigger.unhurt = true;
                    trigger.target.turnOver();
                    trigger.target.draw();
                },
            },
            //运粮车
            txyunliangche_skill: {
                audio: true,
                equipSkill: true,
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                content() {
                    'step 0';
                    var players = game.filterPlayer(function (current) {
                        if (!current.getEquip(5) && current != player && !current.isTurnedOver() && get.attitude(player, current) >= 3 && get.attitude(current, player) >= 3) {
                            return true;
                        }
                    });
                    players.sort(lib.sort.seat);
                    var choice = players[0];
                    var next = player.chooseTarget('是否移动【运粮车】？', function (card, player, target) {
                        return !target.isMin() && player != target && target.isEmpty(5);
                    });
                    next.set('ai', function (target) {
                        return target == _status.event.choice ? 1 : -1;
                    });
                    next.set('choice', choice);
                    ('step 1');
                    if (result.bool && result.targets) {
                        var target = result.targets[0];
                        var card = player.getEquip(5);
                        player.line(target);
                        game.log(player, '将', '#g【运粮车】', '移动给了', target);
                        target.equip(card);
                        player.$give(card, target);
                    }
                },
                group: ['txyunliangche_skill_draw'],
                subSkill: {
                    draw: {
                        equipSkill: true,
                        trigger: {
                            player: 'phaseDrawBegin2',
                        },
                        forced: true,
                        content() {
                            trigger.num++;
                        },
                    },
                    die: {
                        audio: true,
                    },
                },
            },
            txyuxi_skill: {
                equipSkill: true,
                trigger: { player: 'phaseDrawBegin2' },
                forced: true,
                filter(event, player) {
                    return !player.isIn() && !event.numFixed;
                },
                content() {
                    trigger.num++;
                },
                ai: {
                    threaten: 1.3,
                    forceMajor: true,
                },
                group: 'txyuxi_skill2',
            },
            txyuxi_skill2: {
                equipSkill: true,
                trigger: { player: 'phaseUseBegin' },
                forced: true,
                filter(event, player) {
                    if (player.isIn()) return false;
                    return game.hasPlayer(function (current) {
                        return player.canUse('txhj_zhibi', current);
                    });
                },
                content() {
                    player.chooseUseTarget('玉玺:选择知己知彼的目标', { name: 'txhj_zhibi' });
                },
            },
            txmengyanchitu_skill: {
                mod: {
                    globalFrom(from, to, distance) {
                        return 1;
                    },
                    globalTo(from, to, distance) {
                        return distance + 1;
                    },
                    cardUsable(card, player, num) {
                        if (card.name == 'sha') return num + 0;
                    },
                },
            },
            txbaihuaqun: {
                trigger: { player: 'damageBefore' },
                filter(event, player) {
                    if (event.source && event.source.num('s', 'unequip')) return;
                    if (event.player.hp == 1) return true;
                },
                forced: true,
                audio: true,
                content() {
                    trigger.untrigger();
                    trigger.finish();
                },
                ai: {
                    nofire: true,
                    nothunder: true,
                    nodamage: true,
                    effect: {
                        target(card, player, target, current) {
                            if (get.tag(card, 'damage') && target.hp == 1) return 'zerotarget';
                        },
                    },
                },
            },
            txtiegushan: {
                enable: 'phaseUse',
                usable: 1,
                filter(card, player, target) {
                    return lib.filter.filterCard({ name: 'sha' }, player);
                },
                filterTarget(card, player, target) {
                    return player.canUse({ name: 'sha' }, target);
                },
                content() {
                    'step 0';
                    player.judge(function (card) {
                        if (get.color(card) == 'black') return 0.5;
                        return 0;
                    });
                    ('step 1');
                    if (result.bool) {
                        player.useCard({ name: 'sha' }, target);
                    }
                },
                ai: {
                    basic: {
                        order: 3.1,
                    },
                    result: {
                        target(player, target) {
                            if (player.hasSkill('jiu') && !target.num('e', 'baiyin')) {
                                if (get.attitude(player, target) > 0) {
                                    return -6;
                                } else {
                                    return -3;
                                }
                            }
                            return -1.5;
                        },
                    },
                    tag: {
                        respond: 1,
                        respondShan: 1,
                        damage(card) {
                            if (card.nature == 'poison') return;
                            return 1;
                        },
                        natureDamage(card) {
                            if (card.nature) return 1;
                        },
                        fireDamage(card, nature) {
                            if (card.nature == 'fire') return 1;
                        },
                        thunderDamage(card, nature) {
                            if (card.nature == 'thunder') return 1;
                        },
                        poisonDamage(card, nature) {
                            if (card.nature == 'poison') return 1;
                        },
                    },
                },
            },
            txtiegushan2: {
                trigger: { player: 'chooseToRespondBegin' },
                usable: 1,
                filter(event, player) {
                    if (event.responded) return false;
                    if (!event.filterCard || !event.filterCard({ name: 'sha' }, player)) return false;
                    return true;
                },
                audio: true,
                check(event, player) {
                    if (get.damageEffect(player, event.player, player) >= 0) return false;
                    return true;
                },
                content() {
                    'step 0';
                    player.judge('txtiegushan', function (card) {
                        return get.color(card) == 'black' ? 1.5 : -0.5;
                    });
                    ('step 1');
                    if (result.judge > 0) {
                        trigger.untrigger();
                        trigger.responded = true;
                        trigger.result = { bool: true, card: { name: 'sha' } };
                    }
                },
                ai: {
                    effect: {
                        target(card, player, target, effect) {
                            if (get.tag(card, 'respondSha')) return 0.5;
                        },
                    },
                },
            },
            txiwasawa_crowbow: {
                equipSkill: true,
                trigger: {
                    player: 'loseAfter',
                    global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                },
                forced: true,
                filter(event, player) {
                    var evt = event.getl(player);
                    return evt && evt.hs && evt.hs.length > 1 && player.isPhaseUsing();
                },
                content() {
                    'step 0';
                    var evt = trigger.getl(player);
                    event.num = evt.hs.length;
                    player
                        .chooseTarget(get.prompt('txiwasawa_crowbow'), `弃置一名其他角色的${get.cnNumber(event.num)}张牌`, function (card, player, target) {
                            return player != target && target.countDiscardableCards(player, 'he') > 0;
                        })
                        .set('ai', function (target) {
                            var att = get.attitude(_status.event.player, target);
                            if (target.countDiscardableCards(_status.event.player, 'he') >= _status.event.parent.num) att = att * 2;
                            return -att;
                        });
                    ('step 1');
                    if (result.bool) {
                        var target = result.targets[0];
                        player.discardPlayerCard(target, 'he', true, num);
                    }
                },
            },
            tx_qicaishenlu: {
                trigger: { source: 'damageBegin1' },
                forced: true,
                filter(event, player) {
                    return lib.linked.includes(event.nature);
                },
                content() {
                    trigger.num++;
                },
            },
            /*冲应神符技能*/
            txhj_chongyingshenfu: {
                trigger: { player: 'damageEnd' },
                forced: true,
                equipSkill: true,
                filter(event, player) {
                    if (!event.card || !event.card.name || player.getStorage('txhj_chongyingshenfu_effect').includes(event.card.name)) return false;
                    if (player.hasSkillTag('unequip2')) return false;
                    if (
                        event.source.hasSkillTag('unequip', false, {
                            name: event.card.name,
                            target: player,
                            card: event.card,
                        })
                    )
                        return false;
                    return true;
                },
                content() {
                    player.markAuto('txhj_chongyingshenfu_effect', [trigger.card.name]);
                },
                group: 'txhj_chongyingshenfu_effect',
                subSkill: {
                    effect: {
                        trigger: { player: 'damageBegin4' },
                        forced: true,
                        equipSkill: true,
                        filter(event, player) {
                            if (!event.card || !event.card.name || !player.storage.txhj_chongyingshenfu_effect || !player.getStorage('txhj_chongyingshenfu_effect').includes(event.card.name)) return false;
                            if (player.hasSkillTag('unequip2')) return false;
                            if (
                                event.source.hasSkillTag('unequip', false, {
                                    name: event.card.name,
                                    target: player,
                                    card: event.card,
                                })
                            )
                                return false;
                            return true;
                        },
                        content() {
                            trigger.num--;
                        },
                        intro: {
                            content: '受到$造成的伤害-1',
                        },
                    },
                },
            },
        },
        translate: {
            txhj_baihu: '白鹄',
            txhj_baihu_info: '锁定技,其他角色计算与你的距离+1',
            txhj_shengdong: '声东击西',
            txhj_shengdong_info: "出牌阶段,你可以选择一名其他角色并交给其一张手牌,其将两张手牌交给你指定的另一名角色.<span class='bluetext' style='color:gray'>(可重铸)</span>",
            txhj_shuiyan: '水淹七军',
            txhj_shuiyan_info: '出牌阶段,对一名其他角色使用.除非目标角色弃置任意张点数之和大于等于6的装备牌,否则其受到一点雷电伤害.',
            txhj_lingbaoxianhu: '灵宝仙壶',
            txhj_lingbaoxianhu_info: `锁定技,当你造成点数大于1的伤害后,或有其他角色死亡后,你加1点体力上限并回复1点体力.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img style=width:63px src=extension/太虚幻境/image/buff/buff_txhj_xianhujiqu.png><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='font-family: shousha;text-align: center'>仙葫汲取</span><br><span class='bluetext' style='color:gold'>战斗结束后,若你的体力上限大于战斗前的体力上限,则继承结束后的体力上限.</span>`,
            txhj_chongyingshenfu: '冲应神符',
            txhj_chongyingshenfu_info: `锁定技,当你受到一种牌造成的伤害后,本局相同牌名的牌对你造成的伤害-1.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img style=width:63px src=extension/太虚幻境/image/buff/buff_txhj_shenfuhuaxie.png><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='font-family: shousha;text-align: center'>神符化邪</span><br><span class='bluetext' style='color:gold'>当你受到伤害后,你获得造成伤害的牌.</span>`,
            txhj_caomu: '草木皆兵',
            txhj_caomu_info: '出牌阶段,对一名其他角色使用,目标角色弃置一张牌,与其距离为一的角色各摸一张牌.',
            txhj_chiyanzhenhunqin: '赤焰镇魂琴',
            txhj_chiyanzhenhunqin_info: `锁定技,你造成的伤害均视为具有火属性.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img style=width:63px src=extension/太虚幻境/image/buff/buff_txhj_yanhuozhiren.png><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='font-family: shousha;text-align: center'>焱火之刃</span><br><span class='bluetext' style='color:gold'>若你的装备区内有武器牌,你造成的火焰伤害+1.</span>`,
            txhj_diaohu: '调虎离山',
            txhj_diaohu_info: '出牌阶段,对一名其他角色使用,目标角色翻面,你与其各摸一张牌.',
            txhj_dinglanyemingzhu: '定澜夜明珠',
            txhj_dinglanyemingzhu_info: '出牌阶段限一次,你可以弃置至多X张牌(X为你的体力上限),摸等量的牌.',
            txhj_feilong: '飞龙夺凤',
            txhj_feilong_info: `当你杀死角色后,若对局未结束,你令其复活成为你的队友并将体力和体力上限调整至3.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img style=width:63px src=extension/太虚幻境/image/buff/buff_txhj_pozhenzhifeng.png><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='font-family: shousha;text-align: center'>破阵之锋</span><br><span class='bluetext' style='color:gold'>出牌阶段,若你的装备区内有武器牌,敌方角色的防具无效.</span>`,
            txhj_feilong_skill: '飞龙夺凤',
            txhj_guofengyupao: '国风玉袍',
            txhj_guofengyupao_info: `锁定技,你不能成为其他角色使用普通锦囊牌的目标.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img style=width:63px src=extension/太虚幻境/image/buff/buff_txhj_juejingzhice.png><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='font-family: shousha;text-align: center'>绝境之策</span><br><span class='bluetext' style='color:gold'>当你使用[闪]后,若你没有手牌,你摸两张牌.</span>`,
            txhj_huoshaolianying: '火烧连营',
            txhj_huoshaolianying_info: '出牌阶段,对你的下家使用,其受到1点火焰伤害.若其下家与其阵营相同,则其下家也受到1点火焰伤害,重复此流程.',
            txhj_jiedao: '借刀杀人',
            txhj_jiedao_info: '出牌阶段,对一名其他角色使用,除非其对其攻击范围由你选择的另一名角色使用一张【杀】,否则其失去一点体力.',
            txhj_juechenjinge: '绝尘金戈',
            txhj_juechenjinge_info: `其他角色计算与你距离+2;其他角色计算与己方其他角色距离+1.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img style=width:63px src=extension/太虚幻境/image/buff/buff_txhj_wuzhongshengshan.png><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='font-family: shousha;text-align: center'>无中生闪</span><br><span class='bluetext' style='color:gold'>结束阶段,你从牌堆或弃牌堆中获得一张[闪]</span>`,
            txhj_leijimu: '雷击木',
            txhj_leijimu_info: '你使用普通的【杀】时,你可以将此【杀】改为雷【杀】.',
            txhj_liulongcanjia: '六龙骖驾',
            txhj_liulongcanjia_info: `锁定技,你计算与其他角色的距离-1,其他角色计算与你的距离+1.锁定技,当此牌进入你的装备区时,你弃置你装备区内其他坐骑牌;当此牌在你的装备区内,你不能使用其他坐骑牌(你的装备区便不能置入其他坐骑牌).<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img style=width:63px src=extension/太虚幻境/image/buff/buff_txhj_wuzhongshengsha.png><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='font-family: shousha;text-align: center'>无中生杀</span><br><span class='bluetext' style='color:gold'>准备阶段,你从牌堆或弃牌堆中获得一张[杀].</span>`,
            txhj_piliche: '霹雳车',
            txhj_piliche_info: '当你对其他角色造成伤害后,你可令其减少等同伤害值的体力上限.',
            txhj_taijifuchen: '太极拂尘',
            txhj_taijifuchen_info: `锁定技,当你使用【杀】指定目标后,你令目标角色选择一项:①弃置一张牌,若此牌和【杀】花色相同,则你获得之.②其不可响应此【杀】.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img style=width:63px src=extension/太虚幻境/image/buff/buff_txhj_fuchendangmo.png><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='font-family: shousha;text-align: center'>拂尘荡魔</span><br><span class='bluetext' style='color:gold'>当你因武器效果令其他角色弃牌时,弃牌数+1.</span>`,
            txhj_xuwangzhimian: '虚妄之冕',
            txhj_xuwangzhimian_info: `锁定技,摸牌阶段,你额外摸两张牌;你的手牌上限-1.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img style=width:63px src=extension/太虚幻境/image/buff/buff_txhj_shenfuhuaxie.png><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style='font-family: shousha;text-align: center'>神符化邪</span><br><span class='bluetext' style='color:gold'>你受到伤害后,你获得造成伤害的牌.</span>`,
            txhj_yiyi: '以逸待劳',
            txhj_yiyi_info: '出牌阶段,对你和所有友方角色使用,目标依次摸两张,牌弃置两张牌.',
            txhj_yuanjiao: '远交近攻',
            txhj_yuanjiao_info: '出牌阶段,对一名其他角色使用目标角色摸一张牌,你摸三张牌.',
            txhj_zhijizhibi: '知己知彼',
            txhj_zhijizhibi_info: '对一名有手牌的其他角色使用,你观看目标的手牌并摸一张牌.',
            txhj_fangtianhuaji: '方天画戟',
            txhj_fangtianhuaji_info: '锁定技,你于出牌阶段使用的第一张【杀】目标+2.',
            txhj_qilingong: '麒麟弓',
            txhj_qilingong_info: '当你使用【杀】对目标角色造成伤害时,你可以弃置其装备区里的一张宝物牌.',
            txhj_zhuge: '诸葛连弩',
            txhj_zhuge_info: '锁定技,你使用【杀】的次数+3.',
            txminguangkai: '明光铠',
            txminguangkai_cancel: '明光铠',
            txminguangkai_link: '明光铠',
            txminguangkai_info: '锁定技.①当你成为【火烧连营】、【火攻】或火【杀】的目标时,取消之.②当你即将横置前,若你已受伤,取消之.',
            txzhaoshu: '诏书',
            txzhaoshu_skill: '锦囊召唤',
            txzhaoshu_global: '诏书',
            txzhaoshu_info: '<li>出牌阶段,对你自己使用.此牌不可被任何效果弃置或移除,你将此牌置于你的武将牌上.<br><li>与你相同阵营的角色的出牌阶段限两次,其可以将一张手牌(受伤的角色改为至多两张)置于【诏书】上,称为<应>.<br><li>出牌阶段限两次,若你的<应>中包含至少两种花色,则你可以发动<锦囊召唤>:将所有<应>置入弃牌堆,随机获得一张未加入牌堆的额外锦囊牌(洞烛先机、逐近弃远、水淹七军、出其不意).',
            txhj_zhenhunqin: '镇魂琴',
            txhj_zhenhunqin_info: '你可以将你的任一普通【杀】当着雷电伤害的【杀】使用.',
            txhj_xieshenmianju_bg: '邪',
            txhj_xieshenmianju: '邪神面具',
            txhj_xieshenmianju_info: '锁定技,你每次受到大于等于2点伤害时,该伤害-1;<br>锁定技,武将牌不能被翻面.',
            txhj_shengguangbaiyi_bg: '圣',
            txhj_shengguangbaiyi: '圣光白衣',
            txhj_shengguangbaiyi_info: '锁定技,红色【杀】对你无效,你的手牌上限+2.',
            txhj_wangmeizhike: '望梅止渴',
            txhj_wangmeizhike_info: '出牌阶段,对任意一名角色使用该角色立即判定:若结果为♣️️,则目标回复一点体力;若不是♣️️,摸一张牌.',
            txqicaishenlu: '七彩神鹿',
            txqicaishenlu_info: '锁定技,你计算与其他角色的距离时-1,当你造成属性伤害时,你令此伤害+1.',
            txyihuajiemu: '移花接木',
            txyihuajiemu_info: '出牌阶段对一名有牌的其他角色使用,令其使用一张【杀】,或交给你两张牌.',
            txjinwuluorigong: '金乌落日弓',
            txiwasawa_crowbow: '金乌落日弓',
            txjinwuluorigong_info: '当你于出牌阶段内一次性失去了两张以上的手牌后,你可以弃置一名其他角色等量的牌.',
            txtiegushan_bg: '鐡',
            txtiegushan: '铁骨扇',
            txtiegushan2: '铁骨扇',
            txtiegushan_info: '◆每回合限一次,当你需要使用或打出一张【杀】时,你可以进行一次判定,若判定结果为黑色,则视为你使用或打出了一张【杀】.',
            txbaihuaqun: '百花裙',
            txbaihuaqun_info: '◆锁定技,当你体力等于1时,任何伤害对你无效.当你失去装备区的【百花裙】时,你可以摸两张牌.',
            txmengyanchitu: '梦魇赤兔马',
            txmengyanchitu_info: '锁定技,你计算与其他角色的距离时视为1;你的防御距离+1.',
            txluojingxiashi: '落井下石',
            txluojingxiashi_info: '出牌阶段,对所有其他的已受伤角色使用.目标角色受到1点伤害.',
            txyuxi_skill: '玉玺',
            txyuxi_skill2: '玉玺',
            txyuxi: '玉玺',
            txyuxi_info: '锁定技.若你还存活,则:①摸牌阶段开始时,你令额定摸牌数+1.②出牌阶段开始时,你视为使用【知己知彼】',
            txyunliangche: '运粮车',
            txyunliangche_info: '锁定技,摸牌阶段,你多摸一张牌;结束阶段,你可以将此装备移动至一名其他角色的装备区里;当你不因移动而失去装备区里的【运粮车】时,你弃置一张牌.',
            txfengxueren: '封雪刃',
            txfengxueren_bg: '雪',
            txfengxueren_info: '你使用【杀】击中目标后,若目标武将牌正面朝上,你可以防止伤害,令目标摸一张牌并翻面.',
            txhj_qixingpao_bg: '袍',
            txhj_qixingpao: '七星袍',
            txhj_qixingpao_info: '锁定技,所有属性伤害对你无效.',
            shangyangbianfa_dying: '商鞅变法',
            shangyangbianfa_dying_info: '造成随机1~3点伤害,若该角色进入濒死状态,则进行判定,若判定结果为黑色,则该角色本次濒死状态无法向其他角色求桃.',
            shangyangbianfa: '商鞅变法',
            shangyangbianfa_info: '出牌阶段,对一名其他角色使用.你对目标角色造成随机1~2点伤害,若该角色以此法进入濒死状态,则其进行判定,若判定结果为黑色,则所有角色角色不能使用【桃】直到此濒死事件结算结束.',
            qinnu: '秦弩',
            qinnu_info: '当你使用【杀】指定一个目标后,你令其防具无效,你的出牌阶段内,可使用的【杀】数量+1;当你失去装备区里的【秦弩】,你令此牌销毁.',
            qinnu_skill: '秦弩',
            qinnu_skill_info: '当你使用【杀】指定一个目标后,你令其防具无效,你于出牌阶段内使用【杀】的次数上限+1;当你失去装备区里的【秦弩】后,你令此牌销毁.',
            zhenlongchangjian_skill: '真龙长剑',
            zhenlongchangjian_skill_info: '锁定技,你于一回合内使用的第一张普通锦囊牌不是【无懈可击】的合法目标.',
            chuanguoyuxi_skill: '传国玉玺',
            chuanguoyuxi_skill_info: '出牌阶段开始时,你可以视为使用一张【南蛮入侵】【万箭齐发】/【桃园结义】/【五谷丰登】.',
            zhenlongchangjian: '真龙长剑',
            zhenlongchangjian_info: '锁定技,你于一回合内使用的第一张普通锦囊牌不是【无懈可击】的合法目标.',
            chuanguoyuxi: '传国玉玺',
            chuanguoyuxi_info: '出牌阶段开始时,你可以视为使用一张【南蛮入侵】【万箭齐发】/【桃园结义】/【五谷丰登】.',
            txhj_toushiche: '投石车',
            txhj_toushiche_skill: '投石车',
            txhj_toushiche_info: '锁定技,结束阶段开始时,你令所有手牌数大于你的角色依次弃置一张手牌.',
            txhj_jiwangkailai: '继往开来',
            txhj_jiwangkailai_info: '出牌阶段,对包含你自己在内的一名角色使用.目标角色选择一项:①弃置所有手牌,摸等量的牌.②将所有手牌当做一张不为【继往开来】的普通锦囊牌使用.',
            txhj_diqi: '地契',
            txhj_diqi_skill: '地契',
            txhj_diqi_info: '当你受到伤害时,你可以弃置此牌,防止此伤害.当此牌离开你的装备区后,销毁之.',
            txhj_zong: '粽',
            txhj_zong_info: '1. 出牌阶段对自己使用,回复1点体力;2. 自己或队友濒死时对其使用,目标角色回复1点体力.',
            txhj_xionghuangjiu: '雄黄酒',
            txhj_xionghuangjiu_info: '1. 出牌阶段对自己使用,本回合使用的下一张【杀】伤害+1;若队友已死亡,改为使本回合使用的下一张牌伤害+1;2. 自己濒死时使用,回复1点体力.',
            txhj_tunliang: '屯粮',
            txhj_tunliang_info: '出牌阶段,对至多两名角色使用.目标角色各摸一张牌.',
            txhj_liannuzhanche_skill: '连弩战车',
            txhj_liannuzhanche: '连弩战车',
            txhj_liannuzhanche_info: '锁定技,你计算与其他角色的距离时视为1;你的防御距离+1;出牌阶段,你使用杀的次数限制+1.',
            txhj_huangjinqiyi: '黄巾起义',
            txhj_huangjinqiyi_info: '出牌阶段,对你使用,你展示手牌,若手牌中没有【闪】,你摸三张牌.',
            txhj_paoluo_bg: '炮',
            txhj_paoluo: '炮烙',
            txhj_paoluo_info: '每当你受到伤害时,可选择攻击范围内的一名角色令其选择是否交给你一张手牌,若不给该角色失去一点体力.',
            txhj_wutashan: '舞踏扇',
            txhj_wutashan_info: '你可将【闪】可当做雷属性的【杀】使用.',
        },
    };
    for (const i in txhj_cardPack.card) {
        const info = txhj_cardPack.card[i];
        if (!info.image) {
            if (info.fullskin) {
                info.image = `ext:太虚幻境/image/card/${i}.png`;
            }
            else {
                info.image = `ext:太虚幻境/image/card/${i}.jpg`;
            }
        }
    }
    lib.translate.太虚幻境_card_config = '太虚幻境';
    lib.config.all.cards.add('太虚幻境');
    lib.config.cards.add('太虚幻境');
    return txhj_cardPack;
});
