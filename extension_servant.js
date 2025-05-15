game.import('侍灵', function (lib, game, ui, get, ai, _status) {
    window.Servant = /** @class */ (function () {
        function Servant(name, isPicture) {
            this.isPicture = isPicture;
            this.nickName = name;
            this.textName = servantData.servant[name].textName;
            this.setData();
            if (!isPicture) {
                this.initSLEvent();
            }
            lib.skill._slEnterGame = {
                trigger: {
                    global: ['gameStart'],
                },
                forced: true,
                filter(event, player) {
                    return player == game.me;
                },
                content() {
                    var buffs = Object.keys(servantData.skillDesc[txhj.servant.nickName]);
                    for (const buff of buffs) {
                        player.addSkill(buff);
                    }
                    txhj.servant.initZuodian();
                },
            };
        }
        Servant.prototype.getData = function () {
            if (!this.nickName || this.nickName == '') {
                return null;
            }
            return servantData.servant[this.nickName];
        };
        Servant.prototype.setData = function () {
            if (!this.nickName || this.nickName == '') {
                return;
            }
            var obj = this.getData();
            if (obj) {
                this.textName = obj.textName;
                if (this.isPicture) {
                    this.name = txhjPack.path + `/image/servant/picture/${this.nickName}.png`;
                } else {
                    this.name = '../../../太虚幻境/image/servant/' + obj.nickName;
                }
                this.height = obj.height;
                this.width = obj.width;
                this.angle = obj.angle;
                this.action = obj.action;
                this.opacity = obj.opacity;
                this.clipSlots = obj.clipSlots;
                this.hideSlots = obj.hideSlots;
                this.loop = obj.loop;
                this.grade = obj.grade;
                this.data = obj;
                this.actions = this.getAction();
            } else {
                alert(`Servant ${this.nickName} not found`);
            }
        };
        Servant.prototype.play = function () { };
        Servant.prototype.chooseingPlay = function (ele, reset) {
            if (this.isPicture) {
                ele.style.backgroundImage = `url(${this.name})`;
                ele.style.backgroundSize = 'contain';
                ele.style.backgroundRepeat = 'no-repeat';
                ele.style.backgroundPosition = 'center';
                return;
            }
            this.referNode = ele;
            txhj.isMobile = navigator.userAgent.match(/(Android|iPhone|SymbianOS|Windows Phone|iPad|iPod)/i);
            this.x = txhj.isMobile ? this.data.chooseServant.x : this.data.pc.chooseServant.x;
            this.y = txhj.isMobile ? this.data.chooseServant.y : this.data.pc.chooseServant.y;
            this.scale = txhj.isMobile ? this.data.chooseServant.scale : this.data.pc.chooseServant.scale;
            this.show();
        };
        Servant.prototype.consoledeskPlay = function (ele) {
            if (this.isPicture) {
                // ele.style.backgroundImage = `url(${txhjPack.path }/image/servant/picture/${this.nickName }.png)`;
                ele.style.backgroundImage = `url(${this.name})`;
                ele.style.backgroundSize = 'contain';
                ele.style.backgroundRepeat = 'no-repeat';
                ele.style.backgroundPosition = 'center';
                return;
            }
            this.x = this.data.consoledesk.x;
            this.y = this.data.consoledesk.y;
            this.scale = this.data.consoledesk.scale;
        };
        Servant.prototype.getAction = function () {
            var list = [];
            var data = servantData.action[this.nickName];
            delete data.jingzhi;
            delete data.zuodian;
            delete data.gongji;
            for (var key in data) {
                for (var i = 1; i <= data[key]; i++) {
                    list.push(key + i);
                }
            }
            var index = list.indexOf('daiji1');
            list.splice(index, 1);
            return list;
        };
        Servant.prototype.initSLEvent = function () {
            lib.skill._slDamage = {
                trigger: {
                    source: 'damageBegin',
                },
                forced: true,
                filter(event, player) {
                    if (typeof event.num != 'number') return false;
                    return player == game.me && event.num > 0;
                },
                content() {
                    game.playAudio('../extension/太虚幻境/audio/servant', txhj.servant.nickName + '.mp3');
                },
            }; //QQQ
        };
        Servant.prototype.initZuodian = function () {
            var handcard = document.getElementsByClassName('hand-wrap');
            if (!this.zuoDian) {
                var waitDiv = document.createElement('div');
                waitDiv.classList.add('taixuhuanjing_wait');
                var zdDiv = document.createElement('div');
                zdDiv.innerHTML = this.textName;
                zdDiv.classList.add('taixuhuanjing_zuodian');
                waitDiv.appendChild(zdDiv);
                this.zuoDian = waitDiv;
                document.body.appendChild(waitDiv);
                var shoushaUI = document.getElementsByClassName('lbtn-controls');
                function createBtn() {
                    var btn = document.createElement('div');
                    btn.classList.add('lbtn-control');
                    btn.style.backgroundImage = `url(${txhjPack.path}/image/servant/btn.png)`;
                    btn.style.backgroundRepeat = 'no-repeat';
                    btn.onclick = function () {
                        game.playAudio('../extension/太虚幻境/audio/clickBtn.mp3');
                        var wdiv = getComputedStyle(waitDiv).display;
                        if (wdiv == 'none') {
                            waitDiv.style.display = 'block';
                            if (handcard[0]) {
                                handcard[0].style.left = '245px';
                            } //QQQ
                            ui.updatehl();
                        } else {
                            waitDiv.style.display = 'none';
                            if (handcard[0]) {
                                handcard[0].style.left = '98px';
                            } //QQQ
                            ui.updatehl();
                        }
                    };
                    return btn;
                }
                if (shoushaUI.length) {
                    var oneEle = shoushaUI[0].firstChild;
                    shoushaUI[0].insertBefore(createBtn(), oneEle);
                } else {
                    var btn = createBtn();
                    btn.classList.add('onlyBtn');
                    document.body.appendChild(btn);
                }
            }
            if (handcard[0]) {
                handcard[0].style.left = '245px';
            } //QQQ
            ui.updatehl();
            if (this.isPicture && !this.zuoDian.picture) {
                var picture = new Image();
                picture.src = this.name;
                picture.classList.add('taixuhuanjing_matchPicture');
                this.zuoDian.picture = picture;
                this.zuoDian.appendChild(picture);
            }
        };
        return Servant;
    })();
    txhj.servantData = servantData = {
        servant: {
            lulu: {
                textName: '鲁鲁',
                nickName: 'lulu',
                action: 'daiji1',
                loop: true,
                gjsj: 1900,
                yc: 300,
                match: {
                    x: undefined,
                    y: [0, 0.24],
                    scale: 0.28,
                },
                chooseServant: {
                    x: undefined,
                    y: [0, 0.1],
                    scale: 0.6,
                },
                consoledesk: {
                    x: undefined,
                    y: [0, 0.07],
                    scale: 0.3,
                },
                pc: {
                    match: {
                        x: undefined,
                        y: [0, 0.18],
                        scale: 0.28,
                    },
                    chooseServant: {
                        x: undefined,
                        y: [0, 0.1],
                        scale: 0.7,
                    },
                    consoledesk: {
                        x: undefined,
                        y: [0, 0.05],
                        scale: 0.35,
                    },
                },
                grade: 2,
            },
            datong: {
                textName: '大桶',
                nickName: 'datong',
                match: {
                    x: undefined,
                    y: [0, 0.18],
                    scale: 0.3,
                },
                action: 'daiji1',
                loop: true,
                gjsj: 1890,
                chooseServant: {
                    x: undefined,
                    y: [0, 0.05],
                    scale: 0.65,
                },
                consoledesk: {
                    x: undefined,
                    y: [0, 0.01],
                    scale: 0.3,
                },
                pc: {
                    match: {
                        x: undefined,
                        y: [0, 0.15],
                        scale: 0.32,
                    },
                    chooseServant: {
                        x: undefined,
                        y: [0, 0.1],
                        scale: 0.7,
                    },
                    consoledesk: {
                        x: undefined,
                        y: [0, 0.02],
                        scale: 0.4,
                    },
                },
                grade: 0,
            },
            ale: {
                textName: '阿乐',
                nickName: 'ale',
                match: {
                    x: undefined,
                    y: [0, 0.21],
                    scale: 0.31,
                },
                action: 'daiji1',
                loop: true,
                gjsj: 1700,
                yc: 400,
                chooseServant: {
                    x: undefined,
                    y: [0, 0.1],
                    scale: 0.6,
                },
                consoledesk: {
                    x: undefined,
                    y: [0, 0.05],
                    scale: 0.31,
                },
                pc: {
                    match: {
                        x: undefined,
                        y: [0, 0.15],
                        scale: 0.32,
                    },
                    chooseServant: {
                        x: undefined,
                        y: [0, 0.1],
                        scale: 0.7,
                    },
                    consoledesk: {
                        x: undefined,
                        y: [0, 0.02],
                        scale: 0.35,
                    },
                },
                grade: 2,
            },
            rui: {
                textName: '瑞',
                nickName: 'rui',
                match: {
                    x: undefined,
                    y: [0, 0.18],
                    scale: 0.3,
                },
                action: 'daiji1',
                loop: true,
                py: {
                    zd: {
                        x: [0, 1.2],
                        y: [0, 0.01],
                    },
                },
                gjsj: 1100,
                yc: 500,
                chooseServant: {
                    x: [0, 0.5],
                    y: [0, 0.05],
                    scale: 0.6,
                },
                consoledesk: {
                    x: undefined,
                    y: 0,
                    scale: 0.3,
                },
                pc: {
                    match: {
                        x: undefined,
                        y: [0, 0.14],
                        scale: 0.32,
                    },
                    chooseServant: {
                        x: undefined,
                        y: [0, 0.1],
                        scale: 0.7,
                    },
                    consoledesk: {
                        x: undefined,
                        y: [0, 0.02],
                        scale: 0.35,
                    },
                },
                grade: 3,
            },
            yueer: {
                textName: '玥儿',
                nickName: 'yueer',
                match: {
                    x: undefined,
                    y: [0, 0.2],
                    scale: 0.25,
                },
                action: 'daiji1',
                loop: true,
                gjsj: 2300,
                yc: 500,
                chooseServant: {
                    x: undefined,
                    y: [0, 0.05],
                    scale: 0.6,
                },
                consoledesk: {
                    x: undefined,
                    y: [0, 0.02],
                    scale: 0.25,
                },
                pc: {
                    match: {
                        x: undefined,
                        y: [0, 0.15],
                        scale: 0.25,
                    },
                    chooseServant: {
                        x: undefined,
                        y: [0, 0.1],
                        scale: 0.7,
                    },
                    consoledesk: {
                        x: undefined,
                        y: [0, 0.02],
                        scale: 0.35,
                    },
                },
                grade: 2,
            },
            yan: {
                textName: '焱',
                nickName: 'yan',
                match: {
                    x: undefined,
                    y: [0, 0.25],
                    scale: 0.25,
                },
                action: 'daiji1',
                loop: true,
                gjsj: 1500,
                chooseServant: {
                    x: undefined,
                    y: [0, 0.05],
                    scale: 0.6,
                },
                consoledesk: {
                    x: undefined,
                    y: [0, 0.08],
                    scale: 0.25,
                },
                pc: {
                    match: {
                        x: undefined,
                        y: [0, 0.18],
                        scale: 0.25,
                    },
                    chooseServant: {
                        x: undefined,
                        y: [0, 0.1],
                        scale: 0.7,
                    },
                    consoledesk: {
                        x: undefined,
                        y: [0, 0.07],
                        scale: 0.3,
                    },
                },
                grade: 3,
            },
            ahao: {
                textName: '阿豪',
                nickName: 'ahao',
                match: {
                    x: undefined,
                    y: [0, 0.25],
                    scale: 0.3,
                },
                action: 'daiji1',
                loop: true,
                gjsj: 1600,
                chooseServant: {
                    x: undefined,
                    y: [0, 0.05],
                    scale: 0.6,
                },
                consoledesk: {
                    x: undefined,
                    y: [0, 0.1],
                    scale: 0.3,
                },
                pc: {
                    match: {
                        x: undefined,
                        y: [0, 0.18],
                        scale: 0.25,
                    },
                    chooseServant: {
                        x: undefined,
                        y: [0, 0.1],
                        scale: 0.7,
                    },
                    consoledesk: {
                        x: undefined,
                        y: [0, 0.07],
                        scale: 0.3,
                    },
                },
                grade: 3,
            },
            liuli: {
                textName: '琉璃',
                nickName: 'liuli',
                match: {
                    x: undefined,
                    y: [0, 0.65],
                    scale: 0.25,
                },
                action: 'daiji1',
                loop: true,
                py: {
                    gj: {
                        x: [0, 0.55],
                        y: [0, 0.5],
                    },
                },
                gjsj: 1900,
                yc: 400,
                chooseServant: {
                    x: undefined,
                    y: [0, 0.75],
                    scale: 0.6,
                },
                consoledesk: {
                    x: undefined,
                    y: [0, 0.55],
                    scale: 0.25,
                },
                pc: {
                    match: {
                        x: undefined,
                        y: [0, 0.5],
                        scale: 0.25,
                    },
                    chooseServant: {
                        x: undefined,
                        y: [0, 0.7],
                        scale: 0.7,
                    },
                    consoledesk: {
                        x: undefined,
                        y: [0, 0.52],
                        scale: 0.3,
                    },
                },
                grade: 2,
                special: true,
            },
            manman: {
                textName: '蠻蠻',
                nickName: 'manman',
                match: {
                    x: undefined,
                    y: [0, 0.18],
                    scale: 0.25,
                },
                action: 'daiji1',
                loop: true,
                gjsj: 1600,
                chooseServant: {
                    x: undefined,
                    y: 0,
                    scale: 0.6,
                },
                consoledesk: {
                    x: undefined,
                    y: 0,
                    scale: 0.25,
                },
                pc: {
                    match: {
                        x: undefined,
                        y: [0, 0.13],
                        scale: 0.25,
                    },
                    chooseServant: {
                        x: undefined,
                        y: [0, 0.1],
                        scale: 0.7,
                    },
                    consoledesk: {
                        x: undefined,
                        y: [0, 0.01],
                        scale: 0.35,
                    },
                },
                grade: 2,
            },
            xiaoxiao: {
                textName: '枭枭',
                nickName: 'xiaoxiao',
                match: {
                    x: undefined,
                    y: [0, 0.19],
                    scale: 0.5,
                },
                action: 'daiji1',
                loop: true,
                div: {
                    width: '141',
                    height: '136',
                    left: '110',
                },
                HD: {
                    x: [0, 0.5],
                    y: [0, 0.01],
                },
                gjsj: 1600,
                chooseServant: {
                    x: undefined,
                    y: [0, 0.05],
                    scale: 1.2,
                },
                consoledesk: {
                    x: [0, 0.55],
                    y: [0, 0.01],
                    scale: 0.5,
                },
                pc: {
                    match: {
                        x: undefined,
                        y: [0, 0.15],
                        scale: 0.6,
                    },
                    chooseServant: {
                        x: undefined,
                        y: [0, 0.1],
                        scale: 1.2,
                    },
                    consoledesk: {
                        x: undefined,
                        y: [0, 0.01],
                        scale: 0.6,
                    },
                },
                grade: 2,
            },
            xueren: {
                textName: '雪人',
                nickName: 'xueren',
                match: {
                    x: undefined,
                    y: [0, 0.18],
                    scale: 0.25,
                },
                action: 'daiji1',
                loop: true,
                gjsj: 1600,
                chooseServant: {
                    x: undefined,
                    y: [0, 0.05],
                    scale: 0.6,
                },
                consoledesk: {
                    x: undefined,
                    y: 0,
                    scale: 0.25,
                },
                pc: {
                    match: {
                        x: undefined,
                        y: [0, 0.13],
                        scale: 0.25,
                    },
                    chooseServant: {
                        x: undefined,
                        y: [0, 0.1],
                        scale: 0.7,
                    },
                    consoledesk: {
                        x: undefined,
                        y: [0, 0.01],
                        scale: 0.35,
                    },
                },
                grade: 0,
            },
            xuanwu: {
                textName: '玄武',
                nickName: 'xuanwu',
                match: {
                    x: undefined,
                    y: [0, 0.23],
                    scale: 0.25,
                },
                action: 'daiji1',
                loop: true,
                gjsj: 1600,
                chooseServant: {
                    x: undefined,
                    y: [0, 0.1],
                    scale: 0.65,
                },
                consoledesk: {
                    x: undefined,
                    y: [0, 0.05],
                    scale: 0.25,
                },
                pc: {
                    match: {
                        x: undefined,
                        y: [0, 0.17],
                        scale: 0.25,
                    },
                    chooseServant: {
                        x: undefined,
                        y: [0, 0.1],
                        scale: 0.7,
                    },
                    consoledesk: {
                        x: undefined,
                        y: [0, 0.05],
                        scale: 0.3,
                    },
                },
                grade: 3,
            },
            dundun: {
                textName: '阿猛',
                nickName: 'dundun',
                match: {
                    x: undefined,
                    y: [0, 0.23],
                    scale: 0.25,
                },
                action: 'daiji1',
                loop: true,
                gjsj: 1600,
                chooseServant: {
                    x: undefined,
                    y: [0, 0.1],
                    scale: 0.65,
                },
                consoledesk: {
                    x: undefined,
                    y: [0, 0.05],
                    scale: 0.25,
                },
                pc: {
                    match: {
                        x: undefined,
                        y: [0, 0.17],
                        scale: 0.25,
                    },
                    chooseServant: {
                        x: undefined,
                        y: [0, 0.1],
                        scale: 0.7,
                    },
                    consoledesk: {
                        x: undefined,
                        y: [0, 0.05],
                        scale: 0.3,
                    },
                },
                grade: 2,
            },
            jiuwei: {
                textName: '九尾',
                nickName: 'jiuwei',
                match: {
                    x: undefined,
                    y: [0, 0.23],
                    scale: 0.25,
                },
                action: 'daiji1',
                loop: true,
                gjsj: 1600,
                chooseServant: {
                    x: undefined,
                    y: [0, 0.1],
                    scale: 0.64,
                },
                consoledesk: {
                    x: undefined,
                    y: [0, 0.05],
                    scale: 0.25,
                },
                pc: {
                    match: {
                        x: undefined,
                        y: [0, 0.17],
                        scale: 0.25,
                    },
                    chooseServant: {
                        x: undefined,
                        y: [0, 0.1],
                        scale: 0.7,
                    },
                    consoledesk: {
                        x: undefined,
                        y: [0, 0.05],
                        scale: 0.3,
                    },
                },
                grade: 3,
            },
            chunzhihua: {
                textName: '春之花',
                nickName: 'chunzhihua',
                match: {
                    x: undefined,
                    y: [0, 0.21],
                    scale: 0.29,
                },
                action: 'daiji1',
                loop: true,
                gjsj: 1600,
                chooseServant: {
                    x: [0, 0.5],
                    y: [-20, 0.2],
                    scale: 0.45,
                },
                consoledesk: {
                    x: undefined,
                    y: [-15, 0.2],
                    scale: 0.3,
                },
                pc: {
                    match: {
                        x: undefined,
                        y: [0, 0.17],
                        scale: 0.25,
                    },
                    chooseServant: {
                        x: undefined,
                        y: [0, 0.1],
                        scale: 0.7,
                    },
                    consoledesk: {
                        x: undefined,
                        y: [0, 0.05],
                        scale: 0.25,
                    },
                },
                grade: 3,
            },
            //以下侍灵全部搬运自K佬的【EpicFX】扩展,再次感谢K佬的侍灵素材和技能代码提供!
            jinwu: {
                textName: '金乌',
                nickName: 'jinwu',
                match: {
                    x: undefined,
                    y: [35, 0.01],
                    scale: 0.08,
                },
                action: 'daiji1',
                loop: true,
                gjsj: 1600,
                chooseServant: {
                    x: undefined,
                    y: [-53, 0.01],
                    scale: 0.16,
                },
                consoledesk: {
                    x: undefined,
                    y: [-18, 0.01],
                    scale: 0.09,
                },
                pc: {
                    match: {
                        x: undefined,
                        y: [0, 0.17],
                        scale: 0.25,
                    },
                    chooseServant: {
                        x: undefined,
                        y: [0, 0.1],
                        scale: 0.7,
                    },
                    consoledesk: {
                        x: undefined,
                        y: [0, 0.05],
                        scale: 0.3,
                    },
                },
                grade: 3,
            },
            canglong: {
                textName: '苍龙',
                nickName: 'canglong',
                match: {
                    x: undefined,
                    y: [0, 0.62],
                    scale: 0.13,
                },
                action: 'daiji1',
                loop: true,
                gjsj: 1600,
                chooseServant: {
                    x: undefined,
                    y: [0, 0.56],
                    scale: 0.28,
                },
                consoledesk: {
                    x: undefined,
                    y: [0, 0.62],
                    scale: 0.14,
                },
                pc: {
                    match: {
                        x: undefined,
                        y: [0, 0.17],
                        scale: 0.25,
                    },
                    chooseServant: {
                        x: undefined,
                        y: [0, 0.1],
                        scale: 0.7,
                    },
                    consoledesk: {
                        x: undefined,
                        y: [0, 0.05],
                        scale: 0.3,
                    },
                },
                grade: 3,
            },
            kangkang: {
                textName: '康康',
                nickName: 'kangkang',
                action: 'daiji4',
                loop: true,
                gjsj: 1900,
                yc: 300,
                match: {
                    x: [0, 0.66],
                    y: [0, 0.68],
                    scale: 0.4,
                },
                chooseServant: {
                    x: [0, 0.56],
                    y: [0, 0.59],
                    scale: 0.65,
                },
                consoledesk: {
                    x: [0, 0.66],
                    y: [0, 0.6],
                    scale: 0.38,
                },
                pc: {
                    match: {
                        x: undefined,
                        y: [0, 0.18],
                        scale: 0.28,
                    },
                    chooseServant: {
                        x: undefined,
                        y: [0, 0.1],
                        scale: 0.7,
                    },
                    consoledesk: {
                        x: undefined,
                        y: [0, 0.05],
                        scale: 0.35,
                    },
                },
                grade: 2,
            },
            niuniu: {
                textName: '牛牛',
                nickName: 'niuniu',
                action: 'daiji1',
                loop: true,
                gjsj: 1900,
                yc: 300,
                match: {
                    x: [0, 0.54],
                    y: [0, 0.2],
                    scale: 0.37,
                    /*    x: [0,0.66],
                        y: [0,0.68],
                        scale: 0.40,*/
                },
                chooseServant: {
                    x: [0, 0.5],
                    y: [0, 0.07],
                    scale: 0.64,
                },
                consoledesk: {
                    x: [0, 0.54],
                    y: [0, 0.03],
                    scale: 0.36,
                },
                pc: {
                    match: {
                        x: undefined,
                        y: [0, 0.18],
                        scale: 0.28,
                    },
                    chooseServant: {
                        x: undefined,
                        y: [0, 0.1],
                        scale: 0.7,
                    },
                    consoledesk: {
                        x: undefined,
                        y: [0, 0.05],
                        scale: 0.35,
                    },
                },
                grade: 2,
            },
            xiongshi: {
                textName: '雄狮',
                nickName: 'xiongshi',
                match: {
                    x: undefined,
                    y: [0, 0.25],
                    scale: 0.3,
                },
                action: 'daiji1',
                loop: true,
                gjsj: 1600,
                chooseServant: {
                    x: undefined,
                    y: [0, 0.05],
                    scale: 0.6,
                },
                consoledesk: {
                    x: undefined,
                    y: [0, 0.1],
                    scale: 0.3,
                },
                pc: {
                    match: {
                        x: undefined,
                        y: [0, 0.18],
                        scale: 0.25,
                    },
                    chooseServant: {
                        x: undefined,
                        y: [0, 0.1],
                        scale: 0.7,
                    },
                    consoledesk: {
                        x: undefined,
                        y: [0, 0.07],
                        scale: 0.3,
                    },
                },
                grade: 3,
            },
            tengshe: {
                textName: '腾蛇',
                nickName: 'tengshe',
                match: {
                    x: undefined,
                    y: [0, 0.6],
                    scale: 0.15,
                },
                action: 'daiji1',
                loop: true,
                gjsj: 1600,
                chooseServant: {
                    x: undefined,
                    y: [0, 0.45],
                    scale: 0.25,
                },
                consoledesk: {
                    x: undefined,
                    y: [0, 0.45],
                    scale: 0.15,
                },
                pc: {
                    match: {
                        x: undefined,
                        y: [0, 0.17],
                        scale: 0.25,
                    },
                    chooseServant: {
                        x: undefined,
                        y: [0, 0.1],
                        scale: 0.7,
                    },
                    consoledesk: {
                        x: undefined,
                        y: [0, 0.05],
                        scale: 0.3,
                    },
                },
                grade: 3,
            },
            yaya: {
                textName: '鸭鸭',
                nickName: 'yaya',
                match: {
                    x: undefined,
                    y: [0, 0.23],
                    scale: 0.25,
                },
                action: 'daiji1',
                loop: true,
                gjsj: 1600,
                chooseServant: {
                    x: undefined,
                    y: [0, 0.1],
                    scale: 0.65,
                },
                consoledesk: {
                    x: undefined,
                    y: [0, 0.05],
                    scale: 0.25,
                },
                pc: {
                    match: {
                        x: undefined,
                        y: [0, 0.17],
                        scale: 0.25,
                    },
                    chooseServant: {
                        x: undefined,
                        y: [0, 0.1],
                        scale: 0.7,
                    },
                    consoledesk: {
                        x: undefined,
                        y: [0, 0.05],
                        scale: 0.3,
                    },
                },
                grade: 2,
            },
            youyou: {
                textName: '佑佑',
                nickName: 'youyou',
                match: {
                    x: undefined,
                    y: [0, 0.23],
                    scale: 0.25,
                },
                action: 'daiji1',
                loop: true,
                gjsj: 1600,
                chooseServant: {
                    x: undefined,
                    y: [0, 0.1],
                    scale: 0.65,
                },
                consoledesk: {
                    x: undefined,
                    y: [0, 0.05],
                    scale: 0.25,
                },
                pc: {
                    match: {
                        x: undefined,
                        y: [0, 0.17],
                        scale: 0.25,
                    },
                    chooseServant: {
                        x: undefined,
                        y: [0, 0.1],
                        scale: 0.7,
                    },
                    consoledesk: {
                        x: undefined,
                        y: [0, 0.05],
                        scale: 0.3,
                    },
                },
                grade: 2,
            },
            minmin: {
                textName: '敏敏',
                nickName: 'minmin',
                match: {
                    x: undefined,
                    y: [0, 0.23],
                    scale: 0.25,
                },
                action: 'daiji1',
                loop: true,
                gjsj: 1600,
                chooseServant: {
                    x: undefined,
                    y: [0, 0.1],
                    scale: 0.65,
                },
                consoledesk: {
                    x: undefined,
                    y: [0, 0.05],
                    scale: 0.25,
                },
                pc: {
                    match: {
                        x: undefined,
                        y: [0, 0.17],
                        scale: 0.25,
                    },
                    chooseServant: {
                        x: undefined,
                        y: [0, 0.1],
                        scale: 0.7,
                    },
                    consoledesk: {
                        x: undefined,
                        y: [0, 0.05],
                        scale: 0.3,
                    },
                },
                grade: 2,
            },
            qiaoqiao: {
                textName: '乔乔',
                nickName: 'qiaoqiao',
                match: {
                    x: undefined,
                    y: [0, 0.23],
                    scale: 0.15,
                },
                action: 'daiji1',
                loop: true,
                gjsj: 1600,
                chooseServant: {
                    x: undefined,
                    y: [0, 0.04],
                    scale: 0.25,
                },
                consoledesk: {
                    x: undefined,
                    y: [0, 0.05],
                    scale: 0.15,
                },
                pc: {
                    match: {
                        x: undefined,
                        y: [0, 0.17],
                        scale: 0.25,
                    },
                    chooseServant: {
                        x: undefined,
                        y: [0, 0.1],
                        scale: 0.7,
                    },
                    consoledesk: {
                        x: undefined,
                        y: [0, 0.05],
                        scale: 0.3,
                    },
                },
                grade: 2,
            },
            qilin: {
                textName: '麒麟',
                nickName: 'qilin',
                match: {
                    x: undefined,
                    y: [0, 0.23],
                    scale: 0.25,
                },
                action: 'daiji1',
                loop: true,
                gjsj: 1600,
                chooseServant: {
                    x: undefined,
                    y: [0, 0.1],
                    scale: 0.65,
                },
                consoledesk: {
                    x: undefined,
                    y: [0, 0.05],
                    scale: 0.25,
                },
                pc: {
                    match: {
                        x: undefined,
                        y: [0, 0.17],
                        scale: 0.25,
                    },
                    chooseServant: {
                        x: undefined,
                        y: [0, 0.1],
                        scale: 0.7,
                    },
                    consoledesk: {
                        x: undefined,
                        y: [0, 0.05],
                        scale: 0.3,
                    },
                },
                grade: 3,
            },
            diting: {
                textName: '谛听',
                nickName: 'diting',
                match: {
                    x: undefined,
                    y: [0, 0.23],
                    scale: 0.25,
                },
                action: 'daiji1',
                loop: true,
                gjsj: 1600,
                chooseServant: {
                    x: undefined,
                    y: [0, 0.1],
                    scale: 0.65,
                },
                consoledesk: {
                    x: undefined,
                    y: [0, 0.05],
                    scale: 0.25,
                },
                pc: {
                    match: {
                        x: undefined,
                        y: [0, 0.17],
                        scale: 0.25,
                    },
                    chooseServant: {
                        x: undefined,
                        y: [0, 0.1],
                        scale: 0.7,
                    },
                    consoledesk: {
                        x: undefined,
                        y: [0, 0.05],
                        scale: 0.3,
                    },
                },
                grade: 3,
            },
        },
        action: {
            dundun: {
                daiji: 3,
                gongji: 2,
                jingzhi: true,
                jinnang: 1,
                shouji: 2,
                zuodian: true,
            },
            jiuwei: {
                daiji: 4,
                gongji: 2,
                jingzhi: true,
                jinnang: 1,
                shouji: 2,
                zuodian: true,
            },
            chunzhihua: {
                daiji: 4,
                gongji: 2,
                jingzhi: true,
                jinnang: 1,
                shouji: 2,
                zuodian: true,
            },
            jinwu: {
                daiji: 4,
                gongji: 2,
                jingzhi: true,
                jinnang: 1,
                shouji: 2,
                zuodian: true,
            },
            canglong: {
                daiji: 4,
                gongji: 2,
                jingzhi: true,
                jinnang: 1,
                shouji: 2,
                zuodian: true,
            },
            kangkang: {
                daiji: 4,
                gongji: 2,
                jingzhi: true,
                jinnang: 1,
                shouji: 2,
                zuodian: true,
            },
            niuniu: {
                daiji: 4,
                gongji: 2,
                jingzhi: true,
                jinnang: 1,
                shouji: 2,
                zuodian: true,
            },
            xiongshi: {
                daiji: 4,
                gongji: 2,
                jingzhi: true,
                jinnang: 1,
                shouji: 2,
                zuodian: true,
            },
            tengshe: {
                daiji: 4,
                gongji: 2,
                jingzhi: true,
                jinnang: 1,
                shouji: 2,
                zuodian: true,
            },
            qilin: {
                daiji: 4,
                gongji: 2,
                jingzhi: true,
                jinnang: 1,
                shouji: 2,
                zuodian: true,
            },
            diting: {
                daiji: 4,
                gongji: 2,
                jingzhi: true,
                jinnang: 1,
                shouji: 2,
                zuodian: true,
            },
            minmin: {
                daiji: 4,
                gongji: 2,
                jingzhi: true,
                jinnang: 1,
                shouji: 2,
                zuodian: true,
            },
            qiaoqiao: {
                daiji: 4,
                gongji: 2,
                jingzhi: true,
                jinnang: 1,
                shouji: 2,
                zuodian: true,
            },
            yaya: {
                daiji: 4,
                gongji: 2,
                jingzhi: true,
                jinnang: 1,
                shouji: 2,
                zuodian: true,
            },
            youyou: {
                daiji: 4,
                gongji: 2,
                jingzhi: true,
                jinnang: 1,
                shouji: 2,
                zuodian: true,
            },
            lulu: {
                daiji: 4,
                gongji: 2,
                jingzhi: true,
                jinnang: 1,
                shouji: 2,
                zuodian: true,
            },
            datong: {
                daiji: 2,
                gongji: 2,
                jingzhi: true,
                jinnang: 1,
                shouji: 1,
                zuodian: false,
            },
            yueer: {
                daiji: 3,
                gongji: 2,
                jingzhi: true,
                jinnang: 1,
                shouji: 2,
                zuodian: true,
            },
            ale: {
                daiji: 3,
                gongji: 2,
                jingzhi: true,
                jinnang: 1,
                shouji: 2,
                zuodian: true,
            },
            yan: {
                daiji: 4,
                gongji: 2,
                jingzhi: true,
                jinnang: 1,
                shouji: 2,
                zuodian: false,
            },
            ahao: {
                daiji: 4,
                gongji: 2,
                jingzhi: true,
                jinnang: 1,
                shouji: 2,
                zuodian: false,
            },
            rui: {
                daiji: 4,
                gongji: 2,
                jingzhi: true,
                jinnang: 1,
                shouji: 2,
                zuodian: true,
            },
            liuli: {
                daiji: 4,
                gongji: 2,
                jingzhi: true,
                jinnang: 1,
                shouji: 2,
                zuodian: true,
            },
            manman: {
                daiji: 3,
                gongji: 2,
                jingzhi: true,
                jinnang: 1,
                shouji: 2,
                zuodian: false,
            },
            xiaoxiao: {
                daiji: 3,
                gongji: 2,
                jingzhi: true,
                jinnang: 1,
                shouji: 2,
                zuodian: false,
            },
            xuanwu: {
                daiji: 4,
                gongji: 2,
                jingzhi: true,
                jinnang: 1,
                shouji: 2,
                zuodian: false,
            },
            xueren: {
                daiji: 2,
                gongji: 2,
                jingzhi: true,
                jinnang: 1,
                shouji: 1,
                zuodian: false,
            },
        },
        skillDesc: {
            dundun: {
                txhj_dundunSkill1: {
                    name: '勇往直前',
                    desc: '当你使用【杀】指定目标后,你有10/20/40/60/80/100%的概率摸一张牌.',
                },
                txhj_dundunSkill2: {
                    name: '忠誌',
                    desc: '当你受到伤害时,若此伤害值大于1,令该伤害-1.',
                },
            },
            jiuwei: {
                txhj_jiuweiSkill1: {
                    name: '狐火灵气',
                    desc: '其他角色回合开始时,你有10/20/40/60/80/100%的概率使其本回合以你为唯一目标的所有锦囊牌失效.',
                },
                txhj_jiuweiSkill2: {
                    name: '秘思',
                    desc: '你的回合内,其他角色使用或打出的第一张非锦囊牌失效.',
                },
                txhj_jiuweiSkill3: {
                    name: '九尾之命',
                    desc: '当你受到1点伤害后,你摸x张牌(x为9-此技能发动次数,当x为0时,此技能失效).',
                },
            },
            chunzhihua: {
                diychunxiao: {
                    name: '春晓',
                    desc: '你的回合结束时,你若为受伤状态,额外有50%的几率恢复至满体力值.',
                },
                diycuidu: {
                    name: '淬毒',
                    desc: '你对一名其他角色造成伤害后,若其没有<中毒>,你令其获得<中毒>,然后你摸两张牌.',
                },
                diyzhuiling: {
                    name: '追灵',
                    desc: '当你受到伤害时,你可以对伤害来源造成伤害的角色造成1点随机属性伤害(雷或火、冰或毒随机).',
                },
                diyfeihua: {
                    name: '飞花',
                    desc: '你的出牌阶段开始时,你可以视为随机使用一张【知己知彼】或【万箭齐发】.',
                },
            },
            //以下侍灵全部搬运自K佬的【EpicFX】扩展,再次感谢K佬的侍灵素材和技能代码提供!
            jinwu: {
                txhj_jinwuSkill1: {
                    name: '永恒烈日',
                    desc: '当你第一次进入濒死状态时,你有20/30/40/60/80/100%的概率体力回复至体力上限.',
                },
                txhj_jinwuSkill2: {
                    name: '三足',
                    desc: '你的手牌上限等于体力上限.每回合每种类型限一次,当你使用牌后,你失去1点体力,然后摸X张牌.(X为你已损失的体力值且最大为9).',
                },
                txhj_jinwuSkill3: {
                    name: '赤地千里',
                    desc: '每个回合结束后,若本回合你在弃牌阶段外弃置的牌数大于体力值,则摸等同于弃置牌数的牌.',
                },
            },
            canglong: {
                txhj_canglongSkill1: {
                    name: '风云变色',
                    desc: '其他角色的准备阶段,你有20/30/40/60/80/100%的概率视为对其使用一张无距离限制的【杀】(你可选择是否执行).',
                },
                txhj_canglongSkill2: {
                    name: '鸣嗷',
                    desc: '每回合你使用的第一张【杀】伤害 +1.',
                },
                txhj_canglongSkill3: {
                    name: '披星戴月',
                    desc: '你的回合内,当你使用【杀】造成伤害后,你摸X张牌(X为本回合你使用【杀】的次数且上限为5),该效果每回合限触发5次.',
                },
            },
            kangkang: {
                txhj_kangkangSkill1: {
                    name: '丰收瑞鸣',
                    desc: '每轮限两次,你造成或受到伤害后有20/30/40/60/80/100%的概率摸1张牌.你每通过<丰收瑞鸣>摸2张牌时,你回复一点体力.',
                },
                txhj_kangkangSkill2: {
                    name: '安康',
                    desc: '准备阶段,你摸2张牌,若你未受伤,你弃置你判定区内的所有牌.',
                },
            },
            niuniu: {
                txhj_niuniuSkill1: {
                    name: '巧拙守真',
                    desc: '每回合限两次,当你于回合外失去牌后,你有20/30/40/60/80/100%的概率随机获得当前回合角色一张牌.',
                },
                txhj_niuniuSkill2: {
                    name: '兕袭',
                    desc: '每回合限一次,当你获得其他角色的牌时进行判定:若为♥️,你回复一点体力并获得判定牌;不为♥️,你对其造成1点伤害.',
                },
            },
            xiongshi: {
                diy_xiongshiSkill1: {
                    name: '霸体',
                    desc: '锁定技,当你受到雷电伤害后,你摸X张牌(X为你的体力上限);当你受到火焰伤害后,你将一张【兵粮寸断】置入伤害来源判定区内并从牌堆中获得一张【杀】.',
                },
                diy_xiongshiSkill2: {
                    name: '兽噬',
                    desc: '每当你造成一次伤害后,你可以对一名不为此目标的其他角色造成1点伤害.',
                },
                diy_xiongshiSkill3: {
                    name: '狂狮愤戾',
                    desc: '当你使用牌时,其他角色不能使用或打出牌响应;你使用牌指定唯一目标造成伤害时,若你的手牌数大于其则你从牌堆中随机获得一张基本牌.',
                },
            },
            tengshe: {
                txhj_tengsheSkill1: {
                    name: '雷奔云谲',
                    desc: '每回合限一次,当你在回合外受到非属性伤害时20/30/40/60/80/100%对伤害来源使用一张雷属性的杀.',
                },
                txhj_tengsheSkill2: {
                    name: '紫电',
                    desc: '你的回合结束时对所有已受伤的敌方角色造成1点雷电伤害,如果仅有1名满足条件的敌方角色,则改为造成2点雷电伤害.',
                },
                txhj_tengsheSkill3: {
                    name: '迅雷风烈',
                    desc: '每回合限一次,当其他角色受到雷属性伤害时,你回复1点体力并摸两张牌.',
                },
            },
            qilin: {
                txhj_qilinSkill1: {
                    name: '麒麟之姿',
                    desc: '摸牌阶段结束时,你有20/30/40/60/80/100%的概率摸x张牌(x为你摸牌阶段的摸牌数)',
                },
                txhj_qilinSkill2: {
                    name: '掌火',
                    desc: '每回合限两次,你造成火焰伤害后,你回复1点体力并获得该受伤角色的1张牌.',
                },
                txhj_qilinSkill3: {
                    name: '腾焰飞芒',
                    desc: '出牌阶段开始时和结束时,你视为对一名随机敌方角色使用一张【火攻】.',
                },
            },
            diting: {
                txhj_ditingSkill1: {
                    name: '披坚执锐',
                    desc: '当你造成伤害后,你有10/20/40/60/80/100%的概率回复1点体力.',
                },
                txhj_ditingSkill2: {
                    name: '轻健',
                    desc: '当你受到伤害后,增加一点体力上限.',
                },
                txhj_ditingSkill3: {
                    name: '巧捷万端',
                    desc: '回合结束时,你摸x张牌,并对x名敌方角色造成1点伤害(x为本回合使用不同点数的牌的数量).',
                },
            },
            yaya: {
                txhj_yayaSkill1: {
                    name: '慷慨鸭昂',
                    desc: '每回合限四次,当你使用红色牌或被其他角色的红色牌指定为目标时,你有20/30/40/60/80/100%的概率摸一张牌;你每通过此技能获得4张牌,你对一名随机敌方角色造成1点伤害.',
                },
                txhj_yayaSkill2: {
                    name: '鸭立',
                    desc: '每局对局限一次,当你进入濒死状态时,你将体力回复至1点,并在你受到伤害、流失体力、回复体力时防止之,直到你的下个回合开始.',
                },
            },
            youyou: {
                txhj_youyouSkill1: {
                    name: '承天之佑',
                    desc: '每回合限一次,当你于回合外受到伤害后,你有20/30/40/60/80/100%的概率摸两张牌.',
                },
                txhj_youyouSkill2: {
                    name: '守护',
                    desc: '每回合限一次,当你在摸牌阶段外一次性获得大于一张牌后,你随机令一名已受伤的友方角色回复1点体力.',
                },
            },
            minmin: {
                txhj_minminSkill1: {
                    name: '娉婷万種',
                    desc: '每回合限一次,当你受到伤害后,你有10/20/40/60/80/100%的概率摸x张牌(x为本次伤害值).',
                },
                txhj_minminSkill2: {
                    name: '依人',
                    desc: '每回合限两次,当你一次性摸不小于2张牌后,你令一名随机友方已受伤角色回复一点体力.',
                },
            },
            qiaoqiao: {
                txhj_qiaoqiaoSkill1: {
                    name: '慧心巧思',
                    desc: '每当延时类锦囊牌进入其他角色判定区时,你有20/30/40/60/80/100%的概率随机令一名敌方角色失去一点体力.',
                },
                txhj_qiaoqiaoSkill2: {
                    name: '清婉',
                    desc: '回合结束时,你将手牌数摸至体力值.(至多为5)',
                },
            },
            lulu: {
                txhj_luluSkill1: {
                    name: '如虎添翼',
                    desc: '出牌阶段开始时,你摸两张牌.',
                },
                txhj_luluSkill2: {
                    name: '虎威',
                    desc: '你于回合内使用第一张[杀]时,若你本回合获得牌数不小于x (x为你的当前体力值),则你此[杀]不可响应且伤害+1.',
                },
            },
            datong: {
                txhj_datongSkill1: {
                    name: '金鸡独立',
                    desc: '当你进入濒死状态时,你回复体力至1点 (每次对局限至多触发一次).',
                },
            },
            ale: {
                txhj_aleSkill1: {
                    name: '乐不可支',
                    desc: '当你于一个回合第一次成为一张基本牌的目标后,若此牌未对你造成伤害,你摸一张牌.',
                },
                txhj_aleSkill2: {
                    name: '饞嘴王',
                    desc: '准备阶段,若你已受伤且体力值不是全场最高,你回复1点体力.',
                },
            },
            rui: {
                txhj_ruiSkill1: {
                    name: '祥云瑞氣',
                    desc: '出牌阶段结束时,你对手牌数小于你的敌方角色造成1点火焰伤害.',
                },
                txhj_ruiSkill2: {
                    name: '神妙',
                    desc: '准备阶段和结束阶段,若你的手牌数为奇数,你令随机一个我方角色摸一张牌;若手牌数为偶数,你令随机一个敌方角色随机弃一张牌.',
                },
                txhj_ruiSkill3: {
                    name: '洞若观火',
                    desc: '当你成为其他角色使用的普通锦囊牌的目标时,你进行判定:若为红色,则此锦囊无效且你获得之.',
                },
            },
            yueer: {
                txhj_yueerSkill1: {
                    name: '花容月貌',
                    desc: '每轮限一次,当男性角色受到伤害后,你回复一点体力并摸一张牌.',
                },
                txhj_yueerSkill2: {
                    name: '娇面',
                    desc: '弃牌阶段结束时,你摸两张牌.',
                },
            },
            yan: {
                txhj_yanSkill1: {
                    name: '神鬼不测',
                    desc: '当你成为其他角色使用的普通锦囊的唯一目标时,你进行判定:若为黑色,则改为你对使用者使用该锦囊.',
                },
                txhj_yanSkill2: {
                    name: '反计',
                    desc: '每回合限一次,当你受到其他角色的伤害后,你视为对伤害来源使用一张杀,若该杀造成伤害,则你回复1点体力.',
                },
                txhj_yanSkill3: {
                    name: '天外之火',
                    desc: '每回合限一次,当你对其他角色造成伤害后,进行一次判定:黑色你获得其一张牌,红色你摸两张牌.',
                },
            },
            ahao: {
                txhj_aHaoSkill1: {
                    name: '豪门贵胄',
                    desc: '每场战斗结束时,你获得1件随机装备.',
                },
                txhj_aHaoSkill2: {
                    name: '神勇',
                    desc: '每当你在牌局内失去装备时对所有敌人造成1点伤害.',
                },
                txhj_aHaoSkill3: {
                    name: '攫戾執猛',
                    desc: '回合开始时,你摸牌阶段摸牌数、出杀次数、手牌上限+x (x为装备区的装备数).',
                },
            },
            liuli: {
                txhj_liuliSkill1: {
                    name: '墨玉点雪',
                    desc: '其他角色的回合限一次,当你失去牌时,对当前回合角色造成1点伤害.',
                },
                txhj_liuliSkill2: {
                    name: '伶俐',
                    desc: '每回合限一次,其他角色在弃牌阶段弃牌后,你从弃牌堆获得一张牌.',
                },
            },
            manman: {
                txhj_manmanSkill1: {
                    name: '弄鬼掉猴',
                    desc: '回合开始时,你视为使用一张【南蛮入侵】;【南蛮入侵】每造成1点伤害你摸1张牌.',
                },
                txhj_manmanSkill2: {
                    name: '捣蛋',
                    desc: '每回合限一次,当你对其他角色造成伤害后,你随机获得其一张牌.',
                },
            },
            xiaoxiao: {
                txhj_xiaoxiaoSkill1: {
                    name: '矢无虚发',
                    desc: '每回合限一次,当你成为其他角色使用普通锦囊牌的目标后,若你没有受到伤害,则你回复1点体力(若体力已满则改为摸一张牌).',
                },
                txhj_xiaoxiaoSkill2: {
                    name: '弓上弦',
                    desc: '弃牌阶段结束时,你从每名装备区装备数不大于你的其他角色处随机获得1张手牌.',
                },
            },
            xueren: {
                txhj_xuerenSkill1: {
                    name: '轻舞飞扬',
                    desc: '回合结束时,若你本回合造成过伤害,你摸一张牌.',
                },
            },
            xuanwu: {
                txhj_xuanwuSkill1: {
                    name: '倚天拔地',
                    desc: '当其他角色回复体力时,你回复1点体力.',
                },
                txhj_xuanwuSkill2: {
                    name: '蛇影',
                    desc: '每回合限一次,当你弃置手牌或手牌被弃置时,你随机对X名敌方角色造成1点伤害并摸X张牌.(X为你本次弃置手牌数除以2向上取整)',
                },
                txhj_xuanwuSkill3: {
                    name: '玄冥真主',
                    desc: '当其他角色使用锦囊牌指定你为目标时,若该牌点数小于等于你的手牌数,则该锦囊无效.',
                },
            },
        },
        createServantIconList(ele) {
            var data = servantData.servant;
            var keys = Object.keys(data);
            for (var i = 0; i < keys.length; i++) {
                var div = ui.create.div('.taixuhuanjing_servantSelectIcon', ele);
                var img = new Image(88, 88);
                img.classList.add('taixuhuanjing_servantSelectIcon_img');
                img.src = txhjPack.path + `/image/servant/icon/${keys[i]}.png`;
                div.appendChild(img);
                img.onerror = function () {
                    console.warn('Servant icon not found: ' + keys[i]);
                    this.onerror = null;
                };
                img.servantName = keys[i];
                img.onclick = function (ev) {
                    if (this.servantName == txhj.servant.nickName) return;
                    txhj.servant.nickName = this.servantName;
                    txhj.servant.setData();
                    txhj.servant.chooseingPlay(txhj.sldiv, true);
                    txhj.updateSLDesc(txhj.descDiv);
                };
                div.classList.add('frame' + data[keys[i]].grade);
            }
        },
    };
    return {};
});
