const storyChapter3 = {
  ch3_start: {
    text: "下山前夜，苏婉敲开你的洞府，送来一件她亲手缝制的内甲：「这是用千年冰蚕丝织的，能抵御一次致命攻击。」她的眼下有些青黑，显然熬了好几夜。你刚想道谢，灵儿也从门后探出头，抱着一大包灵果：「叶哥哥！我偷偷摘了好多好多灵果，你带着路上吃！」她一边说一边往你怀里塞。你哭笑不得地看着两位师妹，心中暖意融融。次日清晨，你与苏婉、云逸，以及那位神秘的柳如烟师姐一同踏上下山之路。",
    speaker: "旁白",
    bg: "assets/images/bg_herb_garden.jpg",
    char: "assets/images/sis1.png",
    gainItem: "冰蚕内甲",
    next: "ch3_meet_liu"
  },
  ch3_meet_liu: {
    text: "山门前，一位身着红裙的绝色女子倚栏而立，正是柳如烟。她生得丹凤眼、柳叶眉，嘴角永远挂着一丝让人捉摸不透的笑意。见你们到来，她轻摇团扇：「哟，叶师弟，久仰大名。我叫柳如烟，天机阁弟子，此行的情报由我负责。记住了——下山之后，凡事听我的，否则……会死的哦。」最后那句话她说得轻描淡写，却让人不寒而栗。云逸悄悄对你耳语：「这女人不好惹，千万小心。」",
    speaker: "柳如烟",
    bg: "assets/images/bg_mountain_gate.jpg",
    char: "assets/images/char_liu_ruyan.png",
    next: "ch3_choice_route"
  },
  ch3_choice_route: {
    text: "柳如烟摊开地图：「灭门事件有三处线索——青石镇的拍卖场、西陲的妖族领地、以及南疆的散修坊市。我们人手有限，必须选一处优先调查。我的建议是拍卖场，那里鱼龙混杂，消息最灵通。」苏婉则认为妖族领地可能有更多蛛丝马迹。云逸无所谓，说听你的。柳如烟似笑非笑地看向你：「叶师弟，你来定。」",
    speaker: "柳如烟",
    bg: "assets/images/bg_mountain_gate.jpg",
    char: "assets/images/char_liu_ruyan.png",
    choices: [
      { text: "去青石镇拍卖场（柳如烟赞同）", next: "ch3_auction", effect: { spirit: 2 } },
      { text: "前往妖族领地（苏婉赞同）", next: "ch3_fox_forest", effect: { honor: 3 } }
    ]
  },
  ch3_auction: {
    text: "你们来到青石镇，这座修仙者聚集的小镇今日格外热闹——一场大型拍卖会正在举行。拍卖场是一座三层高的华丽楼阁，门口站着两名筑基期护卫，进入需缴纳十枚灵石。柳如烟亮出一块玉牌，护卫恭敬让路。她回头得意一笑：「天机阁的牌子，好用吧？」拍卖场内部金碧辉煌，无数修士摩肩接踵。你们落座不久，柳如烟突然面色一凛，以神识传音道：「注意二楼雅间——幽冥宗的人也在。」",
    speaker: "柳如烟",
    bg: "assets/images/bg_auction.jpg",
    char: "assets/images/char_liu_ruyan.png",
    effect: { spiritStone: -10 },
    next: "ch3_auction_event"
  },
  ch3_auction_event: {
    text: "拍卖品一件件上场，从法器到丹药应有尽有。期间，压轴宝物「千年玄铁」被推出，全场哗然。柳如烟低声说：「这块玄铁是铸造顶级法剑的主材，幽冥宗的人必然出价。我们不妨抬价，逼他们多花钱。」此时拍卖师举槌：「千年玄铁，底价100灵石！」幽冥宗雅间立刻有人叫价：「150！」",
    speaker: "拍卖师",
    bg: "assets/images/bg_auction.jpg",
    char: "",
    choices: [
      { text: "配合柳如烟，抬价搅局", next: "ch3_bid", effect: { spirit: 3 } },
      { text: "按兵不动，静观其变", next: "ch3_watch_bid" }
    ]
  },
  ch3_bid: {
    text: "你举牌叫价「200！」全场目光聚焦。幽冥宗那边沉默片刻，咬牙加到「250！」柳如烟扇子轻摇，示意继续。你喊出「300！」幽冥宗雅间传来茶杯碎裂的声音。最终他们以350灵石高价拿下玄铁，而你们成功消耗了对方大量财力。柳如烟笑靥如花：「干得好，叶师弟。我已经让人在玄铁上做了标记，他们去哪儿我们都能跟踪。」",
    speaker: "柳如烟",
    bg: "assets/images/bg_auction.jpg",
    char: "assets/images/char_liu_ruyan.png",
    effect: { spirit: 3 },
    next: "ch3_auction_after"
  },
  ch3_watch_bid: {
    text: "你选择观望。幽冥宗最终以280灵石拿下玄铁。柳如烟轻叹：「可惜，不过无妨。我早已派人在玄铁上做了手脚。」她拿出一面小铜镜，镜中竟显示着幽冥宗的移动轨迹。众人对这位天机阁师姐的手段愈发佩服。",
    speaker: "柳如烟",
    bg: "assets/images/bg_auction.jpg",
    char: "assets/images/char_liu_ruyan.png",
    next: "ch3_auction_after"
  },
  ch3_auction_after: {
    text: "拍卖会结束后，柳如烟带你进入一间密室，那里已有她事先安排的线人。线人禀报：「幽冥宗在收集五行至宝，似乎在进行某种禁忌阵法。」柳如烟皱眉：「五行至宝……传闻凑齐后可开启上古魔神封印。我们必须阻止。」她转向你：「叶尘，我有预感，此事的根源在妖族。我们需要去一趟西陲妖林。」",
    speaker: "柳如烟",
    bg: "assets/images/bg_auction.jpg",
    char: "assets/images/char_liu_ruyan.png",
    next: "ch3_fox_forest"
  },
  ch3_fox_forest: {
    text: "数日后，你们踏入西陲妖林。这里雾气弥漫，古木奇形怪状，时有小妖探头探脑。苏婉施展追踪术，指向林中深处：「有大量妖气聚集。」你们深入不久，便听到激烈的打斗声——一名狐耳少女正被七八个幽冥宗弟子围攻。她浑身浴血，手中一面玉盾已布满裂痕，但仍咬牙不退。她的身后，是一座刻满符文的祭坛，祭坛上供奉着一枚散发柔和光芒的玉佩。",
    speaker: "苏婉",
    bg: "assets/images/bg_fox_forest.jpg",
    char: "assets/images/char_fox_girl.png",
    next: "ch3_fox_help"
  },
  ch3_fox_help: {
    text: "狐耳少女见到你们，绝望的眼中闪过一丝希望：「求求你们——这是狐族圣物，绝不能落入魔道之手！」幽冥宗为首之人狞笑：「又来几个送死的，一并料理了！」苏婉已取出符箓，云逸拔剑出鞘，柳如烟展开阵盘。你——",
    speaker: "小九",
    bg: "assets/images/bg_fox_forest.jpg",
    char: "assets/images/char_fox_girl.png",
    choices: [
      { text: "一马当先，冲上去救人", next: "ch3_save_fox", effect: { honor: 5, cultivation: 10 } },
      { text: "让柳如烟布阵，从侧翼夹击", next: "ch3_flank_attack", effect: { spirit: 5 } }
    ]
  },
  ch3_save_fox: {
    text: "你飞身而上，一剑架住劈向少女的刀锋。幽冥宗弟子被震退数步，狞笑道：「青云宗的小子，找死！」你与他缠斗数个回合，苏婉从旁辅助，不断施加护盾和回复术。云逸剑光如电，从侧面连续刺倒数人。柳如烟的阵法终于完成，困住了最后两名敌修。狐耳少女脱力跌坐在地，泪水涟涟：「谢谢……谢谢你们……我叫小九，是狐族最后的祭司。」",
    speaker: "小九",
    bg: "assets/images/bg_fox_forest.jpg",
    char: "assets/images/char_fox_girl.png",
    effect: { honor: 5, cultivation: 10 },
    next: "ch3_fox_story"
  },
  ch3_flank_attack: {
    text: "你示意柳如烟布阵，自己绕到幽冥宗侧翼。阵光亮起，幽冥宗弟子阵脚大乱，你趁虚而入，与云逸前后夹击，很快击溃了这支魔道小队。狐耳少女跪倒在祭坛前，泣不成声：「圣物……保住了……」她颤抖着向你们行了一个古老的狐族礼节。",
    speaker: "旁白",
    bg: "assets/images/bg_fox_forest.jpg",
    char: "assets/images/char_fox_girl.png",
    effect: { spirit: 5 },
    next: "ch3_fox_story"
  },
  ch3_fox_story: {
    text: "小九将你们带到一处隐秘的树洞中休整。她一边包扎伤口，一边讲述：「我们狐族世代守护圣物『天狐玉』，幽冥宗不知从何处得知消息，连日来袭。族中长老们……都已战死，只剩我了。」她说着又红了眼眶。柳如烟问：「他们要天狐玉做什么？」小九咬牙：「他们说要用五行至宝打开什么封印，天狐玉就是木行圣物。我宁死也不会交给他们。」她从颈上取下天狐玉，郑重放入你掌心：「大哥哥，你救了我，这东西交给你保管。我觉得……你比任何人都值得信任。」",
    speaker: "小九",
    bg: "assets/images/bg_fox_cave.jpg",
    char: "assets/images/char_fox_girl.png",
    gainItem: "天狐玉",
    effect: { spirit: 10, honor: 5 },
    next: "ch3_war_news"
  },
  ch3_war_news: {
    text: "这边刚刚安顿好小九，柳如烟的传讯玉符突然亮起——是青云宗的紧急军情。她读完信息，面色骤变：「出大事了。幽冥宗联合数个魔道宗门，已向正道联盟宣战。目前青云宗、天剑宗、灵药谷等七大宗门的主力正在断魂崖一线与魔道大军对峙。大师兄石坚已率青云宗先遣队驰援前线，宗门命我等立即归队！」云逸霍然起身：「大师兄有危险！我们马上回去！」小九也攥紧了拳头：「我也去！幽冥宗欠我的血债，我要亲手讨还。」",
    speaker: "柳如烟",
    bg: "assets/images/bg_fox_cave.jpg",
    char: "assets/images/char_liu_ruyan.png",
    next: "ch4_war_start"
  },
  // 第四章：天下逐鹿
  ch4_war_start: {
    text: "你们日夜兼程赶到断魂崖，眼前景象令所有人倒吸一口凉气。天地间黑云压顶，地面上无数修士厮杀混战，法宝的光芒与魔气碰撞出震耳欲聋的爆响。正道联盟的防线被撕开多处，青云宗的山门阵法已在勉强支撑。你远远看到石坚站在一块巨石上，重剑横扫，硬生生逼退数名魔修，但他身上的战甲已被鲜血染透。云逸红了眼，不等命令便冲了过去：「大师兄！」",
    speaker: "旁白",
    bg: "assets/images/bg_battlefield.jpg",
    char: "",
    next: "ch4_choice_side"
  },
  ch4_choice_side: {
    text: "你正要跟着冲出去，一道黑影从天而降，拦住了你的去路。黑雾散去，幽月的身影显现。她比秘境中更加冷峻，周身缠绕着浓郁的魔气，但眼神中却有一丝复杂：「叶尘，停步。」她抬起手，示意身后的魔道军队暂时停攻。「有些话，我必须现在对你说。」她深吸一口气：「幽冥宗已启动上古血祭大阵，一旦完成，断魂崖方圆千里的生灵都将被献祭。正道根本挡不住——除非，有人从内部破坏阵眼。我……我可以帮你，但条件是，你必须假装倒戈入魔，随我入魔宫。」",
    speaker: "幽月",
    bg: "assets/images/bg_battlefield.jpg",
    char: "assets/images/char_demon_girl.png",
    choices: [
      { text: "接受幽月提议，假意入魔", next: "ch4_infiltrate", effect: { demon: 15, spirit: 10 } },
      { text: "拒绝，正面迎战", next: "ch4_fight_good", effect: { honor: 20 } },
      { text: "要求幽月直接倒戈正道", next: "ch4_ask_turn", effect: { honor: 5, spirit: 5 } }
    ]
  },
  ch4_infiltrate: {
    text: "你凝视幽月的眼睛，在其中看到了前所未有的真诚。你深吸一口气，对身边的苏婉和云逸低语：「相信我。」然后高声宣布：「青云宗叶尘，愿归顺幽冥宗！」正道阵营一片哗然，苏婉捂住了嘴，云逸怒喝道：「叶尘你疯了！」但柳如烟却若有所思地按住了云逸的剑柄。幽月微微点头，上前将一副特制的魔气锁铐虚扣在你的手腕上，而后低声说：「随我来。真正的阵眼在魔宫地底。」",
    speaker: "幽月",
    bg: "assets/images/bg_battlefield.jpg",
    char: "assets/images/char_demon_girl.png",
    effect: { demon: 15, spirit: 10 },
    next: "ch4_demon_palace"
  },
  ch4_fight_good: {
    text: "你毅然拒绝，拔剑出鞘：「幽月，正魔不两立。但若你愿脱离魔道，我叶尘以性命担保，青云宗定会接纳你。」幽月眼中闪过一丝痛楚，咬牙道：「……晚了。我已无退路。」她转身喝令魔军进攻，大战全面爆发。你与石坚、云逸并肩杀敌，苏婉不断为伤者疗伤。柳如烟启动预先布置的阵盘，轰开一条血路。但你知道，若不破坏阵眼，正道终将力竭败亡。",
    speaker: "旁白",
    bg: "assets/images/bg_battlefield.jpg",
    char: "",
    effect: { honor: 20, cultivation: 15 },
    next: "ch4_final_battle"
  },
  ch4_ask_turn: {
    text: "你伸手握住幽月的手：「不要回去。留下来，我们一起阻止这场浩劫。」幽月浑身一震，眼眶泛红：「叶尘……你真的愿意接纳一个手上沾满鲜血的魔女吗？」你重重点头。幽月眼中泪水终于滑落，她回身一剑，斩碎了身后幽冥宗的军旗：「我幽月，今日叛出幽冥宗！」魔军顿时大乱，而她已飞快向你指明阵眼所在：「阵眼在魔宫地下百丈，需五行至宝克制。天狐玉在你手中，还有机会！」",
    speaker: "幽月",
    bg: "assets/images/bg_battlefield.jpg",
    char: "assets/images/char_demon_girl.png",
    effect: { honor: 10, spirit: 5 },
    next: "ch4_demon_palace"
  },
  ch4_demon_palace: {
    text: "你带着幽月、云逸、小九杀入魔宫。沿途机关重重，魔兵不断涌出。小九祭出天狐玉，释放出古老妖力为你们开道。云逸的剑快如流星，每一剑都带着对师兄安危的焦灼。幽月熟门熟路地引导你们避开最危险的禁制。终于，你们在魔宫最深处看到了那座血红色的阵眼——无数冤魂在其中翻涌哀嚎，一个巨大的黑色虚影正在缓慢凝聚成形。幽月颤抖着说：「那是……魔尊的分身投影。如果完全降临，无人能挡。」",
    speaker: "幽月",
    bg: "assets/images/bg_demon_palace.jpg",
    char: "assets/images/char_demon_lord.png",
    next: "ch4_final_choice"
  },
  ch4_final_battle: {
    text: "你与正道同门突破魔宫外殿，一路浴血。石坚以重剑强破魔宫大门，柳如烟以阵法困住魔宫守卫。你们冲入地底，看到那座血色阵眼时，所有人都感到一股来自灵魂深处的威压。魔尊的虚影已在阵眼中若隐若现，散发出的气息足以让元婴修士胆寒。但你握紧手中剑——身后是宗门、是师兄妹、是无数无辜生灵。你没有任何退路。",
    speaker: "旁白",
    bg: "assets/images/bg_demon_palace.jpg",
    char: "assets/images/char_demon_lord.png",
    next: "ch4_final_choice"
  },
  ch4_final_choice: {
    text: "幽月急促地说：「要破坏阵眼，必须以五行至宝为引，输入全部灵力。但施术者将被魔力反噬……可能形神俱灭。」她看着你，嘴唇微颤：「让我来。我欠这世间太多，该还了。」但小九也站了出来：「不！天狐玉在我族中传承千年，只有我才能激发它的全部力量。」云逸握紧剑柄：「别说丧气话，大家一起注入灵力，分担反噬，不就行了？」时间紧迫，魔尊虚影正在加速凝实。你必须立刻决定。",
    speaker: "幽月",
    bg: "assets/images/bg_demon_palace.jpg",
    char: "assets/images/char_demon_girl.png",
    choices: [
      { text: "一同分担，生死与共", next: "ch4_together", effect: { honor: 15, spirit: 15 } },
      { text: "独自承担，保护所有人", next: "ch4_sacrifice", effect: { honor: 25, demon: 5 } }
    ]
  },
  ch4_together: {
    text: "你伸出手，幽月、云逸、小九、还有随后赶到的苏婉和柳如烟，所有人都将手叠在一起。你们将各自灵力与五行至宝共鸣，一股七彩光芒冲天而起，狠狠撞向血色阵眼。魔尊虚影发出震天怒吼，却在光芒中寸寸崩碎。你们被巨大的冲击波掀飞，但在落地前，无数双手紧紧拉住了彼此。当硝烟散去，断魂崖上的魔云终于散开，阳光穿透云层，洒在满目疮痍的大地上。幽月靠在你肩头，虚弱地笑了：「叶尘……天亮了。」",
    speaker: "旁白",
    bg: "assets/images/bg_battlefield.jpg",
    char: "",
    effect: { honor: 15, spirit: 15 },
    next: "check_endings"
  },
  ch4_sacrifice: {
    text: "你推开所有人，独自冲向阵眼。将天狐玉与自己全部灵力一同燃烧，化作一道刺目的白光贯穿阵眼。身后传来幽月撕心裂肺的呼喊、云逸的怒吼、灵儿遥远的哭喊——但这些声音渐渐模糊。魔尊虚影在你的光芒中消散，血色阵眼炸裂成无数碎片。你感觉身体正在碎裂，却在最后一刻被一双温暖的臂弯接住。是幽月，她不顾一切冲入爆炸中心，替你承受了另一半反噬。你们双双坠落在废墟之中，她的眼角滑落一滴泪珠，正好落在你的脸颊上。",
    speaker: "旁白",
    bg: "assets/images/bg_demon_palace.jpg",
    char: "assets/images/char_demon_girl.png",
    effect: { honor: 25, demon: 5, stamina: -50 },
    next: "check_endings"
  },
  // 五种结局
  ending_good_fly: {
    text: "大战之后，你修为接连突破，直达化神大圆满。在一个满月之夜，你于青云宗后山引动天劫，九九八十一道天雷淬炼金身。苏婉、灵儿、云逸、石坚……所有人都聚在山下为你送行。天雷过后，一道七彩光柱自天而降，你回身望了一眼这熟悉的天地，向众人挥了挥手，而后踏光而去，破碎虚空，飞升仙界。千年后，青云宗为你立像，香火不绝。你于仙界回首，凡尘挚友红颜皆已轮回，唯有大道永恒。",
    speaker: "飞升·完",
    bg: "assets/images/bg_void.jpg",
    char: "",
    next: null
  },
  ending_harem: {
    text: "你不愿孤身飞升，更不忍辜负任何一份情意。苏婉的温柔、灵儿的纯真、幽月的炽烈、小九的依恋、柳如烟的风情——你向所有人坦白了心意，本以为会被唾弃，却不料她们早已私下商量妥当。幽月说：「反正这世间也没什么值得留恋的。」柳如烟笑：「我天机阁有一处秘境，外人找不到，正适合隐居。」于是你携五位红颜归隐桃源，建了一座世外仙居。从此世间再无剑斩星辰的叶尘，只有一位被五位娘子围着团团转的“叶郎”。",
    speaker: "归隐·完",
    bg: "assets/images/bg_forest.jpg",
    char: "",
    next: null
  },
  ending_demon_lord: {
    text: "你入魔之后，幽月伴你左右，两人联手横扫魔道诸宗，最终在魔宫废墟上建立了新的秩序。你登临魔尊之位，却一改旧制，严禁滥杀无辜，与正道签订停战盟约。天下三分——正道、魔道、妖族，各守疆域。幽月站在你身侧，冷眸中多了一抹温柔：「叶尘，从今往后，这天地便是我们的了。正也好，魔也罢，只要与你同行，我都甘愿。」",
    speaker: "魔尊·完",
    bg: "assets/images/bg_demon_palace.jpg",
    char: "assets/images/char_demon_lord.png",
    next: null
  },
  ending_alone_good: {
    text: "大战虽胜，但代价惨重。石坚重伤后修为尽废，云逸在最后决战中失去了一条手臂，苏婉为救你耗尽灵力，寿元大减。你虽成元婴，却发现身边之人或离去或衰老。青云宗后山，你独坐孤石，望着天边落日，耳边回荡着往日同门的欢声笑语，却再也回不去了。仙路漫漫，最难耐的，原来是孤独。",
    speaker: "孤身·完",
    bg: "assets/images/bg_void.jpg",
    char: "",
    next: null
  },
  ending_alone_demon: {
    text: "你堕入魔道，力量暴涨，却遭魔气反噬。清醒的时间越来越少，杀戮的欲望越来越强。终于，你在一次失控中亲手将剑刺入了赶来救你的石坚胸膛。那一刻，你猛然清醒，看着师兄倒在血泊中微笑的脸，你彻底崩溃。你抱着师兄的尸体跌跌撞撞走进荒野，意识消散前，仿佛看见苏婉和灵儿在远方呼唤……「叶尘……回家吧。」你闭上眼睛，再未睁开。",
    speaker: "陨落·完",
    bg: "assets/images/bg_void.jpg",
    char: "",
    next: null
  }
};