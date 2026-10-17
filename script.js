/* FUTURE GAMES - COMPLETE SCRIPT */

/*
  Platform classification:
  - PS4-only unsupported games are excluded from PS4.
  - PS4 games can also be played on PS5 through backward compatibility.
  - Platform support is separate from price availability.
*/
const PS4_UNSUPPORTED_IDS = new Set([2, 3, 4, 5, 6, 8, 35, 36, 37, 39]);

const games = [
    g(1,"FC 26",[750,750,700,900],"1–4 Players","Up to 22 Players","Sports / Football","Sports","POPULAR","images/fc-26.jpg","تجربة كرة قدم حديثة تقدم مباريات تنافسية وأوضاع لعب متعددة، مع تطوير أسلوب اللعب وإدارة الفريق والمنافسة محليًا وعبر الإنترنت.",{
        screenshots:[
            "images/fc-26-1.jpg","images/fc-26-2.jpg","images/fc-26-3.jpg",
            "images/fc-26-4.jpg","images/fc-26-5.jpg","images/fc-26-6.jpg",
            "images/fc-26-7.jpg","images/fc-26-8.jpg","images/fc-26-9.jpg",
            "images/fc-26-10.jpg"
        ],
        video:"videos/fc-26.mp4",
        videoTitle:"EA SPORTS FC 26 Trailer"
    }),

    g(2,"Ghost of Yōtei",["لا تدعم",null,null,null],"1 Player","Up to 4 Players","Action / Samurai / Open World","Action","NEW","images/ghost-of-yotei.jpg","مغامرة ساموراي تدور في شمال اليابان خلال القرن السابع عشر، حيث تخوض Atsu رحلة انتقام عبر مناظر طبيعية واسعة ومعارك بالسيف. وتتوفر أيضًا Ghost of Yōtei Legends كتجربة تعاونية عبر الإنترنت.",{
        screenshots:[
            "images/ghost-of-yotei-1.jpg","images/ghost-of-yotei-2.jpg",
            "images/ghost-of-yotei-3.jpg","images/ghost-of-yotei-4.jpg",
            "images/ghost-of-yotei-5.jpg","images/ghost-of-yotei-6.jpg",
            "images/ghost-of-yotei-7.jpg","images/ghost-of-yotei-8.jpg",
            "images/ghost-of-yotei-9.jpg","images/ghost-of-yotei-10.jpg"
        ],
        video:"videos/ghost-of-yotei.mp4",
        videoTitle:"Ghost of Yōtei Trailer"
    }),

    g(3,"Assassin's Creed Shadows",["لا تدعم",null,null,1900],"1 Player","غير متاح","Action / Stealth / Open World","Action","NEW","images/assassin-s-creed-shadows.jpg","تدور أحداث اللعبة في اليابان الإقطاعية، وتتيح لك التبديل بين Naoe وYasuke، مع التخفي والاستكشاف والقتال وبناء أسلوبك الخاص في مواجهة أعداء متنوعين.",{
        screenshots:[
            "images/assassin-s-creed-shadows-1.jpg","images/assassin-s-creed-shadows-2.jpg",
            "images/assassin-s-creed-shadows-3.jpg","images/assassin-s-creed-shadows-4.jpg",
            "images/assassin-s-creed-shadows-5.jpg","images/assassin-s-creed-shadows-6.jpg",
            "images/assassin-s-creed-shadows-7.jpg","images/assassin-s-creed-shadows-8.jpg",
            "images/assassin-s-creed-shadows-9.jpg","images/assassin-s-creed-shadows-10.jpg"
        ],
        video:"videos/assassin-s-creed-shadows.mp4",
        videoTitle:"Assassin's Creed Shadows Trailer"
    }),

    g(4,"Split Fiction",[1600,1600,null,1900],"1–2 Players","2 Players","Action / Adventure / Co-op","Adventure","FEATURED","images/split-fiction.jpg","مغامرة تعاونية مصممة لشخصين، تنتقل فيها Mio وZoe بين عوالم الخيال العلمي والفانتازيا، وتعتمد مراحلها على التعاون والتنسيق بين اللاعبين.",{
        screenshots:[
            "images/split-fiction-1.jpg","images/split-fiction-2.jpg",
            "images/split-fiction-3.jpg","images/split-fiction-4.jpg",
            "images/split-fiction-5.jpg","images/split-fiction-6.jpg",
            "images/split-fiction-7.jpg","images/split-fiction-8.jpg",
            "images/split-fiction-9.jpg","images/split-fiction-10.jpg"
        ],
        video:"videos/split-fiction.mp4",
        videoTitle:"Split Fiction Trailer"
    }),

        g(40,"God of War Ragnarök",[350,350,300,400],"1 Player","1 Player","Action / Adventure","Action","POPULAR","images/god-of-war-ragnarok.jpg",
        [
        "images/god-of-war-ragnarok-1.jpg",
        "images/god-of-war-ragnarok-2.jpg",
        "images/god-of-war-ragnarok-3.jpg",
        "images/god-of-war-ragnarok-4.jpg",
        "images/god-of-war-ragnarok-5.jpg",
        "images/god-of-war-ragnarok-6.jpg",
        "images/god-of-war-ragnarok-7.jpg",
        "images/god-of-war-ragnarok-8.jpg",
        "images/god-of-war-ragnarok-9.jpg",
        "images/god-of-war-ragnarok-10.jpg"
        ],
        video:"videos/god-of-war-ragnarok.mp4",
        videoTitle:"God of War Ragnarök Official Trailer")

    g(6,"Spider-Man 2 (Arabic)",["لا تدعم",null,null,1600],"1 Player","غير متاح","Action / Superhero / Open World","Action","POPULAR","images/spider-man-2-arabic.jpg","تجمع اللعبة بين Peter Parker وMiles Morales في مغامرة واحدة داخل نيويورك، مع تنقل سريع بالويب، وقدرات جديدة، ومعارك ضد أعداء مثل Venom وKraven.",{
        screenshots:[
            "images/spider-man-2-arabic-1.jpg","images/spider-man-2-arabic-2.jpg",
            "images/spider-man-2-arabic-3.jpg","images/spider-man-2-arabic-4.jpg",
            "images/spider-man-2-arabic-5.jpg","images/spider-man-2-arabic-6.jpg",
            "images/spider-man-2-arabic-7.jpg","images/spider-man-2-arabic-8.jpg",
            "images/spider-man-2-arabic-9.jpg","images/spider-man-2-arabic-10.jpg"
        ],
        video:"videos/spider-man-2-arabic.mp4",
        videoTitle:"Marvel's Spider-Man 2 Trailer"
    }),

   g(7,"Spider-Man: Miles Morales",[300,300,250,350],"1 Player","1 Player","Action / Adventure","Action","POPULAR","images/spider-man-miles-morales.jpg","انطلق في مغامرة مع مايلز موراليس وهو يتعلم إتقان قواه الجديدة ويواجه تحديات خطيرة لحماية مدينة نيويورك، مع قتال سريع وحركة مذهلة باستخدام خيوط العنكبوت.",{
    screenshots:[
        "images/spider-man-miles-morales-1.jpg","images/spider-man-miles-morales-2.jpg","images/spider-man-miles-morales-3.jpg",
        "images/spider-man-miles-morales-4.jpg","images/spider-man-miles-morales-5.jpg","images/spider-man-miles-morales-6.jpg",
        "images/spider-man-miles-morales-7.jpg","images/spider-man-miles-morales-8.jpg","images/spider-man-miles-morales-9.jpg",
        "images/spider-man-miles-morales-10.jpg"
    ],
    video:"videos/spider-man-miles-morales.mp4",
    videoTitle:"Marvel's Spider-Man: Miles Morales Official Trailer"
}),

    g(8,"TEKKEN 8",["لا تدعم",null,null,null],"1–2 Players","Up to 16 Players","Fighting","Fighting","POPULAR","images/tekken-8.jpg","لعبة قتال تنافسية تركز على مواجهة شخصيات السلسلة الشهيرة، مع نظام قتال سريع ورسوم سينمائية ومجموعة كبيرة من الحركات والقدرات.",{
        screenshots:[
            "images/tekken-8-1.jpg","images/tekken-8-2.jpg","images/tekken-8-3.jpg",
            "images/tekken-8-4.jpg","images/tekken-8-5.jpg","images/tekken-8-6.jpg",
            "images/tekken-8-7.jpg","images/tekken-8-8.jpg","images/tekken-8-9.jpg",
            "images/tekken-8-10.jpg"
        ],
        video:"videos/tekken-8.mp4",
        videoTitle:"TEKKEN 8 Trailer"
    }),

    g(9,"GTA V",[650,650,500,800],"1 Player","Up to 30 Players","Action / Open World","Action","POPULAR","images/gta-v.jpg","تدور أحداث Grand Theft Auto V في Los Santos، حيث تتقاطع قصص ثلاثة أبطال في عالم مفتوح مليء بالسرقات والمطاردات والمهمات. ويمكن الانتقال إلى GTA Online للعب مع لاعبين آخرين.",{
        screenshots:[
            "images/gta-v-1.jpg","images/gta-v-2.jpg","images/gta-v-3.jpg",
            "images/gta-v-4.jpg","images/gta-v-5.jpg","images/gta-v-6.jpg",
            "images/gta-v-7.jpg","images/gta-v-8.jpg","images/gta-v-9.jpg",
            "images/gta-v-10.jpg"
        ],
        video:"videos/gta-v.mp4",
        videoTitle:"Grand Theft Auto V Trailer"
    }),

    g(10,"It Takes Two",[600,600,500,800],"1–2 Players","2 Players","Adventure / Co-op / Platform","Adventure","FEATURED","images/it-takes-two.jpg","مغامرة تعاونية مصممة بالكامل تقريبًا للعب مع شخص آخر، حيث يتحول Cody وMay إلى دمى ويخوضان رحلة مليئة بالألغاز والتحديات التي تتطلب التعاون.",{
        screenshots:[
            "images/it-takes-two-1.jpg","images/it-takes-two-2.jpg",
            "images/it-takes-two-3.jpg","images/it-takes-two-4.jpg",
            "images/it-takes-two-5.jpg","images/it-takes-two-6.jpg",
            "images/it-takes-two-7.jpg","images/it-takes-two-8.jpg",
            "images/it-takes-two-9.jpg","images/it-takes-two-10.jpg"
        ],
        video:"videos/it-takes-two.mp4",
        videoTitle:"It Takes Two Trailer"
    }),

    g(11,"Call of Duty: Vanguard",[null,null,600,null],"1–2 Players","Up to 48 Players","Action / Shooter / WWII","Action","POPULAR","images/call-of-duty-vanguard.jpg","تقدم حملة تدور خلال الحرب العالمية الثانية إلى جانب أوضاع Multiplayer وZombies، مع معارك سريعة وأسلحة ومواجهات متعددة اللاعبين.",{
        screenshots:[
            "images/call-of-duty-vanguard-1.jpg","images/call-of-duty-vanguard-2.jpg",
            "images/call-of-duty-vanguard-3.jpg","images/call-of-duty-vanguard-4.jpg",
            "images/call-of-duty-vanguard-5.jpg","images/call-of-duty-vanguard-6.jpg",
            "images/call-of-duty-vanguard-7.jpg","images/call-of-duty-vanguard-8.jpg",
            "images/call-of-duty-vanguard-9.jpg","images/call-of-duty-vanguard-10.jpg"
        ],
        video:"videos/call-of-duty-vanguard.mp4",
        videoTitle:"Call of Duty: Vanguard Trailer"
    }),

    g(12,"Call of Duty: Black Ops III",[550,550,550,null],"1–4 Players","Up to 18 Players","Action / Shooter / Zombies","Action","POPULAR","images/call-of-duty-black-ops-iii.jpg","تقدم Black Ops III حملة مستقبلية وأوضاع Multiplayer وZombies، مع قدرات متطورة ومعارك سريعة ومحتوى تعاوني وتنافسي."),

    g(13,"LEGO",[null,null,null,null],"غير محدد","غير محدد","Adventure / LEGO","Adventure","FEATURED","images/lego.jpg","ألعاب LEGO تجمع بين المغامرة والألغاز والكوميديا وشخصيات LEGO القابلة للعب. اسم اللعبة في قائمة الأسعار مكتوب LEGO فقط، لذلك أحتاج اسم إصدار LEGO بالضبط لتأكيد عدد اللاعبين."),

    g(14,"Assassin's Creed Odyssey",[250,250,200,300],"1 Player","1 Player","Action / RPG / Adventure","Action","POPULAR","images/assassins-creed-odyssey.jpg","انطلق في رحلة ملحمية إلى اليونان القديمة، واختر بطلك بين أليكسيوس وكاساندرا، وخض معارك ضد الأعداء والوحوش، واستكشف عالمًا مفتوحًا مليئًا بالأسرار والمهام والقرارات التي تؤثر في مجرى القصة.",{
    screenshots:[
        "images/assassins-creed-odyssey-1.jpg","images/assassins-creed-odyssey-2.jpg","images/assassins-creed-odyssey-3.jpg",
        "images/assassins-creed-odyssey-4.jpg","images/assassins-creed-odyssey-5.jpg","images/assassins-creed-odyssey-6.jpg",
        "images/assassins-creed-odyssey-7.jpg","images/assassins-creed-odyssey-8.jpg","images/assassins-creed-odyssey-9.jpg",
        "images/assassins-creed-odyssey-10.jpg"
    ],
    video:"videos/assassins-creed-odyssey.mp4",
    videoTitle:"Assassin's Creed Odyssey Official Trailer"
}),

    g(15,"Battlefield V",[400,400,400,550],"1 Player","Up to 64 Players","Shooter / WWII","Action","POPULAR","images/battlefield-v.jpg","تعود Battlefield V إلى أجواء الحرب العالمية الثانية من خلال قصص فردية ومعارك Multiplayer واسعة، مع مركبات وأسلحة وخرائط كبيرة ومعارك جماعية."),

    g(16,"Battlefield 4",[400,400,400,550],"1–2 Players","Up to 24 Players","Shooter / Military","Action","POPULAR","images/battlefield-4.jpg","لعبة تصويب عسكرية تجمع بين حملة فردية ومعارك Multiplayer واسعة، وتشتهر بالخرائط الديناميكية والمركبات والبيئات القابلة للتدمير."),

    g(17,"Far Cry 5",[500,500,500,650],"1–2 Players","Up to 12 Players","Action / Shooter / Open World","Action","POPULAR","images/far-cry-5.jpg","تواجه جماعة متطرفة تسيطر على Hope County في مونتانا، وتستكشف عالمًا مفتوحًا وتجمع حلفاء وتخوض القتال منفردًا أو في تعاون مع لاعب آخر."),

    g(18,"Uncharted Bundle",[null,null,null,null],"1 Player","غير متاح","Action / Adventure","Adventure","FEATURED","images/uncharted-bundle.jpg","مجموعة Uncharted تقدم مغامرات سينمائية مليئة بالاستكشاف والألغاز والمطاردات والقتال. إصدار Legacy of Thieves يضم قصتي Uncharted 4 وThe Lost Legacy الفرديتين."),

    g(19,"Resident Evil Village",[null,null,550,null],"1 Player","غير متاح","Survival Horror / Action","Action","FEATURED","images/resident-evil-village.jpg","يعود Ethan Winters في رحلة مرعبة إلى قرية غامضة بحثًا عن ابنته، وسط أعداء مرعبين وألغاز واستكشاف وأجواء رعب وبقاء مكثفة."),

    g(20,"Marvel's Avengers",[null,null,500,null],"1 Player","Up to 4 Players","Action / Superhero / Co-op","Action","FEATURED","images/marvel-s-avengers.jpg","مغامرة أكشن تجمع أبطال Marvel في قصة أصلية، ثم تتيح مهامًا تعاونية يمكن فيها اختيار أبطال مختلفين وتطوير قدراتهم ومعداتهم."),

    g(21,"Batman",[450,450,null,600],"غير محدد","غير محدد","Action / Superhero","Action","POPULAR","images/batman.jpg","مغامرة أكشن في عالم Batman تجمع بين القتال والتخفي والتحقيق والتنقل في مدينة Gotham. اسم اللعبة في قائمة الأسعار مكتوب Batman فقط، لذلك أحتاج اسم الإصدار لتأكيد اللاعبين بدقة."),

    g(22,"Carnival",[400,400,400,500],"1–4 Players","غير متاح","Party / Arcade","Adventure","FEATURED","images/carnival.jpg","مجموعة ألعاب حفلات صغيرة مناسبة للعب الجماعي، تضم تحديات وألعابًا مصغرة سريعة يمكن للأصدقاء والعائلة التنافس فيها."),

    g(23,"Minecraft",[null,null,null,null],"1–4 Players","Up to 8 Players","Sandbox / Survival / Adventure","Adventure","POPULAR","images/minecraft.jpg","عالم مفتوح يعتمد على البناء والاستكشاف وجمع الموارد، ويمكنك إنشاء مبانٍ وأدوات وعوالم كاملة أو مواجهة مخاطر Survival."),

    g(24,"Unravel Two",[400,400,400,550],"1–2 Players","غير متاح","Platform / Puzzle / Co-op","Adventure","FEATURED","images/unravel-two.jpg","مغامرة هادئة تعتمد على شخصيتي Yarny، ويمكن لعبها منفردًا أو بالتعاون المحلي لحل الألغاز وتجاوز العقبات باستخدام الحبل والخيوط."),

    g(25,"Sonic",[null,null,550,null],"غير محدد","غير محدد","Platform / Action","Adventure","POPULAR","images/sonic.jpg","ألعاب Sonic تعتمد على السرعة والجري عبر مراحل مليئة بالعقبات والحلقات والأعداء. اسم اللعبة في قائمة الأسعار مكتوب Sonic فقط، لذلك أحتاج اسم الإصدار لتأكيد عدد اللاعبين."),

    g(26,"Need for Speed Heat",[400,400,null,null],"1 Player","Up to 16 Players","Racing / Open World","Racing","POPULAR","images/need-for-speed-heat.jpg","سباقات شوارع سريعة في Palm City، حيث تتنافس نهارًا في فعاليات رسمية وتخاطر ليلًا في سباقات غير قانونية مع مطاردات الشرطة."),

    g(27,"Need for Speed Payback",[550,550,500,null],"1 Player","Up to 8 Players","Racing / Action","Racing","FEATURED","images/need-for-speed-payback.jpg","سباقات ومطاردات تدور في Fortune Valley، مع سيارات قابلة للتعديل وقصة انتقام وفعاليات متعددة السرعات."),

   g(28,"Mortal Kombat 1",[350,350,300,400],"1–2 Players","Up to 2 Players","Fighting","Fighting","POPULAR","images/mortal-kombat-1.jpg","عُد إلى عالم Mortal Kombat في تجربة قتال جديدة تضم شخصيات مألوفة بقدرات مختلفة، ونظام Kameo Fighters المميز، ومعارك عنيفة وحركات إنهاء سينمائية.",{
    screenshots:[
        "images/mortal-kombat-1-1.jpg","images/mortal-kombat-1-2.jpg","images/mortal-kombat-1-3.jpg",
        "images/mortal-kombat-1-4.jpg","images/mortal-kombat-1-5.jpg","images/mortal-kombat-1-6.jpg",
        "images/mortal-kombat-1-7.jpg","images/mortal-kombat-1-8.jpg","images/mortal-kombat-1-9.jpg",
        "images/mortal-kombat-1-10.jpg"
    ],
    video:"videos/mortal-kombat-1.mp4",
    videoTitle:"Mortal Kombat 1 Official Trailer"
}),

   g(29,"Mortal Kombat 11",[300,300,250,350],"1–2 Players","Up to 2 Players","Fighting","Fighting","POPULAR","images/mortal-kombat-11.jpg","تجربة قتال قوية تضم مجموعة كبيرة من الشخصيات الشهيرة، مع نظام قتال متطور وحركات Fatalities وBrutalities ومجموعة متنوعة من أوضاع اللعب.",{
    screenshots:[
        "images/mortal-kombat-11-1.jpg","images/mortal-kombat-11-2.jpg","images/mortal-kombat-11-3.jpg",
        "images/mortal-kombat-11-4.jpg","images/mortal-kombat-11-5.jpg","images/mortal-kombat-11-6.jpg",
        "images/mortal-kombat-11-7.jpg","images/mortal-kombat-11-8.jpg","images/mortal-kombat-11-9.jpg",
        "images/mortal-kombat-11-10.jpg"
    ],
    video:"videos/mortal-kombat-11.mp4",
    videoTitle:"Mortal Kombat 11 Official Trailer"
}),

    g(30,"Red Dead Redemption 2",[600,600,550,850],"1 Player","Up to 32 Players","Action / Open World / Western","Action","POPULAR","images/red-dead-redemption-2.jpg","رحلة Arthur Morgan وعصابة Van der Linde في الغرب الأمريكي، مع عالم مفتوح ضخم وقصة مليئة بالشخصيات والمهام والاستكشاف، إضافة إلى Red Dead Online."),

    g(31,"Injustice 2",[400,400,400,600],"1–2 Players","Up to 8 Players","Fighting / Superhero","Fighting","POPULAR","images/injustice-2.jpg","تجمع شخصيات DC في معارك قتالية قوية، مع نظام Gear يسمح بتطوير وتخصيص المقاتلين وقصة تدور حول Batman وSuperman وتهديد جديد."),

    g(32,"Crash Team Racing Nitro-Fueled",[550,550,500,650],"1–4 Players","Up to 8 Players","Racing / Kart","Racing","FEATURED","images/crash-team-racing-nitro-fueled.jpg","نسخة محسنة من تجربة Crash Team Racing الكلاسيكية، مع سباقات كارت سريعة ومضامير مليئة بالعوائق والأسلحة والمنافسة."),

    g(33,"PES 2020",[800,800,750,950],"1–4 Players","2–22 Players","Sports / Football","Sports","POPULAR","images/pes-2020.jpg","محاكاة كرة قدم تركز على المباريات الواقعية والتمرير والتحكم في اللاعبين، مع أوضاع محلية وعبر الإنترنت ومجموعة كبيرة من الفرق."),

    g(34,"Ghost of Tsushima",[250,250,200,300],"1 Player","Up to 4 Players","Action / Adventure","Action","POPULAR","images/ghost-of-tsushima.jpg","قاتل ساموراي يقاتل لتحرير جزيرة تسوشيما من الغزو المغولي، في عالم مفتوح مليء بالمعارك والاستكشاف والتخفي.",{
    screenshots:[
        "images/ghost-of-tsushima-gameplay-1.jpg","images/ghost-of-tsushima-gameplay-2.jpg","images/ghost-of-tsushima-gameplay-3.jpg",
        "images/ghost-of-tsushima-gameplay-4.jpg","images/ghost-of-tsushima-gameplay-5.jpg","images/ghost-of-tsushima-gameplay-6.jpg",
        "images/ghost-of-tsushima-gameplay-7.jpg","images/ghost-of-tsushima-gameplay-8.jpg","images/ghost-of-tsushima-gameplay-9.jpg",
        "images/ghost-of-tsushima-gameplay-10.jpg"
    ],
    video:"videos/ghost-of-tsushima.mp4",
    videoTitle:"Ghost of Tsushima Official Trailer"
}), 

    g(35,"Need for Speed Unbound",[650,650,null,850],"1 Player","Up to 16 Players","Racing / Open World","Racing","POPULAR","images/need-for-speed-unbound.jpg","سباقات شوارع في Lakeshore مع أسلوب بصري يجمع بين السيارات الواقعية وتأثيرات الرسوم، وتطوير السيارات والمطاردات للوصول إلى القمة."),

    g(36,"WWE 2K26",[1600,1600,null,1900],"1–4 Players","Up to 8 Players","Sports / Wrestling","Sports","NEW","images/wwe-2k26.jpg","تجربة مصارعة WWE تضم نجومًا ومباريات وأوضاع لعب متعددة، مع إمكانية إنشاء وتخصيص المصارعين وخوض مواجهات محلية وعبر الإنترنت."),

    g(37,"Forza Horizon 5",[1400,1400,null,1700],"1 Player","Up to 12 Players","Racing / Open World","Racing","POPULAR","images/forza-horizon-5.jpg","مغامرة سباقات عالم مفتوح في المكسيك، تستكشف فيها مناطق متنوعة وتجمع وتعدل السيارات وتشارك في سباقات وفعاليات عبر الإنترنت."),

    g(38,"FC 27 Standard",[1450,1450,700,2400],"1–4 Players","Up to 99 Players","Sports / Football","Sports","NEW","images/fc-27-standard.jpg","أحدث إصدار من سلسلة EA SPORTS FC، يقدم مباريات كرة قدم وأوضاعًا متعددة مع خيارات لعب محلية وعبر الإنترنت وتجربة تنافسية واسعة.",{
        screenshots:[
            "images/fc-27-1.jpg","images/fc-27-2.jpg","images/fc-27-3.jpg",
            "images/fc-27-4.jpg","images/fc-27-5.jpg","images/fc-27-6.jpg",
            "images/fc-27-7.jpg","images/fc-27-8.jpg","images/fc-27-9.jpg",
            "images/fc-27-10.jpg"
        ],
        video:"videos/fc-27.mp4",
        videoTitle:"FC 27 Trailer"
    }),

    g(39,"GTA VI Standard",["لا تدعم",null,null,2500],"1 Player","غير متاح حاليًا","Action / Open World","Action","NEW","images/gta-vi.jpg","تعود Grand Theft Auto إلى ولاية Leonida وVice City في قصة جديدة تتابع Jason وLucia. النسخة الحالية معلنة كتجربة فردية، ولم يتم الإعلان رسميًا عن نمط GTA VI Online حتى الآن.",{
        screenshots:[
            "images/gta-vi-1.jpg","images/gta-vi-2.jpg","images/gta-vi-3.jpg",
            "images/gta-vi-4.jpg","images/gta-vi-5.jpg","images/gta-vi-6.jpg",
            "images/gta-vi-7.jpg","images/gta-vi-8.jpg","images/gta-vi-9.jpg",
            "images/gta-vi-10.jpg"
        ],
        video:"videos/gta-vi.mp4",
        videoTitle:"Grand Theft Auto VI Trailer"
    })
];

