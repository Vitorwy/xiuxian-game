const storyChapter2 = {
  // 接第一章宗门小比
  ch2_start: {
    text: "宗门小比如期而至，演武场上人声鼎沸，旌旗猎猎。外门弟子、内门弟子、亲传弟子分列三组，各展神通。石坚以一套厚重如山的「磐石剑诀」一路碾压，云逸则以「流云剑法」身法灵动引得满堂喝彩。苏婉不擅战斗，只参加了辅助比试，以一手精妙的回春术为伤者疗伤。灵儿因年纪最小，被特许免战，但她仍站在场边拼命为你加油。轮到你了，你深吸一口气，握紧了剑柄——这是你第一次在众人面前展露修为。",
    speaker: "旁白",
    bg: "assets/images/bg_arena.jpg",
    char: "",
    next: "ch2_my_match"
  },
  ch2_my_match: {
    text: "裁判长老高声念出你的名字和对手——内门弟子孟然，已在炼气五层浸淫两年。孟然冷笑着跳上台，手中长刀泛着寒光：「叶师弟，刀剑无眼，若是怕了现在认输还来得及。」台下响起一片窃窃私语，不少人等着看新人的笑话。你望向台下的石坚、云逸和灵儿，他们都在为你鼓劲。你深吸一口气，缓缓拔出长剑——战吧。",
    speaker: "孟然",
    bg: "assets/images/bg_arena.jpg",
    char: "",
    choices: [
      { text: "正面迎战，以快打快", next: "ch2_win_1", effect: { cultivation: 10, honor: 3 } },
      { text: "稳扎稳打，防守反击", next: "ch2_win_2", effect: { spirit: 5, cultivation: 8 } }
    ]
  },
  ch2_win_1: {
    text: "你抢先出招，剑光如电，一招「清风拂柳」直刺孟然咽喉。他未料你如此果决，仓促格挡，却被你连环三剑逼退数步。台下惊呼声起，孟然恼羞成怒，挥刀猛劈，你侧身闪过，剑尖已抵在他胸前。裁判宣布你获胜。孟然面色铁青地下了台，而你却赢得了许多弟子的尊重。云逸在台下吹了一声口哨：「漂亮！」",
    speaker: "旁白",
    bg: "assets/images/bg_arena.jpg",
    char: "",
    effect: { cultivation: 10, honor: 3 },
    next: "ch2_after_win"
  },
  ch2_win_2: {
    text: "你沉着应对，以防御剑势消耗孟然的体力。他久攻不下，愈发急躁，终于露出破绽。你抓住时机一剑点出，正中他手腕，长刀脱手飞出。裁判颔首宣布你获胜。孟然咬牙下台，而你虽胜不骄，拱手行礼，风度令不少师姐点头称赞。石坚在场边向你竖起大拇指，灵儿则跳着欢呼。",
    speaker: "旁白",
    bg: "assets/images/bg_arena.jpg",
    char: "",
    effect: { spirit: 5, cultivation: 8 },
    next: "ch2_after_win"
  },
  ch2_after_win: {
    text: "小比结束后，青云真君当众宣布：「本次小比前十名，将获资格进入玄天秘境。秘境六十年一开，内藏上古大能遗留的宝物与机缘。三日后，由韩厉长老领队出发，尔等务必做好准备。」众弟子闻言无不振奋。苏婉走过来递上一瓶丹药：「秘境凶险，这是我炼制的护脉丹，可保心脉。」你接过时，她的手指轻轻触了触你的手背，脸颊微红。",
    speaker: "苏婉",
    bg: "assets/images/bg_arena.jpg",
    char: "assets/images/sis1.png",
    gainItem: "护脉丹",
    effect: { spirit: 3 },
    next: "ch2_enter_realm"
  },
  ch2_enter_realm: {
    text: "三日后，韩厉长老率十名弟子来到青云宗禁地深处。那里矗立着一座古老的石门，门上符文流转，散发着令人心悸的威压。韩厉取出一枚令牌嵌入凹槽，石门轰然洞开，一道七彩光门显现。「秘境每次最多三十日，切记量力而行。若有性命之危，捏碎令牌便可传送出来。去吧。」你握紧令牌，与同门一同踏入光门。",
    speaker: "韩厉",
    bg: "assets/images/bg_secret_realm.jpg",
    char: "assets/images/char_han_li.png",
    next: "ch2_in_realm"
  },
  ch2_in_realm: {
    text: "一阵天旋地转后，你独自出现在一片密林之中。古木参天，藤萝垂挂，空气中灵气浓郁得几乎凝为实质。远处隐隐传来兽吼，近处溪水潺潺。你正欲辨明方向，却听左侧灌木丛中传来微弱的呻吟声。拨开枝叶，只见一名黑衣少女倚靠在树下，肩上有一道深可见骨的爪痕，鲜血染红了半边衣衫。她虽面色苍白，眼神却凌厉如刀。",
    speaker: "旁白",
    bg: "assets/images/bg_realm_forest.jpg",
    char: "assets/images/char_demon_girl.png",
    next: "ch2_demon_encounter"
  },
  ch2_demon_encounter: {
    text: "少女见到你，右手迅速按住腰间的短刃，冷冷道：「你是青云宗弟子？不必假惺惺，要动手便动手。」她气息急促，显然伤得不轻。你注意到她衣角绣着一朵暗红色的曼陀罗——那是魔道幽冥宗的标志。此刻她虽强撑着凶悍，但手指已微微颤抖，伤口仍在渗血。若不及时救治，恐有性命之忧。",
    speaker: "幽月",
    bg: "assets/images/bg_realm_forest.jpg",
    char: "assets/images/char_demon_girl.png",
    choices: [
      { text: "不顾正魔之别，施以援手", next: "ch2_help_demon", effect: { honor: 3, demon: 3 } },
      { text: "拿出丹药给她，但保持警惕", next: "ch2_cautious_help", effect: { spirit: 2 } },
      { text: "转身离开，不惹麻烦", next: "ch2_leave_her" }
    ]
  },
  ch2_help_demon: {
    text: "你取出苏婉给的护脉丹，走近她身边。她本能地抬起短刃，但你只将丹药轻轻放在她膝前，后退两步以示无害。「吃了吧，能护住心脉。」她盯着你看了好一会儿，终于拿起丹药服下。药效化开后，她面色稍霁，低声道：「……幽月，我的名字。欠你一命，日后必还。」她挣扎着站起身，从怀中取出一枚黑色小铃铛抛给你：「这是传音铃，捏碎它，我会来。」",
    speaker: "幽月",
    bg: "assets/images/bg_realm_forest.jpg",
    char: "assets/images/char_demon_girl.png",
    gainItem: "传音铃",
    effect: { honor: 3, demon: 3 },
    next: "ch2_ruins"
  },
  ch2_cautious_help: {
    text: "你将护脉丹放在一块石头上，然后退开数步。幽月勉强爬过去捡起丹药吞下，惨白的脸上恢复了一丝血色。她警惕地盯着你：「……算你聪明。我叫幽月，幽冥宗弟子。这秘境里不止有妖兽，还有比妖兽更危险的东西——你们正道弟子。」她苦笑一声，却未再亮刀。",
    speaker: "幽月",
    bg: "assets/images/bg_realm_forest.jpg",
    char: "assets/images/char_demon_girl.png",
    effect: { spirit: 2 },
    next: "ch2_ruins"
  },
  ch2_leave_her: {
    text: "你咬了咬牙，转身离去。身后传来她的一声冷笑：「这就是正道？见死不救，与魔道何异？」那声音像根刺扎进你心里。你快步走进密林深处，但那个黑衣少女的影子却迟迟挥之不去。",
    speaker: "旁白",
    bg: "assets/images/bg_realm_forest.jpg",
    char: "",
    effect: { demon: 2 },
    next: "ch2_alone_search"
  },
  ch2_alone_search: {
    text: "独自探索了半日，你在一处隐秘洞穴中发现了一株幽光灵芝。采摘时触动禁制，引发了一群石傀儡的围攻。你费尽力气才脱身，虽然收获颇丰，但心中总觉得若有人同行会安全许多。",
    speaker: "旁白",
    bg: "assets/images/bg_realm_forest.jpg",
    char: "",
    gainItem: "幽光灵芝",
    effect: { cultivation: 15, stamina: -20 },
    next: "ch2_ruins"
  },
  ch2_ruins: {
    text: "深入秘境数日，你来到一片残垣断壁的遗迹。断柱上爬满青苔，地面上刻着复杂玄奥的阵纹。遗迹中央有一座半塌的石台，台上悬浮着一面古镜，镜面如水波般荡漾，映出的却不是现实景象，而是各人内心最深的渴望。古镜周围已有数人聚集，其中既有青云宗弟子，也有幽冥宗的人，双方剑拔弩张。幽月也在其中，她见你到来，眼神微动。",
    speaker: "旁白",
    bg: "assets/images/bg_ruins.jpg",
    char: "",
    next: "ch2_mirror_conflict"
  },
  ch2_mirror_conflict: {
    text: "幽冥宗一名魁梧大汉狞笑道：「这幻影镜是我幽冥宗先发现的，正道的小崽子们滚远些！」青云宗这边一名师兄怒斥：「秘境宝物，能者得之！魔道妖人也敢放肆！」双方一触即发。幽月却突然开口：「幻影镜有灵，非一人可破。若在此厮杀，触发遗迹禁制，所有人都得死。不如合力破禁，再各凭本事。」她说完有意无意地看了你一眼。",
    speaker: "幽月",
    bg: "assets/images/bg_ruins.jpg",
    char: "assets/images/char_demon_girl.png",
    choices: [
      { text: "支持幽月的提议，合作破禁", next: "ch2_cooperate", effect: { spirit: 5 } },
      { text: "支持青云宗，抢夺宝物", next: "ch2_fight_demon", effect: { demon: 3, honor: 3 } }
    ]
  },
  ch2_cooperate: {
    text: "你站出来表示同意幽月。正魔双方虽不情愿，但也知这是最稳妥之法。众人合力注入灵力，幻影镜猛然绽放光芒，将所有人震退数步。光芒散去后，镜中竟走出一个虚幻的人影——正是上古器灵。器灵扫视众人，最后将目光落在你和幽月身上：「二人同心，可获此镜。但镜中映心，需问自己——你所求为何？」你与幽月对视一眼，同时伸手触镜。",
    speaker: "器灵",
    bg: "assets/images/bg_ruins.jpg",
    char: "",
    gainItem: "幻影镜",
    effect: { cultivation: 30, spirit: 10 },
    next: "ch2_bond_moment"
  },
  ch2_fight_demon: {
    text: "你与同门一同出手，一场混战在遗迹中爆发。你与幽月短暂交锋，她的短刃擦过你肩头，你的剑尖也抵住了她的腰侧。四目相对间，她嘴唇微动，似说了句什么，随即抽身退走。幽冥宗最终退去，但你也未得到幻影镜，只在遗迹角落找到一瓶前人遗留的凝元丹。",
    speaker: "旁白",
    bg: "assets/images/bg_ruins.jpg",
    char: "",
    gainItem: "凝元丹",
    effect: { cultivation: 20 },
    next: "ch2_exit_realm"
  },
  ch2_bond_moment: {
    text: "幻影镜化作一团柔光没入你掌心。幽月站在你身旁，轻声道：「我在镜中看到的……是小时候的家乡。你呢？」你沉默片刻，没有回答。她自嘲地笑了笑：「也罢，正魔殊途，我不该多问。」她转身欲走，你下意识叫住她。她停下脚步，没有回头：「叶尘，若有一天在战场上相见，我不会手下留情。」说完她的身影消失在遗迹深处，只留下一缕若有若无的暗香。",
    speaker: "幽月",
    bg: "assets/images/bg_ruins.jpg",
    char: "assets/images/char_demon_girl.png",
    effect: { demon: 5 },
    next: "ch2_exit_realm"
  },
  ch2_exit_realm: {
    text: "三十日期满，你与同门被传送回宗门。此次秘境之行，你不仅修为大进，还得到了幻影镜与诸多灵药，更重要的是——结识了那个神秘的黑衣少女。返回宗门后，青云真君亲自为你检验幻影镜，抚须叹道：「此镜乃上古奇宝，能助你勘破幻象、稳固道心。叶尘，你福缘不浅。」然而他并未注意到，你怀中那枚黑色的传音铃正微微发烫。",
    speaker: "青云真君",
    bg: "assets/images/bg_main_hall.jpg",
    char: "assets/images/char_master.png",
    effect: { cultivation: 20, honor: 5 },
    next: "ch2_end"
  },
  ch2_end: {
    text: "秘境归来后的日子看似平静，但修真界的暗流已开始涌动。一日，宗门收到急报：山下的几个小宗门在一夜之间被灭门，现场残留着幽冥宗的魔气。正魔之间脆弱的平衡已被打破。青云真君召开长老会，决定派遣弟子下山调查此事。你主动请缨，同行的还有苏婉、云逸，以及一位你未曾深交的师姐——柳如烟。这位来自天机阁的挂单弟子，精通情报与易容，据说她曾只身潜入魔宗，盗出过重要情报。",
    speaker: "旁白",
    bg: "assets/images/bg_main_hall.jpg",
    char: "",
    next: "ch3_start"
  }
};