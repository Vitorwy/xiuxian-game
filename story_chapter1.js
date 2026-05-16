const storyChapter1 = {
  // 序章
  start: {
    text: "你叫叶尘，本是凡俗世间一介书生，自幼父母双亡，孤苦无依。这日你在山中采药时不幸坠崖，醒来时却发现自己躺在一间古色古香的客栈里，空气中弥漫着淡淡的檀香。你头痛欲裂，最后的记忆是那深不见底的山谷……如今身处何方？你挣扎着坐起身，打量着周围陌生的环境，心中满是疑惑与不安。",
    speaker: "旁白",
    bg: "assets/images/bg_open.png",
    char: "",
    next: "master_enter"
  },
  master_enter: {
    text: "房门吱呀一声被推开，一位鹤发童颜的白袍老者缓步而入。他目光如电，只一眼便让你浑身一颤。老者手抚长须，上下打量着你，眼神中既有审视也有一丝不易察觉的期待。他身后还跟着一名青衫少年，手中捧着一盏清茶，毕恭毕敬地站在一旁，不言不语。",
    speaker: "旁白",
    bg: "assets/images/bg_tavern.jpg",
    char: "assets/images/char_master.png",
    next: "master_speak"
  },
  master_speak: {
    text: "老者声如洪钟：「老夫青云真君，乃青云宗掌教。小友在崖下昏迷三日，经脉中却隐隐有灵气流转，乃是万中无一的修真苗子。此处乃青云宗山脚下的接引客栈，你能来到此地，便是缘分。老夫问你，可愿拜入我青云宗门，踏足仙道，追求那无上长生？」他的每一个字都仿佛带着魔力，在你耳边嗡嗡作响。",
    speaker: "青云真君",
    bg: "assets/images/bg_tavern.jpg",
    char: "assets/images/char_master.png",
    choices: [
      { text: "欣然同意，叩拜师恩", next: "agree", effect: { honor: 5 } },
      { text: "犹豫不决，问清缘由", next: "hesitate", effect: { spirit: 2 } },
      { text: "冷漠拒绝，自有打算", next: "refuse", effect: { demon: 10 } }
    ]
  },
  agree: {
    text: "你心中一股热流涌过，当即翻身下床，跪地三拜：「师父在上，请受徒儿叶尘一拜！」青云真君扶起你，从袖中取出一只玉瓶：「好！此乃筑基丹，可助你洗髓伐脉，打牢根基。从今往后，你便是青云宗第三十六代弟子。」你接过丹药，只觉入手温润，清香扑鼻，仿佛四肢百骸都在欢呼。",
    speaker: "旁白",
    bg: "assets/images/bg_tavern.jpg",
    char: "assets/images/char_master.png",
    next: "got_item",
    gainItem: "筑基丹",
    effect: { cultivation: 10 }
  },
  got_item: {
    text: "你当即服下筑基丹，一股磅礴暖流自丹田炸开，冲刷着全身经脉。剧痛之后是难以言喻的舒畅，仿佛脱胎换骨。青云真君含笑点头：「很好，你且随我回山，正式入门。」你跟随他踏出客栈，眼前是一条云雾缭绕的石阶，直通巍峨山门，两名守山弟子按剑行礼，声震云霄。",
    speaker: "旁白",
    bg: "assets/images/bg_tavern.jpg",
    char: "assets/images/char_master.png",
    next: "meet_elder_law"
  },
  // 第一章：青云问道（大量新人物）
  meet_elder_law: {
    text: "入山后，你首先被带到执法堂。堂中端坐着一位面容冷峻的黑袍长老，正是执法长老韩厉。他目光如刀，沉声道：「宗门戒律，需谨记于心。一不得欺师灭祖，二不得同门相残，三不得滥杀无辜。违者，轻则面壁十年，重则废除修为逐出山门。」言罢，他抬手放出一丝威压，你顿觉如坠冰窟。",
    speaker: "韩厉",
    bg: "assets/images/bg_hall_law.jpg",
    char: "assets/images/char_han_li.png",
    next: "choose_respect_law"
  },
  choose_respect_law: {
    text: "韩厉盯着你，似在等你的回答。空气仿佛凝固，你背后已渗出冷汗。",
    speaker: "韩厉",
    bg: "assets/images/bg_hall_law.jpg",
    char: "assets/images/char_han_li.png",
    choices: [
      { text: "恭敬回答：弟子谨记。", next: "law_accepted", effect: { honor: 3 } },
      { text: "默不作声，保持沉默。", next: "law_silent", effect: { demon: 2 } }
    ]
  },
  law_accepted: {
    text: "你躬身一礼：「弟子定当严守戒律，不负宗门栽培。」韩厉脸色稍缓，微微点头：「如此便好。去藏经阁挑选一本入门功法吧。」他挥了挥手，那股压力骤然消散，你这才发现自己的后背已被汗水浸透。",
    speaker: "韩厉",
    bg: "assets/images/bg_hall_law.jpg",
    char: "assets/images/char_han_li.png",
    next: "library"
  },
  law_silent: {
    text: "你沉默以对，韩厉眉头微皱，但未再为难：「罢了，初入仙门，心性需磨砺。退下。」你退出执法堂，心中却对这位铁面长老多了几分忌惮。随后一名执事弟子带你前往藏经阁。",
    speaker: "旁白",
    bg: "assets/images/bg_hall_law.jpg",
    char: "",
    next: "library"
  },
  library: {
    text: "藏经阁是一座七层高塔，每一层都摆满了玉简。管理藏经阁的是一位白发苍苍的老修士葛青，他正倚在躺椅上打盹。见你到来，他眼皮都不抬：「新来的？自己进去，一层二层随便看，别弄坏了玉简。」你踏入书架之间，随手拿起一枚玉简贴在额头，一篇《青云炼气诀》涌入脑海。",
    speaker: "葛青",
    bg: "assets/images/bg_library.jpg",
    char: "assets/images/char_ge_qing.png",
    effect: { cultivation: 15 },
    next: "choose_skill"
  },
  choose_skill: {
    text: "除了基础炼气诀，你还发现了几本有趣的杂学：一本《基础阵道入门》，一本《青灵剑法初解》，以及一本残破的《炼丹杂记》。你只能优先选择一门深入。",
    speaker: "旁白",
    bg: "assets/images/bg_library.jpg",
    char: "",
    choices: [
      { text: "钻研阵道，走向阵修之路", next: "learn_array", effect: { spirit: 5 } },
      { text: "修炼剑法，成为剑修", next: "learn_sword", effect: { cultivation: 10 } },
      { text: "尝试炼丹，自给自足", next: "learn_alchemy", gainItem: "残缺丹方" }
    ]
  },
  learn_array: {
    text: "你花了一整个下午将《基础阵道入门》刻入神识，虽只懂皮毛，但已能布置最简单的聚灵阵。葛青难得睁眼，赞了一句：「有点天赋。」随后丢给你几块下品灵石作为鼓励。",
    speaker: "葛青",
    bg: "assets/images/bg_library.jpg",
    char: "assets/images/char_ge_qing.png",
    effect: { spiritStone: 10, spirit: 5 },
    next: "meet_bro1"
  },
  learn_sword: {
    text: "你铭记剑诀，手指不由自主地比划起来。葛青打了个哈欠：「剑修虽强，但剑在人在，剑亡人亡。你好自为之。」你握紧拳头，心中涌起一股豪气。离开藏经阁时，一名佩剑弟子与你擦肩而过，正是二师兄云逸，他笑着拍了拍你的肩。",
    speaker: "旁白",
    bg: "assets/images/bg_library.jpg",
    char: "assets/images/bro2.png",
    effect: { cultivation: 10 },
    next: "meet_bro1"
  },
  learn_alchemy: {
    text: "你如获至宝地将《炼丹杂记》收入怀中，虽然只是残篇，但其中记载的辟谷丹、回灵丹配方足够你初期使用。葛青嗤笑一声：「炼丹穷三代，你自己掂量。」你笑了笑，并不在意。",
    speaker: "旁白",
    bg: "assets/images/bg_library.jpg",
    char: "",
    gainItem: "残缺丹方",
    next: "meet_bro1"
  },
  // 认识师兄妹（扩充）
  meet_bro1: {
    text: "次日在演武场，你见到了大师兄石坚。他身材魁梧，背负一柄无锋重剑，正指导着十几名外门弟子练功。见你到来，他停下动作，憨厚一笑：「你就是叶师弟？我姓石名坚，以后修炼上若有困惑，尽管来找我。虽然我天资愚钝，但一些笨法子或许能帮到你。」",
    speaker: "石坚",
    bg: "assets/images/bg_arena.jpg",
    char: "assets/images/bro1.png",
    next: "bro1_guide"
  },
  bro1_guide: {
    text: "石坚亲自为你演示了一套基础拳法，每一拳都虎虎生风。他说：「修真不仅是打坐，体魄同样重要。每日挥拳千次，方可锤炼经脉。」你跟着他打了半个时辰，虽累得气喘吁吁，却觉体内灵力流转更为顺畅。",
    speaker: "石坚",
    bg: "assets/images/bg_arena.jpg",
    char: "assets/images/bro1.png",
    effect: { cultivation: 8, stamina: -10 },
    next: "meet_bro2"
  },
  meet_bro2: {
    text: "这时云逸飘然而至，他一身白衣，剑眉星目，笑容中带着几分玩世不恭：「哟，大师兄又在欺负新人了？叶师弟别怕，我这里有瓶回灵散，喝了就不累了。」说着递过一个琉璃小瓶。石坚无奈摇头：「云师弟，你莫要带坏叶师弟。」云逸却朝你挤了挤眼。",
    speaker: "云逸",
    bg: "assets/images/bg_arena.jpg",
    char: "assets/images/bro2.png",
    gainItem: "回灵散",
    next: "choose_brotherhood"
  },
  choose_brotherhood: {
    text: "云逸凑近低声说：「怎么样，要不要跟我去后山捉灵兔？比在这儿打拳有趣多了。」石坚咳了一声，显然不赞同。你有些犹豫，不知该听谁的建议。",
    speaker: "云逸",
    bg: "assets/images/bg_arena.jpg",
    char: "assets/images/bro2.png",
    choices: [
      { text: "听大师兄的，继续练拳", next: "stay_train", effect: { cultivation: 5 } },
      { text: "跟二师兄去后山", next: "go_rabbit", effect: { spirit: 5 } }
    ]
  },
  stay_train: {
    text: "你决定留下来与石坚一同修炼。石坚欣慰地点头，将一套淬体拳倾囊相授。你挥汗如雨，直至黄昏，石坚才让你停下。他拍了拍你的肩膀：「叶师弟，根基牢固，日后才能走得更高。」你虽然疲惫，但感觉与石坚的关系拉近了许多。",
    speaker: "石坚",
    bg: "assets/images/bg_arena.jpg",
    char: "assets/images/bro1.png",
    next: "meet_sis1"
  },
  go_rabbit: {
    text: "你随云逸溜到后山，那里古木参天，溪水潺潺。云逸像变戏法般从树洞中掏出两只肥硕的灵兔，嬉笑道：「今晚加餐！这玩意儿烤着吃，能涨灵力。」你们在山溪边生火烤兔，他侃侃而谈江湖趣事，你听得津津有味。临别时，他送你一枚小小的剑形玉佩，说是防身小玩意儿。",
    speaker: "云逸",
    bg: "assets/images/bg_forest.jpg",
    char: "assets/images/bro2.png",
    gainItem: "剑形玉佩",
    effect: { spirit: 5 },
    next: "meet_sis1"
  },
  meet_sis1: {
    text: "几天后，你在药圃遇到了大师姐苏婉。她身着素雅长裙，正弯腰照料着一片灵草。察觉你的到来，她直起身，用手背擦了擦额角的细汗，温婉笑道：「叶师弟，我是苏婉，负责管理这片药园。这里种植的聚灵草和凝血花，是炼制固本培元丹药的主材。你若需要，可随时来寻我。」她手中还提着一只竹篮，里面是刚采摘的灵草。",
    speaker: "苏婉",
    bg: "assets/images/bg_herb_garden.jpg",
    char: "assets/images/sis1.png",
    next: "sis1_gift"
  },
  sis1_gift: {
    text: "苏婉从竹篮中挑出几株品相最好的聚灵草，用丝帕包好递给你：「这些聚灵草你拿去泡茶喝，能稳固修为。初入仙途，根基最为重要。」你接过草叶，闻到了一股清雅的药香。她的手很软，指尖却有些粗糙，那是长年侍弄灵草留下的痕迹。",
    speaker: "苏婉",
    bg: "assets/images/bg_herb_garden.jpg",
    char: "assets/images/sis1.png",
    gainItem: "聚灵草×5",
    effect: { spirit: 3 },
    next: "meet_dan_feng"
  },
  // 新增人物：炼丹狂人凤轩
  meet_dan_feng: {
    text: "告别苏婉后，你在炼丹房外听到一声炸响，随后一个满脸焦黑的青年冲了出来，口中念念有词：「不对不对，比例还是错了……」他正是炼丹堂的弟子凤轩，人称“丹痴”。他看见你，眼睛一亮：「你是新来的？快来帮我试试新炼的丹药！」他手中捏着一颗五颜六色的药丸，冒着黑烟。",
    speaker: "凤轩",
    bg: "assets/images/bg_alchemy_room.jpg",
    char: "assets/images/char_feng_xuan.png",
    choices: [
      { text: "欣然试药（勇气可嘉）", next: "test_drug", effect: { stamina: -20, cultivation: 15 } },
      { text: "婉言谢绝（惜命要紧）", next: "refuse_drug" }
    ]
  },
  test_drug: {
    text: "你咬咬牙吞下药丸，瞬间腹中如翻江倒海，但随即一股暖流涌现，灵力竟增长了一小截。凤轩大喜过望：「成功了！虽然副作用是拉肚子，但果然有效！」你捂着肚子，欲哭无泪，但也因此与凤轩成了莫逆之交。他承诺以后炼出新药都优先给你。",
    speaker: "凤轩",
    bg: "assets/images/bg_alchemy_room.jpg",
    char: "assets/images/char_feng_xuan.png",
    gainItem: "凤轩的承诺",
    effect: { cultivation: 15, stamina: -20 },
    next: "meet_sis2"
  },
  refuse_drug: {
    text: "你坚决地摇了摇头，凤轩一脸失望：「唉，又一个不识货的。」但他并未生气，反而塞给你一本《常见丹毒辨识》：「拿着，以后想通了再来找我。」你苦笑不得，将书收入怀中。",
    speaker: "凤轩",
    bg: "assets/images/bg_alchemy_room.jpg",
    char: "assets/images/char_feng_xuan.png",
    gainItem: "常见丹毒辨识",
    next: "meet_sis2"
  },
  meet_sis2: {
    text: "最后，你在宗门后山的古松下见到了小师妹灵儿。她扎着双鬟，正蹲在地上用草叶逗弄一只受伤的小鹤。见你走近，她抬起头，露出一对亮晶晶的大眼睛：「你就是叶师兄？我叫灵儿，是师尊最小的弟子。这只小鹤翅膀受伤了，你能帮我一起照顾它吗？」她的声音软糯，带着几分央求。",
    speaker: "灵儿",
    bg: "assets/images/bg_forest.jpg",
    char: "assets/images/sis2.png",
    next: "sis2_heal"
  },
  sis2_heal: {
    text: "你与灵儿一同为小鹤包扎伤口，灵儿从怀里摸出一枚鲜红的朱果，掰成小块喂给小鹤。她轻轻哼着不知名的歌谣，小鹤安静了下来。灵儿转头对你笑：「师兄真好，以后我们可以一起修炼吗？我一个人好无聊的。」她从怀中又取出一枚朱果递给你：「这个给你，可甜了。」",
    speaker: "灵儿",
    bg: "assets/images/bg_forest.jpg",
    char: "assets/images/sis2.png",
    gainItem: "朱果",
    effect: { spirit: 4 },
    next: "master_final"
  },
  // 原犹豫和拒绝分支（保留但简化跳转，避免重复）
  hesitate: {
    text: "你迟疑不决，老者轻叹一声，但并未离去，而是耐心地为你讲述修真世界的精彩与残酷。最终，你被他的真诚打动，跪地拜师。",
    speaker: "旁白",
    bg: "assets/images/bg_tavern.jpg",
    char: "assets/images/char_master.png",
    effect: { spirit: 2 },
    next: "agree"
  },
  refuse: {
    text: "你冷冷拒绝，老者拂袖而去。然而你独自走出客栈后，却遭遇山间妖兽，险些丧命。危急时刻，青云真君去而复返救下你。你终于明白，若无仙途，凡人终为蝼蚁，遂真心拜入青云宗。",
    speaker: "旁白",
    bg: "assets/images/bg_tavern.jpg",
    char: "assets/images/char_master.png",
    effect: { demon: 5 },
    next: "agree"
  },
  master_final: {
    text: "青云真君召你至大殿，当着众长老的面宣布你正式成为内门弟子。他赐你一件法器「青玄玉佩」，并沉声道：「修真之路，荆棘遍布，望你坚守本心，莫入歧途。」你跪拜谢恩，目光扫过殿中同门——石坚、云逸、苏婉、灵儿，还有韩厉、葛青、凤轩等，你心中涌起一股归属感。自此，叶尘的修真之路真正开始。",
    speaker: "青云真君",
    bg: "assets/images/bg_main_hall.jpg",
    char: "assets/images/char_master.png",
    gainItem: "青玄玉佩",
    effect: { cultivation: 20, honor: 10 },
    next: "ch1_end"
  },
  ch1_end: {
    text: "接下来的数月，你每日白天随石坚练拳，傍晚跟苏婉学习药草知识，夜晚则到藏经阁研读功法。云逸时常拉你偷溜下山打牙祭，灵儿隔三差五送来自制的点心。你的修为稳步提升，与同门感情日渐深厚。这一日，宗门突然敲响警钟——三年一度的宗门小比即将开始，优胜者将获得进入玄天秘境试炼的资格。",
    speaker: "旁白",
    bg: "assets/images/bg_arena.jpg",
    char: "",
    next: "ch2_start"
  }
};