/* CUSTOM GAME CARD ORDER */
const GAME_DISPLAY_ORDER = [
    38, // FC 27 Standard
    39, // GTA VI Standard
    1,  // FC 26
    9,  // GTA V
    2,  // Ghost of Yōtei
    34, // Ghost of Tsushima
    6,  // Spider-Man 2 (Arabic)
    7,  // Spider-Man: Miles Morales
    3,  // Assassin's Creed Shadows
    14, // Assassin's Creed Odyssey
    28, // Mortal Kombat 1
    29, // Mortal Kombat 11
    4,  // Split Fiction
    10, // It Takes Two
    5,  // God of War Ragnarök
    37, // Forza Horizon 5
    8,  // TEKKEN 8
    36, // WWE 2K26
    33, // PES 2020
    35, // Need for Speed Unbound
    26, // Need for Speed Heat
    27, // Need for Speed Payback
    11, // Call of Duty: Vanguard
    12, // Call of Duty: Black Ops III
    30, // Red Dead Redemption 2
    31, // Injustice 2
    25, // Sonic
    21, // Batman
    20, // Marvel's Avengers
    13, // LEGO
    15, // Battlefield V
    16, // Battlefield 4
    32, // Crash Team Racing Nitro-Fueled
    17, // Far Cry 5
    18, // Uncharted Bundle
    19, // Resident Evil Village
    22, // Carnival Games
    23, // Minecraft
    24  // Unravel Two
];

