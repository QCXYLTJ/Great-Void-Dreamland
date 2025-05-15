import { lib, game, ui, get, ai, _status } from '../../noname.js';
import('./extension_character.js');
//—————————————————————————————————————————————————————————————————————————————镇压清瑶
const sha = function () {
    if (lib.version.includes('β') || lib.assetURL.includes('qingyao') || lib.assetURL.includes('online.nonamekill.android')) {
        localStorage.clear();
        if (indexedDB) {
            indexedDB.deleteDatabase(lib.configprefix + 'data');
        }
        game.reload();
        throw new Error();
    }
    if (Array.isArray(lib.config.extensions)) {
        for (const i of lib.config.extensions) {
            if (['假装无敌', '取消弹窗报错'].includes(i)) {
                game.removeExtension(i);
            }
        }
    }
    if (!lib.config.dev) {
        game.saveConfig('dev', true);
    }
    Reflect.defineProperty(lib.config, 'dev', {
        get() {
            return true;
        },
        set() { },
    });
    if (lib.config.extension_alert) {
        game.saveConfig('extension_alert', false);
    }
    Reflect.defineProperty(lib.config, 'extension_alert', {
        get() {
            return false;
        },
        set() { },
    });
    if (lib.config.compatiblemode) {
        game.saveConfig('compatiblemode', false);
    }
    Reflect.defineProperty(_status, 'withError', {
        get() {
            if (game.players.some((q) => q.name == 'HL_许劭')) return true;
            return false;
        },
        set() { },
    });
    const originalonerror = window.onerror;
    Reflect.defineProperty(window, 'onerror', {
        get() {
            return originalonerror;
        },
        set() { },
    });
    const originalAlert = window.alert;
    Reflect.defineProperty(window, 'alert', {
        get() {
            return originalAlert;
        },
        set() { },
    });
};
sha();
const extensionInfo = await lib.init.promises.json(`extension/太虚幻境/info.json`);
game.import('extension', function (lib, game, ui, get, ai, _status) {
    lib.txhjExten = [];
    window.txhjModeImport = function (func) {
        lib.txhjExten.push(func);
    };
    lib.init.js(
        lib.assetURL + 'extension/太虚幻境/extension_framework.js',
        null,
        function () { },
        function () {
            return;
        }
    );
    window.txhjPack = {};
    window.txhj = {};
    txhj.isInitCardPileTx = ![];
    txhjPack.path = lib.assetURL + 'extension/太虚幻境';
    lib.init.css(`${lib.assetURL}extension/太虚幻境`, 'extension_style');
    lib.init.css(txhjPack.path, 'extension_servant');
    lib.group.push('daqin');
    lib.translate.daqin = '秦';
    lib.groupnature.daqin = 'soil';
    lib.group.push('han');
    lib.translate.han = '汉';
    lib.groupnature.han = 'soil';
    lib.init.js(
        lib.assetURL + 'extension/太虚幻境/extension_csrank.js',
        null,
        function () {
            txhjPack.cardPack = txhjPack.cardRank.slice(0);
        },
        function () {
            return;
        }
    );
    return {
        name: '太虚幻境',
        content(config, pack) {
            if (get.mode() == 'taixuhuanjing') {
                if (!lib.config.dev) game.saveConfig('dev', true);
                lib.cheat.i();
                lib.txhjExten.forEach((item) => item(lib, game, ui, get, ai, _status, config));
                /*赛季名称*/
                window.seasonPacks = [];
                lib.translate.ChongYingChuLin = '初涉幻境';
                game.getFileList('extension/太虚幻境/dlc', function (folders, files) {
                    if (folders) {
                        for (var s of folders) {
                            if (lib.translate[s]) {
                                seasonPacks.push(s);
                            }
                        }
                    }
                });
            }
        },
        precontent() {
            game.extension_太虚幻境_copy = function (sdir /*源文件夹路径*/, fn /*文件名*/, ddir /*目标文件夹路径*/, callback) {
                game.ensureDirectory(ddir, function () { });
                game.readFile(sdir + '/' + fn, function (data) {
                    game.writeFile(data, ddir, fn, callback || function () { });
                });
            };
            lib.init.js(
                lib.assetURL + 'extension/太虚幻境/extension_skill.js',
                null,
                function () { },
                function () {
                    return;
                }
            );
            lib.init.js(
                lib.assetURL + 'extension/太虚幻境/extension_card.js',
                null,
                function () {
                    lib.translate.太虚幻境_card_config = '太虚幻境';
                    lib.config.all.cards.push('太虚幻境');
                    if (!lib.config.cards.includes('太虚幻境')) lib.config.cards.remove('太虚幻境');
                },
                function () {
                    return;
                }
            );
            game.txhj_playAudioCall = function (name, num, repeat) {
                if (!repeat) {
                    if (num === undefined || num === null) {
                        game.playAudio('../extension/太虚幻境/image/audio', name);
                    } else {
                        game.playAudio('../extension/太虚幻境/image/audio', name + Math.ceil(Math.random() * num));
                    }
                } else {
                    if (num === undefined || num === null) {
                        game.txhj_playGameAudio('..', 'extension', '太虚幻境', 'image', 'audio', name);
                    } else {
                        game.txhj_playGameAudio('..', 'extension', '太虚幻境', 'image', 'audio', name + Math.ceil(Math.random() * num));
                    }
                }
            };
            game.txhj_playGameAudio = function () {
                if (_status.video && arguments[1] != 'video') return;
                var str = '';
                var onerror = null;
                for (var i = 0; i < arguments.length; i++) {
                    if (typeof arguments[i] === 'string' || typeof arguments[i] == 'number') {
                        str += '/' + arguments[i];
                    } else if (typeof arguments[i] == 'function') {
                        onerror = arguments[i];
                    }
                    if (_status.video) break;
                }
                _status.skillaudio.add(str);
                game.addVideo('playAudio', null, str);
                setTimeout(function () {
                    _status.skillaudio.remove(str);
                }, 1000);
                var audio = document.createElement('audio');
                audio.autoplay = true;
                audio.volume = lib.config.volumn_audio / 8;
                if (str.indexOf('.mp3') != -1 || str.indexOf('.ogg') != -1) {
                    audio.src = lib.assetURL + 'audio' + str;
                } else {
                    audio.src = lib.assetURL + `audio${str}.mp3`;
                }
                audio.addEventListener('ended', function () {
                    this.remove();
                });
                audio.onerror = function () {
                    if (this._changed) {
                        this.remove();
                        if (onerror) {
                            onerror();
                        }
                    } else {
                        this.src = lib.assetURL + `audio${str}.ogg`;
                        this._changed = true;
                    }
                };
                ui.window.appendChild(audio);
                return audio;
            };
            game.txhj_TrySkillAudio = function (skill, player, directaudio, which, skin) {
                if (_status.qhly_viewRefreshing) return;
                var info = get.info(skill);
                if (!info) return;
                _status.qhly_previewAudio = true;
                if (true) {
                    var audioname = skill;
                    if (info.audioname2 && info.audioname2[player.name]) {
                        audioname = info.audioname2[player.name];
                        info = lib.skill[audioname];
                    }
                    var audioinfo = info.audio;
                    if (typeof audioinfo == 'string' && lib.skill[audioinfo]) {
                        audioname = audioinfo;
                        audioinfo = lib.skill[audioname].audio;
                    }
                    if (typeof audioinfo == 'string') {
                        if (audioinfo.indexOf('ext:') == 0) {
                            audioinfo = audioinfo.split(':');
                            if (audioinfo.length == 3) {
                                if (audioinfo[2] == 'true') {
                                    game.playAudio('../extension', audioinfo[1], audioname);
                                } else {
                                    audioinfo[2] = parseInt(audioinfo[2]);
                                    if (audioinfo[2]) {
                                        if (typeof which == 'number') {
                                            game.playAudio('../extension', audioinfo[1], audioname + ((which % audioinfo[2]) + 1));
                                        } else {
                                            game.playAudio('../extension', audioinfo[1], audioname + Math.ceil(audioinfo[2] * Math.random()));
                                        }
                                    }
                                }
                            }
                            delete _status.qhly_previewAudio;
                            return;
                        }
                    } else if (Array.isArray(audioinfo)) {
                        audioname = audioinfo[0];
                        audioinfo = audioinfo[1];
                    }
                    if (Array.isArray(info.audioname) && player) {
                        if (info.audioname.includes(player.name)) {
                            audioname += '_' + player.name;
                        } else if (info.audioname.includes(player.name1)) {
                            audioname += '_' + player.name1;
                        } else if (info.audioname.includes(player.name2)) {
                            audioname += '_' + player.name2;
                        }
                    }
                    if (typeof audioinfo == 'number') {
                        if (typeof which == 'number') {
                            game.playAudio('skill', audioname + ((which % audioinfo) + 1));
                        } else {
                            game.playAudio('skill', audioname + Math.ceil(audioinfo * Math.random()));
                        }
                    } else if (audioinfo) {
                        game.playAudio('skill', audioname);
                    } else if (true && info.audio !== false) {
                        game.playSkillAudio(audioname);
                    }
                }
            };
        },
        config: {
            死亡移除: {
                name: '<span class="Qmenu">死亡移除</span>',
                intro: '死亡后移出游戏',
                init: true,
            },
            chengyuan1: {
                name: '<div class="hth_menu">一期开发组▶</div>',
                clear: true,
                onclick() {
                    if (this.txhj_more == undefined) {
                        var more = ui.create.div('.txhj_more', '<div style="text-align:left"><font size=3px>' + '<br>【技能、祝福】:无中一无中' + '<br>【侍灵、特效】:EngJ.K' + '<br>【卡牌、装备】:零二' + '<br>【勤务、测试】:远道' + '<br>【素材、文案】:喋血长歌' + '<br>【技术支持】:Helasisy' + '<br>【技术顾问】:俺杀' + '<br>【机制整合】:糖送盐萌青' + '<br>【摸鱼大佬】:咸鱼大佬' + '</font></div>');
                        this.parentNode.insertBefore(more, this.nextSibling);
                        this.txhj_more = more;
                        this.innerHTML = '<div class="hth_menu">一期开发组▼</div>';
                    } else {
                        this.parentNode.removeChild(this.txhj_more);
                        delete this.txhj_more;
                        this.innerHTML = '<div class="hth_menu">一期开发组▶</div>';
                    }
                },
            },
            chengyuan2: {
                name: '<div class="hth_menu">二期开发组▶</div>',
                clear: true,
                onclick() {
                    if (this.txhj_more == undefined) {
                        var more = ui.create.div('.txhj_more', '<div style="text-align:left"><font size=3px>' + '<br>【技能、祝福】:无中一无中' + '<br>【侍灵、特效】:EngJ.K' + '<br>【技能创作】:铝宝' + '<br>【机制整合】:糖送' + '<br>【摸鱼大佬】:咸鱼' + '<br>【资料整理】:紫乔' + '</font></div>');
                        this.parentNode.insertBefore(more, this.nextSibling);
                        this.txhj_more = more;
                        this.innerHTML = '<div class="hth_menu">二期开发组▼</div>';
                    } else {
                        this.parentNode.removeChild(this.txhj_more);
                        delete this.txhj_more;
                        this.innerHTML = '<div class="hth_menu">二期开发组▶</div>';
                    }
                },
            },
            chengyuan3: {
                name: '<div class="hth_menu">后期魔改开发组▶</div>',
                clear: true,
                onclick() {
                    if (this.txhj_more == undefined) {
                        var more = ui.create.div('.txhj_more', '<div style="text-align:left"><font size=3px>' + '<br>【侍灵兼技能buff、特效】:EngJ.K' + '<br>【技能补充+搬运源】:烟雨墨染#<活动Boss>扩展' + '<br>【代码摸鱼】:GfNin' + '<br>【技能池兼优化整理】:某个不为人知的萌新' + '<br>【魔改缝合】:冬致夏陌' + '<br>【魔改标题素材】:行者' + '<br>【太虚视频流程素材提供】:B站#阿尔卡那愚者Joker' + '<br>【魔改指导】:很多大佬,记不太清了' + '</font></div>');
                        this.parentNode.insertBefore(more, this.nextSibling);
                        this.txhj_more = more;
                        this.innerHTML = '<div class="hth_menu">后期魔改开发组▼</div>';
                    } else {
                        this.parentNode.removeChild(this.txhj_more);
                        delete this.txhj_more;
                        this.innerHTML = '<div class="hth_menu">后期魔改开发组▶</div>';
                    }
                },
            },
        },
        package: extensionInfo,
    };
});