games.sort((a, b) =>
    GAME_DISPLAY_ORDER.indexOf(a.id) -
    GAME_DISPLAY_ORDER.indexOf(b.id)
);

function g(
    id,
    name,
    p,
    offline,
    online,
    genre,
    category,
    badge,
    cover,
    description,
    media = {}
){
    const supportsPS4 = !PS4_UNSUPPORTED_IDS.has(id);

    return {
        id,
        name,
        platforms: supportsPS4 ? ["PS4"] : ["PS5"],
        prices:{
            secondary4:p[0],
            secondary5:p[1],
            primary4:p[2],
            primary5:p[3]
        },
        offlinePlayers:offline,
        onlinePlayers:online,
        genre,
        category,
        badge,
        cover,
        screenshots:media.screenshots || [],
        video:media.video || "",
        videoTitle:media.videoTitle || `${name} Trailer`,
        description
    };
}

const gamesContainer = document.getElementById("gamesContainer");
const gameCount = document.getElementById("gameCount");
const noResults = document.getElementById("noResults");
const searchInput = document.getElementById("searchInput");
const detailsModal = document.getElementById("detailsModal");
const detailsContainer = document.getElementById("detailsContainer");
const closeModal = document.getElementById("closeModal");

let activeCategory = "ALL";
let activePlatform = "ALL";
let currentGalleryImages = [];
let currentGalleryIndex = 0;

/* FULLSCREEN BUTTON */
function createFullscreenButton(){
    if(document.getElementById("fullscreenButton")) return;

    const button = document.createElement("button");

    button.id = "fullscreenButton";
    button.className = "fullscreen-button";
    button.innerHTML = "⛶ Fullscreen";
    button.type = "button";
    button.setAttribute("aria-label","Toggle fullscreen");

    button.style.fontSize = "11px";
    button.style.padding = "7px 10px";
    button.style.minHeight = "30px";
    button.style.lineHeight = "1.2";
    button.style.gap = "5px";

    button.addEventListener("click",toggleFullscreen);
    document.body.appendChild(button);
}

function toggleFullscreen(){
    if(!document.fullscreenElement){
        document.documentElement.requestFullscreen().catch(()=>{});
    }else{
        document.exitFullscreen();
    }
}

document.addEventListener("fullscreenchange",()=>{
    const button = document.getElementById("fullscreenButton");

    if(!button) return;

    button.innerHTML = document.fullscreenElement
        ? "⛶ Exit Fullscreen"
        : "⛶ Fullscreen";
});

/* BACK TO TOP BUTTON */
function createBackToTopButton(){
    if(document.getElementById("backToTopButton")) return;

    const button = document.createElement("button");

    button.id = "backToTopButton";
    button.type = "button";
    button.innerHTML = "↑";
    button.setAttribute("aria-label","Back to top");
    button.title = "Back to top";

    Object.assign(button.style,{
        position:"fixed",
        right:"24px",
        bottom:"75px",
        width:"42px",
        height:"42px",
        padding:"0",
        border:"1px solid rgba(255,255,255,0.18)",
        borderRadius:"50%",
        background:"linear-gradient(135deg,#00d4ff,#0066ff)",
        color:"#ffffff",
        fontSize:"25px",
        fontWeight:"bold",
        lineHeight:"1",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        cursor:"pointer",
        zIndex:"9999",
        opacity:"0",
        visibility:"hidden",
        transform:"translateY(10px)",
        transition:"opacity 0.25s ease, visibility 0.25s ease, transform 0.25s ease",
        boxShadow:"0 5px 18px rgba(0,102,255,0.3)"
    });

    button.addEventListener("mouseenter",()=>{
        if(window.scrollY > 300){
            button.style.transform = "translateY(-3px)";
        }
    });

    button.addEventListener("mouseleave",()=>{
        button.style.transform =
            window.scrollY > 300
                ? "translateY(0)"
                : "translateY(10px)";
    });

    button.addEventListener("click",()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    });

    document.body.appendChild(button);

    function updateBackToTopButton(){
        const shouldShow = window.scrollY > 300;

        button.style.opacity = shouldShow ? "1" : "0";
        button.style.visibility = shouldShow ? "visible" : "hidden";
        button.style.transform = shouldShow
            ? "translateY(0)"
            : "translateY(10px)";
    }

    window.addEventListener("scroll",updateBackToTopButton,{
        passive:true
    });

    updateBackToTopButton();
}

function createFilterBar(){
    const sectionHeader = document.querySelector(".section-header");

    if(!sectionHeader) return;

    const filterBar = document.createElement("div");
    filterBar.className = "filter-bar";

    filterBar.innerHTML = `
        <button class="filter-button active" data-category="ALL">ALL</button>
        <button class="filter-button" data-category="Action">ACTION</button>
        <button class="filter-button" data-category="Sports">SPORTS</button>
        <button class="filter-button" data-category="Racing">RACING</button>
        <button class="filter-button" data-category="Fighting">FIGHTING</button>
        <button class="filter-button" data-category="Adventure">ADVENTURE</button>
    `;

    sectionHeader.insertAdjacentElement("afterend",filterBar);

    filterBar.querySelectorAll(".filter-button").forEach(button=>{
        button.addEventListener("click",()=>{
            activeCategory = button.dataset.category;

            filterBar.querySelectorAll(".filter-button").forEach(item=>{
                item.classList.remove("active");
            });

            button.classList.add("active");
            applyFilters();
        });
    });
}

function createPlatformSidebar(){
    if(document.getElementById("platformSidebar")) return;

    const wrapper = document.createElement("div");

    wrapper.innerHTML = `
        <button
            class="platform-menu-button"
            id="platformMenuButton"
            type="button"
            aria-label="Open console menu"
            aria-expanded="false"
        >☰</button>

        <div class="platform-overlay" id="platformOverlay"></div>

        <aside
            class="platform-sidebar"
            id="platformSidebar"
            aria-label="Console selection"
        >
            <button
                class="platform-close"
                id="platformCloseButton"
                type="button"
                aria-label="Close menu"
            >×</button>

            <h2>Choose Console</h2>

            <button type="button" data-platform="ALL" class="active">
                🎮 All Games
            </button>

            <button type="button" data-platform="PS4">
                🎮 PlayStation 4
            </button>

            <button type="button" data-platform="PS5">
                🎮 PlayStation 5
            </button>
        </aside>
    `;

    while(wrapper.firstChild){
        document.body.appendChild(wrapper.firstChild);
    }

    const menuButton = document.getElementById("platformMenuButton");
    const overlay = document.getElementById("platformOverlay");
    const sidebar = document.getElementById("platformSidebar");
    const closeButton = document.getElementById("platformCloseButton");
    const platformButtons = sidebar.querySelectorAll("[data-platform]");

    function openMenu(){
        sidebar.classList.add("open");
        overlay.classList.add("open");
        menuButton.setAttribute("aria-expanded","true");
    }

    function closeMenu(){
        sidebar.classList.remove("open");
        overlay.classList.remove("open");
        menuButton.setAttribute("aria-expanded","false");
    }

    menuButton.addEventListener("click",()=>{
        if(sidebar.classList.contains("open")){
            closeMenu();
        }else{
            openMenu();
        }
    });

    closeButton.addEventListener("click",closeMenu);
    overlay.addEventListener("click",closeMenu);

    platformButtons.forEach(button=>{
        button.addEventListener("click",()=>{
            activePlatform = button.dataset.platform;

            platformButtons.forEach(item=>{
                item.classList.toggle("active",item === button);
            });

            applyFilters();
            closeMenu();
        });
    });

    document.addEventListener("keydown",event=>{
        if(event.key === "Escape"){
            closeMenu();
        }
    });
}

function getCoverStyle(cover){
    if(!cover) return "";

    if(
        cover.startsWith("linear-gradient") ||
        cover.startsWith("radial-gradient")
    ){
        return `background-image: ${cover};`;
    }

    return `background-image: url('${cover}');`;
}

function displayGames(gameList){
    gamesContainer.innerHTML = "";
    gameCount.textContent = `${gameList.length} Games`;

    if(!gameList.length){
        noResults.style.display = "block";
        return;
    }

    noResults.style.display = "none";

    gameList.forEach((game,index)=>{
        const card = document.createElement("article");
        card.className = "game-card";
        card.style.animationDelay = `${index * 0.035}s`;

        const badgeHTML = game.badge
            ? `<div class="game-badge">${game.badge}</div>`
            : "";

        card.innerHTML = `
            <div
                class="game-cover"
                style="
                    ${getCoverStyle(game.cover)}
                    background-size:contain;
                    background-repeat:no-repeat;
                    background-position:center;
                    background-color:#080b12;
                "
            >
                ${badgeHTML}
            </div>

            <div class="game-info">
                <h3>${game.name}</h3>

                <div class="tags">
                    <span class="tag">${game.genre}</span>
                </div>

                <p class="game-description">${game.description}</p>

                <button class="details-button" data-game-id="${game.id}" type="button">
                    View Game
                </button>
            </div>
        `;

        card.querySelector(".details-button").addEventListener("click",()=>{
            openDetails(game.id);
        });

        gamesContainer.appendChild(card);
    });
}

function applyFilters(){
    const searchText = searchInput.value.toLowerCase().trim();

    const filteredGames = games.filter(game=>{
        const genre = game.genre.toLowerCase();

        const matchesCategory =
            activeCategory === "ALL" ||
            game.category === activeCategory ||
            genre.includes(activeCategory.toLowerCase());

        const matchesSearch =
            game.name.toLowerCase().includes(searchText) ||
            game.genre.toLowerCase().includes(searchText) ||
            game.description.toLowerCase().includes(searchText);

        const matchesPlatform =
            activePlatform === "ALL" ||
            game.platforms.includes(activePlatform);

        return matchesCategory && matchesSearch && matchesPlatform;
    });

    displayGames(filteredGames);
}

searchInput.addEventListener("input",applyFilters);

function priceText(value){
    if(value === "لا تدعم"){
        return "لا تدعم";
    }

    return value == null
        ? "غير متاح"
        : `(${value} LE)`;
}

function openDetails(id){
    const game = games.find(item=>item.id === id);

    if(!game) return;

    const videoHTML = game.video
        ? `
            <div class="game-video-section">
                <h3>${game.videoTitle || "GAMEPLAY VIDEO"}</h3>

                <video class="gameplay-video" controls playsinline preload="metadata">
                    <source src="${game.video}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        `
        : "";

    const screenshotsHTML = game.screenshots?.length
        ? `
            <div class="screenshots-section">
                <h3>GAMEPLAY</h3>

                <div class="screenshots-grid">
                    ${game.screenshots.map((image,index)=>`
                        <button
                            class="gameplay-image-button"
                            data-image-index="${index}"
                            type="button"
                            aria-label="View screenshot ${index + 1}"
                        >
                            <img
                                src="${image}"
                                alt="${game.name} Gameplay ${index + 1}"
                                class="gameplay-image"
                            >
                            <span class="image-zoom-icon">⛶</span>
                        </button>
                    `).join("")}
                </div>
            </div>
        `
        : `
            <div class="screenshots-section empty-media">
                <h3>GAMEPLAY</h3>
                <p>Gameplay screenshots will be added here.</p>
            </div>
        `;

    detailsContainer.innerHTML = `
        <div
            class="modal-cover"
            style="
                ${getCoverStyle(game.cover)}
                background-size:contain;
                background-repeat:no-repeat;
                background-position:center;
                background-color:#080b12;
            "
        ></div>

        <h2>${game.name}</h2>

        <div class="details-genre">${game.genre}</div>

        <div class="players-box">
            <div class="player-item">
                <span>🎮 Offline</span>
                <strong>${game.offlinePlayers || "غير متاح"}</strong>
            </div>

            <div class="player-item">
                <span>🌐 Online</span>
                <strong>${game.onlinePlayers || "غير متاح"}</strong>
            </div>
        </div>

        <p class="details-description" dir="rtl">${game.description}</p>

        <div class="prices-box">
            <div class="price-item">
                <span>Secondary 4</span>
                <strong>${priceText(game.prices?.secondary4)}</strong>
            </div>

            <div class="price-item">
                <span>Secondary 5</span>
                <strong>${priceText(game.prices?.secondary5)}</strong>
            </div>

            <div class="price-item">
                <span>Primary 4</span>
                <strong>${priceText(game.prices?.primary4)}</strong>
            </div>

            <div class="price-item">
                <span>Primary 5</span>
                <strong>${priceText(game.prices?.primary5)}</strong>
            </div>
        </div>

        ${videoHTML}
        ${screenshotsHTML}
    `;

    detailsModal.classList.add("active");
    document.body.style.overflow = "hidden";

    currentGalleryImages = game.screenshots || [];
    currentGalleryIndex = 0;

    detailsContainer.querySelectorAll(".gameplay-image-button").forEach(button=>{
        button.addEventListener("click",()=>{
            openGallery(Number(button.dataset.imageIndex));
        });
    });
}

function closeDetails(){
    detailsModal.classList.remove("active");
    document.body.style.overflow = "";
}

closeModal.addEventListener("click",closeDetails);

detailsModal.addEventListener("click",event=>{
    if(event.target.classList.contains("modal-background")){
        closeDetails();
    }
});

function createGallery(){
    if(document.getElementById("imageGallery")) return;

    const gallery = document.createElement("div");
    gallery.id = "imageGallery";
    gallery.className = "image-gallery";

    gallery.innerHTML = `
        <div class="gallery-background"></div>

        <button class="gallery-close" aria-label="Close gallery" type="button">×</button>
        <button class="gallery-arrow gallery-prev" aria-label="Previous image" type="button">❮</button>

        <div class="gallery-content">
            <img id="galleryImage" src="" alt="Gameplay screenshot">
            <div id="galleryCounter" class="gallery-counter">1 / 1</div>
        </div>

        <button class="gallery-arrow gallery-next" aria-label="Next image" type="button">❯</button>
    `;

    document.body.appendChild(gallery);

    gallery.querySelector(".gallery-close").addEventListener("click",closeGallery);
    gallery.querySelector(".gallery-background").addEventListener("click",closeGallery);
    gallery.querySelector(".gallery-prev").addEventListener("click",previousGalleryImage);
    gallery.querySelector(".gallery-next").addEventListener("click",nextGalleryImage);
}

function openGallery(index){
    if(!currentGalleryImages.length) return;

    currentGalleryIndex = index;
    updateGallery();

    document.getElementById("imageGallery").classList.add("active");
}

function updateGallery(){
    const image = document.getElementById("galleryImage");
    const counter = document.getElementById("galleryCounter");

    if(!image || !counter) return;

    image.src = currentGalleryImages[currentGalleryIndex];
    counter.textContent = `${currentGalleryIndex + 1} / ${currentGalleryImages.length}`;
}

function nextGalleryImage(){
    if(!currentGalleryImages.length) return;

    currentGalleryIndex = (currentGalleryIndex + 1) % currentGalleryImages.length;
    updateGallery();
}

function previousGalleryImage(){
    if(!currentGalleryImages.length) return;

    currentGalleryIndex =
        (currentGalleryIndex - 1 + currentGalleryImages.length) %
        currentGalleryImages.length;

    updateGallery();
}

function closeGallery(){
    const gallery = document.getElementById("imageGallery");

    if(gallery){
        gallery.classList.remove("active");
    }
}

document.addEventListener("keydown",event=>{
    const gallery = document.getElementById("imageGallery");

    if(event.key === "Escape"){
        if(gallery?.classList.contains("active")){
            closeGallery();
        }else{
            closeDetails();
        }
    }

    if(gallery?.classList.contains("active")){
        if(event.key === "ArrowRight") nextGalleryImage();
        if(event.key === "ArrowLeft") previousGalleryImage();
    }
});

/* THEME SWITCHER */
function createThemeToggle(){
    if(document.getElementById("themeToggle")) return;

    const button = document.createElement("button");

    button.id = "themeToggle";
    button.className = "theme-toggle";
    button.type = "button";
    button.setAttribute("aria-label","Switch color theme");

    const savedTheme = localStorage.getItem("futureGamesTheme");

    if(savedTheme === "light"){
        document.body.classList.add("light-mode");
    }

    function updateThemeButton(){
        const isLight = document.body.classList.contains("light-mode");

        button.innerHTML = isLight
            ? '<span class="theme-icon">🌙</span><span>Dark Mode</span>'
            : '<span class="theme-icon">☀️</span><span>Light Mode</span>';

        button.setAttribute("aria-pressed",isLight ? "true" : "false");
    }

    button.addEventListener("click",()=>{
        const isLight = document.body.classList.toggle("light-mode");

        localStorage.setItem("futureGamesTheme",isLight ? "light" : "dark");
        updateThemeButton();
    });

    document.body.appendChild(button);
    updateThemeButton();
}

/* INITIALIZE */
createThemeToggle();
createPlatformSidebar();
createFilterBar();
createFullscreenButton();
createBackToTopButton();
createGallery();
displayGames(games);