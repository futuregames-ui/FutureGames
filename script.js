/* FUTURE GAMES - COMPLETE SCRIPT */

/*
  Platform classification:
  - PS4-only unsupported games are excluded from PS4.
  - PS4 games can also be played on PS5 through backward compatibility.
  - Platform support is separate from price availability.
*/
const PS4_UNSUPPORTED_IDS = new Set([2, 3, 4, 5, 6, 8, 35, 36, 37, 39, 41, 42]);

const games = [
g(1,"FC 26",[750,750,"غير متاح",900],"1–4 Players","Up to 22 Players","Sports / Football","Sports","POPULAR","images/fc-26.jpg","استمتع بتجربة كرة قدم حديثة تجمع بين المنافسة والإثارة وتقدم مجموعة متنوعة من أوضاع اللعب. طوّر أسلوب لعب فريقك واستفد من مهارات اللاعبين والتكتيكات المختلفة لتحقيق التفوق داخل الملعب. خُض مباريات محلية مع أصدقائك أو نافس لاعبين آخرين عبر الإنترنت في مواجهات مليئة بالحماس. ومع تنوع الفرق والبطولات وطرق اللعب، تمنحك FC 26 تجربة كرة قدم متجددة تناسب اللعب الفردي والجماعي.",{        screenshots:[
            "images/fc-26-1.jpg","images/fc-26-2.jpg","images/fc-26-3.jpg",
            "images/fc-26-4.jpg","images/fc-26-5.jpg","images/fc-26-6.jpg",
            "images/fc-26-7.jpg","images/fc-26-8.jpg","images/fc-26-9.jpg",
            "images/fc-26-10.jpg"
        ],
        video:"videos/fc-26.mp4",
        videoTitle:"EA SPORTS FC 26 Trailer"
    }),

g(2,"Ghost of Yōtei",[null,1900,null,"غير متاح"],"1 Player","Up to 4 Players","Action / Samurai / Open World","Action","NEW","images/ghost-of-yotei.jpg","انطلق في مغامرة ساموراي ملحمية تدور أحداثها في شمال اليابان خلال القرن السابع عشر، حيث تبدأ Atsu رحلة مليئة بالانتقام والغموض. استكشف مناطق طبيعية واسعة ومتنوعة، وخض معارك بالسيف تعتمد على السرعة والدقة واختيار أسلوب القتال المناسب. واجه أعداء خطرين واكتشف الأسرار والقصص المنتشرة في عالم مفتوح مليء بالتفاصيل والمغامرات. ويمكنك أيضًا الاستمتاع بتجربة Ghost of Yōtei Legends التعاونية وخوض تحديات ومواجهات مع لاعبين آخرين عبر الإنترنت.",{        screenshots:[
            "images/ghost-of-yotei-1.jpg","images/ghost-of-yotei-2.jpg",
            "images/ghost-of-yotei-3.jpg","images/ghost-of-yotei-4.jpg",
            "images/ghost-of-yotei-5.jpg","images/ghost-of-yotei-6.jpg",
            "images/ghost-of-yotei-7.jpg","images/ghost-of-yotei-8.jpg",
            "images/ghost-of-yotei-9.jpg","images/ghost-of-yotei-10.jpg"
        ],
        video:"videos/ghost-of-yotei.mp4",
        videoTitle:"Ghost of Yōtei Trailer"
    }),

g(3,"Assassin's Creed Shadows",[null,1600,null,1900],"1 Player","غير متاح","Action / Stealth / Open World","Action","NEW","images/assassin-s-creed-shadows.jpg","استكشف اليابان الإقطاعية في مغامرة تجمع بين التخفي والقتال والاستكشاف داخل عالم مفتوح مليء بالتفاصيل. تحكم في شخصيتين مختلفتين، Naoe وYasuke، ولكل منهما أسلوبه الخاص في التعامل مع الأعداء والمواقف. استخدم التخفي والاغتيالات أو واجه خصومك في معارك مباشرة، واختر الطريقة التي تناسب أسلوب لعبك. اكتشف المناطق والقرى والقلاع، ونفّذ المهام وواجه أعداء متنوعين بينما تصنع طريقك الخاص وسط صراعات اليابان.",{        screenshots:[
            "images/assassin-s-creed-shadows-1.jpg","images/assassin-s-creed-shadows-2.jpg",
            "images/assassin-s-creed-shadows-3.jpg","images/assassin-s-creed-shadows-4.jpg",
            "images/assassin-s-creed-shadows-5.jpg","images/assassin-s-creed-shadows-6.jpg",
            "images/assassin-s-creed-shadows-7.jpg","images/assassin-s-creed-shadows-8.jpg",
            "images/assassin-s-creed-shadows-9.jpg","images/assassin-s-creed-shadows-10.jpg"
        ],
        video:"videos/assassin-s-creed-shadows.mp4",
        videoTitle:"Assassin's Creed Shadows Trailer"
    }),

g(4,"Split Fiction",[null,1600,null,1900],"1–2 Players","2 Players","Action / Adventure / Co-op","Adventure","FEATURED","images/split-fiction.jpg","انطلق في مغامرة تعاونية مصممة خصيصًا للاعبين، حيث تتحكم في Mio وZoe وتخوضان رحلة مليئة بالمفاجآت والتحديات. انتقل بين عوالم مختلفة تجمع بين الخيال العلمي والفانتازيا، مع مراحل متنوعة وأفكار لعب جديدة في كل تجربة. تعتمد المغامرة على التعاون والتنسيق المستمر بين اللاعبين، حيث يحتاج كل لاعب إلى استخدام قدراته لمساعدة الآخر والتقدم في المراحل. واجه الألغاز والعقبات والمواقف المليئة بالحماس، واستمتع بتجربة تعاونية ممتعة من البداية حتى النهاية.",{        screenshots:[
            "images/split-fiction-1.jpg","images/split-fiction-2.jpg",
            "images/split-fiction-3.jpg","images/split-fiction-4.jpg",
            "images/split-fiction-5.jpg","images/split-fiction-6.jpg",
            "images/split-fiction-7.jpg","images/split-fiction-8.jpg",
            "images/split-fiction-9.jpg","images/split-fiction-10.jpg"
        ],
        video:"videos/split-fiction.mp4",
        videoTitle:"Split Fiction Trailer"
    }),

g(5,"God of War Ragnarök",[null,"غير متاح",null,"غير متاح"],"1 Player","1 Player","Action / Adventure","Action","POPULAR","images/god-of-war-ragnarok.jpg","واصل رحلة Kratos وAtreus في مغامرة ملحمية داخل العوالم الإسكندنافية، مع اقتراب أحداث Ragnarök التي تهدد بتدمير العوالم. استكشف مناطق متنوعة مليئة بالأسرار والأعداء والتحديات، وخض معارك قوية باستخدام الفؤوس والأسلحة والقدرات القتالية المختلفة. واجه آلهة ومحاربين خطرين، وطوّر مهاراتك ومعداتك لتتمكن من التغلب على خصوم أكثر قوة. عِش قصة مؤثرة عن العائلة والتضحية والمصير، واكتشف كيف ستؤثر اختيارات الشخصيات في مستقبل العوالم التسعة.",{        screenshots:[
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
        videoTitle:"God of War Ragnarök Official Trailer"
    }),

    g(6,"Spider-Man 2 (Arabic)",[null,1250,null,1600],"1 Player","غير متاح","Action / Superhero / Open World","Action","POPULAR","images/spider-man-2-arabic.jpg","تجمع اللعبة بين Peter Parker وMiles Morales في مغامرة واحدة داخل نيويورك، مع تنقل سريع بالويب، وقدرات جديدة، ومعارك ضد أعداء مثل Venom وKraven.",{
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

   g(7,"Spider-Man: Miles Morales",[650,600,650,800],"1 Player","1 Player","Action / Adventure","Action","POPULAR","images/spider-man-miles-morales.jpg","انطلق في مغامرة مع مايلز موراليس وهو يتعلم إتقان قواه الجديدة ويواجه تحديات خطيرة لحماية مدينة نيويورك، مع قتال سريع وحركة مذهلة باستخدام خيوط العنكبوت.",{
    screenshots:[
        "images/spider-man-miles-morales-1.jpg","images/spider-man-miles-morales-2.jpg","images/spider-man-miles-morales-3.jpg",
        "images/spider-man-miles-morales-4.jpg","images/spider-man-miles-morales-5.jpg","images/spider-man-miles-morales-6.jpg",
        "images/spider-man-miles-morales-7.jpg","images/spider-man-miles-morales-8.jpg","images/spider-man-miles-morales-9.jpg",
        "images/spider-man-miles-morales-10.jpg"
    ],
    video:"videos/spider-man-miles-morales.mp4",
    videoTitle:"Marvel's Spider-Man: Miles Morales Official Trailer"
}),

    g(8,"TEKKEN 8",[null,1100,null,"غير متاح"],"1–2 Players","Up to 16 Players","Fighting","Fighting","POPULAR","images/tekken-8.jpg","لعبة قتال تنافسية تركز على مواجهة شخصيات السلسلة الشهيرة، مع نظام قتال سريع ورسوم سينمائية ومجموعة كبيرة من الحركات والقدرات.",{
        screenshots:[
            "images/tekken-8-1.jpg","images/tekken-8-2.jpg","images/tekken-8-3.jpg",
            "images/tekken-8-4.jpg","images/tekken-8-5.jpg","images/tekken-8-6.jpg",
            "images/tekken-8-7.jpg","images/tekken-8-8.jpg","images/tekken-8-9.jpg",
            "images/tekken-8-10.jpg"
        ],
        video:"videos/tekken-8.mp4",
        videoTitle:"TEKKEN 8 Trailer"
    }),

    g(9,"GTA V",[650,500,650,800],"1 Player","Up to 30 Players","Action / Open World","Action","POPULAR","images/gta-v.jpg","تدور أحداث Grand Theft Auto V في Los Santos، حيث تتقاطع قصص ثلاثة أبطال في عالم مفتوح مليء بالسرقات والمطاردات والمهمات. ويمكن الانتقال إلى GTA Online للعب مع لاعبين آخرين.",{
        screenshots:[
            "images/gta-v-1.jpg","images/gta-v-2.jpg","images/gta-v-3.jpg",
            "images/gta-v-4.jpg","images/gta-v-5.jpg","images/gta-v-6.jpg",
            "images/gta-v-7.jpg","images/gta-v-8.jpg","images/gta-v-9.jpg",
            "images/gta-v-10.jpg"
        ],
        video:"videos/gta-v.mp4",
        videoTitle:"Grand Theft Auto V Trailer"
    }),

    g(10,"It Takes Two",[600,500,600,800],"1–2 Players","2 Players","Adventure / Co-op / Platform","Adventure","FEATURED","images/it-takes-two.jpg","مغامرة تعاونية مصممة بالكامل تقريبًا للعب مع شخص آخر، حيث يتحول Cody وMay إلى دمى ويخوضان رحلة مليئة بالألغاز والتحديات التي تتطلب التعاون.",{
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

    g(11,"Call of Duty: Vanguard",["غير متاح","غير متاح",600,"غير متاح"],"1–2 Players","Up to 48 Players","Action / Shooter / WWII","Action","POPULAR","images/call-of-duty-vanguard.jpg","تقدم حملة تدور خلال الحرب العالمية الثانية إلى جانب أوضاع Multiplayer وZombies، مع معارك سريعة وأسلحة ومواجهات متعددة اللاعبين.",{
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

   g(43,"Call of Duty: Black Ops III",[550,550,550,"غير متاح"],"1–4 Players","Up to 18 Players","Action / First-Person Shooter","Shooter","POPULAR","images/call-of-duty-black-ops-3.jpg","انطلق في تجربة تصويب مستقبلية مليئة بالإثارة، مع حملة تعاونية وأسلحة متطورة ومعارك جماعية، بالإضافة إلى طور الزومبي الشهير الذي يقدم تحديات مليئة بالأكشن.",{
    screenshots:[
        "images/call-of-duty-black-ops-3-1.jpg",
        "images/call-of-duty-black-ops-3-2.jpg",
        "images/call-of-duty-black-ops-3-3.jpg",
        "images/call-of-duty-black-ops-3-4.jpg",
        "images/call-of-duty-black-ops-3-5.jpg",
        "images/call-of-duty-black-ops-3-6.jpg",
        "images/call-of-duty-black-ops-3-7.jpg",
        "images/call-of-duty-black-ops-3-8.jpg",
        "images/call-of-duty-black-ops-3-9.jpg",
        "images/call-of-duty-black-ops-3-10.jpg"
    ],
    video:"videos/call-of-duty-black-ops-3.mp4",
    videoTitle:"Call of Duty: Black Ops III Official Trailer"
}),

    g(61,"LEGO Marvel Super Heroes 2",["غير متاح","غير متاح","غير متاح","غير متاح"],"1–4 Players","لا تدعم","Action / Adventure / Superhero","Action","POPULAR","images/lego-marvel-super-heroes-2.jpg","انطلق في مغامرة كونية مع أبطال وأشرار Marvel، وواجه Kang the Conqueror في عالم Chronopolis الذي يجمع أماكن من عصور مختلفة. العب بشخصيات شهيرة مثل Spider-Man وIron Man وThor وHulk وBlack Panther، واستكشف عوالم متنوعة، واستخدم القدرات الخاصة لكل شخصية لحل الألغاز وخوض المعارك. استمتع بقصة مليئة بالفكاهة والمغامرات، مع إمكانية اللعب التعاوني مع الأصدقاء على نفس الجهاز.",{
    screenshots:[
        "images/lego-marvel-super-heroes-2-1.jpg",
        "images/lego-marvel-super-heroes-2-2.jpg",
        "images/lego-marvel-super-heroes-2-3.jpg",
        "images/lego-marvel-super-heroes-2-4.jpg",
        "images/lego-marvel-super-heroes-2-5.jpg",
        "images/lego-marvel-super-heroes-2-6.jpg",
        "images/lego-marvel-super-heroes-2-7.jpg",
        "images/lego-marvel-super-heroes-2-8.jpg",
        "images/lego-marvel-super-heroes-2-9.jpg",
        "images/lego-marvel-super-heroes-2-10.jpg"
    ],
    video:"videos/lego-marvel-super-heroes-2.mp4",
    videoTitle:"LEGO Marvel Super Heroes 2 Official Trailer"
}),

    g(14,"Assassin's Creed Odyssey",["غير متاح",550,"غير متاح",700],"1 Player","1 Player","Action / RPG / Adventure","Action","POPULAR","images/assassins-creed-odyssey.jpg","انطلق في رحلة ملحمية إلى اليونان القديمة، واختر بطلك بين أليكسيوس وكاساندرا، وخض معارك ضد الأعداء والوحوش، واستكشف عالمًا مفتوحًا مليئًا بالأسرار والمهام والقرارات التي تؤثر في مجرى القصة.",{
    screenshots:[
        "images/assassins-creed-odyssey-1.jpg","images/assassins-creed-odyssey-2.jpg","images/assassins-creed-odyssey-3.jpg",
        "images/assassins-creed-odyssey-4.jpg","images/assassins-creed-odyssey-5.jpg","images/assassins-creed-odyssey-6.jpg",
        "images/assassins-creed-odyssey-7.jpg","images/assassins-creed-odyssey-8.jpg","images/assassins-creed-odyssey-9.jpg",
        "images/assassins-creed-odyssey-10.jpg"
    ],
    video:"videos/assassins-creed-odyssey.mp4",
    videoTitle:"Assassin's Creed Odyssey Official Trailer"
}),

g(44,"Battlefield V",[null,550,null,700],"1 Player","Up to 64 Players","Action / First-Person Shooter","Shooter","POPULAR","images/battlefield-v.jpg","عِش أجواء الحرب العالمية الثانية في تجربة تصويب سينمائية تجمع بين القتال السريع والمعارك الضخمة. خُض مجموعة متنوعة من المهام والعمليات الحربية عبر ساحات معركة مستوحاة من أحداث تاريخية حقيقية. استخدم الأسلحة والمركبات المختلفة، وتعاون مع فريقك لتغيير مجرى المعركة والسيطرة على الأهداف. واستمتع بمعارك جماعية مليئة بالحماس والفوضى والاشتباكات واسعة النطاق التي تشتهر بها سلسلة Battlefield.",{    screenshots:[
        "images/battlefield-v-1.jpg",
        "images/battlefield-v-2.jpg",
        "images/battlefield-v-3.jpg",
        "images/battlefield-v-4.jpg",
        "images/battlefield-v-5.jpg",
        "images/battlefield-v-6.jpg",
        "images/battlefield-v-7.jpg",
        "images/battlefield-v-8.jpg",
        "images/battlefield-v-9.jpg",
        "images/battlefield-v-10.jpg"
    ],
    video:"videos/battlefield-v.mp4",
    videoTitle:"Battlefield V Official Trailer"
}),

    g(45,"Battlefield 4",[400,400,400,550],"1 Player","Up to 64 Players","Action / First-Person Shooter","Shooter","POPULAR","images/battlefield-4.jpg","خُض معارك عسكرية مكثفة في Battlefield 4، واستمتع بقتال تكتيكي وخرائط واسعة ومركبات متنوعة، مع إمكانية تدمير أجزاء من البيئة وتغيير مجريات المعركة.",{
    screenshots:[
        "images/battlefield-4-1.jpg",
        "images/battlefield-4-2.jpg",
        "images/battlefield-4-3.jpg",
        "images/battlefield-4-4.jpg",
        "images/battlefield-4-5.jpg",
        "images/battlefield-4-6.jpg",
        "images/battlefield-4-7.jpg",
        "images/battlefield-4-8.jpg",
        "images/battlefield-4-9.jpg",
        "images/battlefield-4-10.jpg"
    ],
    video:"videos/battlefield-4.mp4",
    videoTitle:"Battlefield 4 Official Trailer"
}),

   g(52,"Far Cry 5",[500,500,500,650],"1–2 Players","Up to 2 Players","Action / First-Person Shooter / Open World","Action","POPULAR","images/far-cry-5.jpg","انطلق في مغامرة داخل مقاطعة Hope County الأمريكية، حيث تواجه جماعة متطرفة يقودها Joseph Seed. استكشف عالمًا مفتوحًا واسعًا، وحرر المناطق من سيطرة الجماعة، واستخدم مجموعة متنوعة من الأسلحة والمركبات، مع إمكانية خوض القصة مع صديق في طور اللعب التعاوني.",{
    screenshots:[
        "images/far-cry-5-1.jpg",
        "images/far-cry-5-2.jpg",
        "images/far-cry-5-3.jpg",
        "images/far-cry-5-4.jpg",
        "images/far-cry-5-5.jpg",
        "images/far-cry-5-6.jpg",
        "images/far-cry-5-7.jpg",
        "images/far-cry-5-8.jpg",
        "images/far-cry-5-9.jpg",
        "images/far-cry-5-10.jpg"
    ],
    video:"videos/far-cry-5.mp4",
    videoTitle:"Far Cry 5 Official Trailer"
}),

    g(53,"Uncharted Bundle",["غير متاح","غير متاح","غير متاح","غير متاح"],"1 Player","Up to 10 Players","Action / Adventure / Third-Person Shooter","Action","POPULAR","images/uncharted-bundle.jpg","استمتع بمغامرات Nathan Drake في مجموعة Uncharted Bundle، التي تجمع تجارب من أشهر ألعاب السلسلة، مع استكشاف المواقع الأثرية وحل الألغاز وخوض المعارك ومطاردات مليئة بالإثارة. تختلف الأطوار والمحتويات المتاحة حسب الإصدار الموجود في المجموعة.",{
    screenshots:[
        "images/uncharted-bundle-1.jpg",
        "images/uncharted-bundle-2.jpg",
        "images/uncharted-bundle-3.jpg",
        "images/uncharted-bundle-4.jpg",
        "images/uncharted-bundle-5.jpg",
        "images/uncharted-bundle-6.jpg",
        "images/uncharted-bundle-7.jpg",
        "images/uncharted-bundle-8.jpg",
        "images/uncharted-bundle-9.jpg",
        "images/uncharted-bundle-10.jpg"
    ],
    video:"videos/uncharted-bundle.mp4",
    videoTitle:"Uncharted Bundle Official Trailer"
}),

   g(54,"Resident Evil Village",["غير متاح",550,"غير متاح","غير متاح"],"1 Player","1 Player","Survival Horror / Action / First-Person","Horror","POPULAR","images/resident-evil-village.jpg","عِش تجربة رعب وبقاء مشوقة مع Ethan Winters في قرية غامضة مليئة بالأعداء والمخاطر. واجه مخلوقات مرعبة، واستكشف أماكن مظلمة، واجمع الموارد والأسلحة، وحاول كشف أسرار القرية والنجاة من التهديدات التي تواجهك.",{
    screenshots:[
        "images/resident-evil-village-1.jpg",
        "images/resident-evil-village-2.jpg",
        "images/resident-evil-village-3.jpg",
        "images/resident-evil-village-4.jpg",
        "images/resident-evil-village-5.jpg",
        "images/resident-evil-village-6.jpg",
        "images/resident-evil-village-7.jpg",
        "images/resident-evil-village-8.jpg",
        "images/resident-evil-village-9.jpg",
        "images/resident-evil-village-10.jpg"
    ],
    video:"videos/resident-evil-village.mp4",
    videoTitle:"Resident Evil Village Official Trailer"
}),

   g(55,"Marvel's Avengers",["غير متاح",500,"غير متاح","غير متاح"],"1 Player","Up to 4 Players","Action / Adventure / Superhero","Action","POPULAR","images/marvels-avengers.jpg","انضم إلى أقوى أبطال مارفل في مغامرة مليئة بالإثارة، واستمتع باللعب بشخصيات مثل Iron Man وCaptain America وThor وHulk وBlack Widow وMs. Marvel. استخدم قدرات كل بطل الفريدة، وطوّر مهاراتك ومعداتك، وواجه أعداء خطرين في معارك سينمائية لإنقاذ العالم.",{
    screenshots:[
        "images/marvels-avengers-1.jpg",
        "images/marvels-avengers-2.jpg",
        "images/marvels-avengers-3.jpg",
        "images/marvels-avengers-4.jpg",
        "images/marvels-avengers-5.jpg",
        "images/marvels-avengers-6.jpg",
        "images/marvels-avengers-7.jpg",
        "images/marvels-avengers-8.jpg",
        "images/marvels-avengers-9.jpg",
        "images/marvels-avengers-10.jpg"
    ],
    video:"videos/marvels-avengers.mp4",
    videoTitle:"Marvel's Avengers Official Trailer"
}), 

    g(56,"Batman: Arkham Knight",[450,"غير متاح",450,600],"1 Player","1 Player","Action / Adventure / Open World","Action","POPULAR","images/batman-arkham-knight.jpg","عُد إلى شوارع Gotham City في مغامرة مظلمة بدور Batman، وواجه Scarecrow وأعداءه في معركة مصيرية لإنقاذ المدينة. استخدم مهارات القتال والتخفي والتحقيق، واستكشف عالمًا مفتوحًا واسعًا، وقُد Batmobile في مطاردات ومعارك مليئة بالإثارة.",{
    screenshots:[
        "images/batman-arkham-knight-1.jpg",
        "images/batman-arkham-knight-2.jpg",
        "images/batman-arkham-knight-3.jpg",
        "images/batman-arkham-knight-4.jpg",
        "images/batman-arkham-knight-5.jpg",
        "images/batman-arkham-knight-6.jpg",
        "images/batman-arkham-knight-7.jpg",
        "images/batman-arkham-knight-8.jpg",
        "images/batman-arkham-knight-9.jpg",
        "images/batman-arkham-knight-10.jpg"
    ],
    video:"videos/batman-arkham-knight.mp4",
    videoTitle:"Batman: Arkham Knight Official Trailer"
}),

    g(57,"Carnival Games",[400,400,400,500],"1–4 Players","Local Multiplayer Only","Party / Arcade / Mini-Games","Family","POPULAR","images/carnival-games.jpg","استمتع بأجواء الملاهي مع Carnival Games، التي تضم 20 لعبة مصغرة ممتعة تناسب العائلة والأصدقاء. جرّب رمي الحلقات، وكرة السلة، وسباقات الطائرات الصغيرة، والبولينج الفضائي، وغيرها من التحديات. العب بمفردك أو تنافس مع الأصدقاء على نفس الجهاز، واربح التذاكر لفتح ألعاب وأزياء ومكافآت جديدة.",{
    screenshots:[
        "images/carnival-games-1.jpg",
        "images/carnival-games-2.jpg",
        "images/carnival-games-3.jpg",
        "images/carnival-games-4.jpg",
        "images/carnival-games-5.jpg",
        "images/carnival-games-6.jpg",
        "images/carnival-games-7.jpg",
        "images/carnival-games-8.jpg",
        "images/carnival-games-9.jpg",
        "images/carnival-games-10.jpg"
    ],
    video:"videos/carnival-games.mp4",
    videoTitle:"Carnival Games Official Trailer"
}),

    g(58,"Minecraft",["غير متاح","غير متاح","غير متاح","غير متاح"],"1–4 Players","Up to 8 Players","Sandbox / Survival / Adventure","Adventure","POPULAR","images/minecraft.jpg","عِش مغامرتك في عالم Minecraft المفتوح، وابنِ كل ما تتخيله باستخدام مجموعة ضخمة من البلوكات والموارد. استكشف الكهوف، واجمع الخامات، وصنّع الأدوات والأسلحة، وواجه الوحوش في وضع Survival أو أطلق العنان لإبداعك في وضع Creative. العب بمفردك أو شارك أصدقاءك في البناء والاستكشاف والمغامرات.",{
    screenshots:[
        "images/minecraft-1.jpg",
        "images/minecraft-2.jpg",
        "images/minecraft-3.jpg",
        "images/minecraft-4.jpg",
        "images/minecraft-5.jpg",
        "images/minecraft-6.jpg",
        "images/minecraft-7.jpg",
        "images/minecraft-8.jpg",
        "images/minecraft-9.jpg",
        "images/minecraft-10.jpg"
    ],
    video:"videos/minecraft.mp4",
    videoTitle:"Minecraft Official Trailer"
}),

    g(59,"Unravel Two",[400,400,400,550],"1–2 Players","Local Co-op Only","Adventure / Puzzle / Platformer","Adventure","POPULAR","images/unravel-two.jpg","انطلق في مغامرة ساحرة مع شخصيتي Yarny المصنوعتين من الخيوط، واستكشف عوالم طبيعية خلابة مليئة بالألغاز والتحديات. استخدم الخيوط للتأرجح والقفز وتسلق العقبات، وتعاون مع صديقك لحل الألغاز والتقدم في القصة. يمكنك اللعب بمفردك أو مع لاعب آخر على نفس الجهاز في تجربة تجمع بين المغامرة والإبداع والصداقة.",{
    screenshots:[
        "images/unravel-two-1.jpg",
        "images/unravel-two-2.jpg",
        "images/unravel-two-3.jpg",
        "images/unravel-two-4.jpg",
        "images/unravel-two-5.jpg",
        "images/unravel-two-6.jpg",
        "images/unravel-two-7.jpg",
        "images/unravel-two-8.jpg",
        "images/unravel-two-9.jpg",
        "images/unravel-two-10.jpg"
    ],
    video:"videos/unravel-two.mp4",
    videoTitle:"Unravel Two Official Trailer"
}),

g(60,"Sonic Frontiers",["غير متاح",550,"غير متاح","غير متاح"],"1 Player","Single Player Only","Action / Adventure / Open-Zone Platformer","Adventure","POPULAR","images/sonic-frontiers.jpg","انطلق مع Sonic في مغامرة سريعة عبر جزر Starfall الغامضة، وابحث عن Chaos Emeralds واكتشف أسرار حضارة قديمة. استكشف عالمًا مفتوحًا واسعًا، وتجاوز التحديات والألغاز، وواجه أعداء آليين وزعماء عملاقين باستخدام قدرات قتالية ومهارات جديدة. عِش تجربة تجمع بين السرعة والاستكشاف والمعارك الملحمية.",{
    screenshots:[
        "images/sonic-frontiers-1.jpg",
        "images/sonic-frontiers-2.jpg",
        "images/sonic-frontiers-3.jpg",
        "images/sonic-frontiers-4.jpg",
        "images/sonic-frontiers-5.jpg",
        "images/sonic-frontiers-6.jpg",
        "images/sonic-frontiers-7.jpg",
        "images/sonic-frontiers-8.jpg",
        "images/sonic-frontiers-9.jpg",
        "images/sonic-frontiers-10.jpg"
    ],
    video:"videos/sonic-frontiers.mp4",
    videoTitle:"Sonic Frontiers Official Trailer"
}),

   g(47,"Need for Speed Heat",[400,"غير متاح",400,"غير متاح"],"1 Player","Up to 16 Players","Racing / Open World","Racing","POPULAR","images/need-for-speed-heat.jpg","انطلق في شوارع Palm City في سباقات ليلية مليئة بالأدرينالين، ونافس خصومك نهارًا في فعاليات رسمية، واهرب من الشرطة ليلًا مع إمكانية تعديل سياراتك وتطوير أدائها.",{
    screenshots:[
        "images/need-for-speed-heat-1.jpg",
        "images/need-for-speed-heat-2.jpg",
        "images/need-for-speed-heat-3.jpg",
        "images/need-for-speed-heat-4.jpg",
        "images/need-for-speed-heat-5.jpg",
        "images/need-for-speed-heat-6.jpg",
        "images/need-for-speed-heat-7.jpg",
        "images/need-for-speed-heat-8.jpg",
        "images/need-for-speed-heat-9.jpg",
        "images/need-for-speed-heat-10.jpg"
    ],
    video:"videos/need-for-speed-heat.mp4",
    videoTitle:"Need for Speed Heat Official Trailer"
}),

   g(48,"Need for Speed Payback",[550,500,550,"غير متاح"],"1 Player","Up to 8 Players","Racing / Open World","Racing","POPULAR","images/need-for-speed-payback.jpg","انطلق في مغامرة مليئة بالسباقات والمطاردات في Fortune Valley، واجمع السيارات وطوّرها، وشارك في تحديات السرعة والقيادة الوعرة والهروب من الشرطة.",{
    screenshots:[
        "images/need-for-speed-payback-1.jpg",
        "images/need-for-speed-payback-2.jpg",
        "images/need-for-speed-payback-3.jpg",
        "images/need-for-speed-payback-4.jpg",
        "images/need-for-speed-payback-5.jpg",
        "images/need-for-speed-payback-6.jpg",
        "images/need-for-speed-payback-7.jpg",
        "images/need-for-speed-payback-8.jpg",
        "images/need-for-speed-payback-9.jpg",
        "images/need-for-speed-payback-10.jpg"
    ],
    video:"videos/need-for-speed-payback.mp4",
    videoTitle:"Need for Speed Payback Official Trailer"
}),

   g(28,"Mortal Kombat 1",[null,null,700,900],"1–2 Players","Up to 2 Players","Fighting","Fighting","POPULAR","images/mortal-kombat-1.jpg","عُد إلى عالم Mortal Kombat في تجربة قتال جديدة تضم شخصيات مألوفة بقدرات مختلفة، ونظام Kameo Fighters المميز، ومعارك عنيفة وحركات إنهاء سينمائية.",{
    screenshots:[
        "images/mortal-kombat-1-1.jpg","images/mortal-kombat-1-2.jpg","images/mortal-kombat-1-3.jpg",
        "images/mortal-kombat-1-4.jpg","images/mortal-kombat-1-5.jpg","images/mortal-kombat-1-6.jpg",
        "images/mortal-kombat-1-7.jpg","images/mortal-kombat-1-8.jpg","images/mortal-kombat-1-9.jpg",
        "images/mortal-kombat-1-10.jpg"
    ],
    video:"videos/mortal-kombat-1.mp4",
    videoTitle:"Mortal Kombat 1 Official Trailer"
}),

   g(29,"Mortal Kombat 11",[500,500,500,650],"1–2 Players","Up to 2 Players","Fighting","Fighting","POPULAR","images/mortal-kombat-11.jpg","تجربة قتال قوية تضم مجموعة كبيرة من الشخصيات الشهيرة، مع نظام قتال متطور وحركات Fatalities وBrutalities ومجموعة متنوعة من أوضاع اللعب.",{
    screenshots:[
        "images/mortal-kombat-11-1.jpg","images/mortal-kombat-11-2.jpg","images/mortal-kombat-11-3.jpg",
        "images/mortal-kombat-11-4.jpg","images/mortal-kombat-11-5.jpg","images/mortal-kombat-11-6.jpg",
        "images/mortal-kombat-11-7.jpg","images/mortal-kombat-11-8.jpg","images/mortal-kombat-11-9.jpg",
        "images/mortal-kombat-11-10.jpg"
    ],
    video:"videos/mortal-kombat-11.mp4",
    videoTitle:"Mortal Kombat 11 Official Trailer"
}),

   g(49,"Red Dead Redemption 2",[600,550,600,850],"1 Player","Up to 32 Players","Action / Adventure / Open World","Action","POPULAR","images/red-dead-redemption-2.jpg","عِش مغامرة آرثر مورجان وعصابة فان دير ليند في الغرب الأمريكي عام 1899، واستكشف عالمًا مفتوحًا ضخمًا مليئًا بالمهمات والأنشطة والصيد والاشتباكات في قصة سينمائية مميزة.",{
    screenshots:[
        "images/red-dead-redemption-2-1.jpg",
        "images/red-dead-redemption-2-2.jpg",
        "images/red-dead-redemption-2-3.jpg",
        "images/red-dead-redemption-2-4.jpg",
        "images/red-dead-redemption-2-5.jpg",
        "images/red-dead-redemption-2-6.jpg",
        "images/red-dead-redemption-2-7.jpg",
        "images/red-dead-redemption-2-8.jpg",
        "images/red-dead-redemption-2-9.jpg",
        "images/red-dead-redemption-2-10.jpg"
    ],
    video:"videos/red-dead-redemption-2.mp4",
    videoTitle:"Red Dead Redemption 2 Official Trailer"
}),

   g(50,"Injustice 2",[400,400,400,600],"1–2 Players","Up to 8 Players","Fighting / Action","Fighting","POPULAR","images/injustice-2.jpg","ادخل عالم DC المليء بالمواجهات الملحمية، وتحكم في أبطال وأشرار مثل Batman وSuperman وWonder Woman، واستخدم قدراتهم الخاصة في معارك قتالية حماسية.",{
    screenshots:[
        "images/injustice-2-1.jpg",
        "images/injustice-2-2.jpg",
        "images/injustice-2-3.jpg",
        "images/injustice-2-4.jpg",
        "images/injustice-2-5.jpg",
        "images/injustice-2-6.jpg",
        "images/injustice-2-7.jpg",
        "images/injustice-2-8.jpg",
        "images/injustice-2-9.jpg",
        "images/injustice-2-10.jpg"
    ],
    video:"videos/injustice-2.mp4",
    videoTitle:"Injustice 2 Official Trailer"
}),

   g(51,"Crash Team Racing Nitro-Fueled",[550,500,550,650],"1–4 Players","Up to 8 Players","Racing / Kart Racing","Racing","POPULAR","images/crash-team-racing-nitro-fueled.jpg","استعد لسباقات كارت مليئة بالإثارة مع Crash وأصدقائه، واستخدم الأسلحة والتعزيزات لتجاوز المنافسين، وافتح شخصيات وسيارات ومسارات متنوعة في سباقات ممتعة.",{
    screenshots:[
        "images/crash-team-racing-nitro-fueled-1.jpg",
        "images/crash-team-racing-nitro-fueled-2.jpg",
        "images/crash-team-racing-nitro-fueled-3.jpg",
        "images/crash-team-racing-nitro-fueled-4.jpg",
        "images/crash-team-racing-nitro-fueled-5.jpg",
        "images/crash-team-racing-nitro-fueled-6.jpg",
        "images/crash-team-racing-nitro-fueled-7.jpg",
        "images/crash-team-racing-nitro-fueled-8.jpg",
        "images/crash-team-racing-nitro-fueled-9.jpg",
        "images/crash-team-racing-nitro-fueled-10.jpg"
    ],
    video:"videos/crash-team-racing-nitro-fueled.mp4",
    videoTitle:"Crash Team Racing Nitro-Fueled Official Trailer"
}),

   g(46,"PES 2020",[800,750,800,950],"1–4 Players","Up to 22 Players","Sports / Football","Sports","POPULAR","images/pes-2020.jpg","استمتع بكرة القدم مع eFootball PES 2020، وتحكم واقعي في الكرة واللاعبين، وحركات ومهارات مميزة، ومباريات تنافسية تتيح لك بناء فريقك المفضل ومواجهة أصدقائك.",{
    screenshots:[
        "images/pes-2020-1.jpg",
        "images/pes-2020-2.jpg",
        "images/pes-2020-3.jpg",
        "images/pes-2020-4.jpg",
        "images/pes-2020-5.jpg",
        "images/pes-2020-6.jpg",
        "images/pes-2020-7.jpg",
        "images/pes-2020-8.jpg",
        "images/pes-2020-9.jpg",
        "images/pes-2020-10.jpg"
    ],
    video:"videos/pes-2020.mp4",
    videoTitle:"eFootball PES 2020 Official Trailer"
}),

    g(34,"Ghost of Tsushima",[650,500,650,850],"1 Player","Up to 4 Players","Action / Adventure","Action","POPULAR","images/ghost-of-tsushima.jpg","قاتل ساموراي يقاتل لتحرير جزيرة تسوشيما من الغزو المغولي، في عالم مفتوح مليء بالمعارك والاستكشاف والتخفي.",{
    screenshots:[
        "images/ghost-of-tsushima-gameplay-1.jpg","images/ghost-of-tsushima-gameplay-2.jpg","images/ghost-of-tsushima-gameplay-3.jpg",
        "images/ghost-of-tsushima-gameplay-4.jpg","images/ghost-of-tsushima-gameplay-5.jpg","images/ghost-of-tsushima-gameplay-6.jpg",
        "images/ghost-of-tsushima-gameplay-7.jpg","images/ghost-of-tsushima-gameplay-8.jpg","images/ghost-of-tsushima-gameplay-9.jpg",
        "images/ghost-of-tsushima-gameplay-10.jpg"
    ],
    video:"videos/ghost-of-tsushima.mp4",
    videoTitle:"Ghost of Tsushima Official Trailer"
}), 

   g(42,"Need for Speed Unbound",[null,650,null,850],"1 Player","Up to 16 Players","Racing / Open World","Racing","POPULAR","images/need-for-speed-unbound.jpg","انطلق في شوارع Lakeshore في سباقات مليئة بالإثارة، وعدّل سيارتك بأسلوبك الخاص، وتحدى المنافسين في عالم مفتوح يجمع بين السرعة والمطاردات والمهارة.",{
    screenshots:[
        "images/need-for-speed-unbound-1.jpg",
        "images/need-for-speed-unbound-2.jpg",
        "images/need-for-speed-unbound-3.jpg",
        "images/need-for-speed-unbound-4.jpg",
        "images/need-for-speed-unbound-5.jpg",
        "images/need-for-speed-unbound-6.jpg",
        "images/need-for-speed-unbound-7.jpg",
        "images/need-for-speed-unbound-8.jpg",
        "images/need-for-speed-unbound-9.jpg",
        "images/need-for-speed-unbound-10.jpg"
    ],
    video:"videos/need-for-speed-unbound.mp4",
    videoTitle:"Need for Speed Unbound Official Trailer"
}),

   g(41,"WWE 2K26",[null,1600,null,1900],"1–4 Players","Up to 8 Players","Sports / Wrestling","Sports","POPULAR","images/wwe-2k26.jpg","عِش أجواء المصارعة مع WWE 2K26، وشارك في مواجهات حماسية مع أشهر نجوم WWE، واستمتع بأنواع مباريات متعددة وأوضاع لعب مختلفة.",{
    screenshots:[
        "images/wwe-2k26-1.jpg",
        "images/wwe-2k26-2.jpg",
        "images/wwe-2k26-3.jpg",
        "images/wwe-2k26-4.jpg",
        "images/wwe-2k26-5.jpg",
        "images/wwe-2k26-6.jpg",
        "images/wwe-2k26-7.jpg",
        "images/wwe-2k26-8.jpg",
        "images/wwe-2k26-9.jpg",
        "images/wwe-2k26-10.jpg"
    ],
    video:"videos/wwe-2k26.mp4",
    videoTitle:"WWE 2K26 Official Trailer"
}),

   g(40,"Forza Horizon 5",[null,1400,null,1700],"1 Player","Up to 12 Players","Racing / Open World","Racing","POPULAR","images/forza-horizon-5.jpg","عِش تجربة سباقات مفتوحة في المكسيك مع Forza Horizon 5، واستكشف عالمًا واسعًا مليئًا بالطرق والمناظر الطبيعية والسيارات المتنوعة والفعاليات الممتعة.",{
    screenshots:[
        "images/forza-horizon-5-1.jpg",
        "images/forza-horizon-5-2.jpg",
        "images/forza-horizon-5-3.jpg",
        "images/forza-horizon-5-4.jpg",
        "images/forza-horizon-5-5.jpg",
        "images/forza-horizon-5-6.jpg",
        "images/forza-horizon-5-7.jpg",
        "images/forza-horizon-5-8.jpg",
        "images/forza-horizon-5-9.jpg",
        "images/forza-horizon-5-10.jpg"
    ],
    video:"videos/forza-horizon-5.mp4",
    videoTitle:"Forza Horizon 5 Official Trailer"
}),

    g(38,"FC 27 Standard",[1450,700,1450,2400],"1–4 Players","Up to 99 Players","Sports / Football","Sports","NEW","images/fc-27-standard.jpg","أحدث إصدار من سلسلة EA SPORTS FC، يقدم مباريات كرة قدم وأوضاعًا متعددة مع خيارات لعب محلية وعبر الإنترنت وتجربة تنافسية واسعة.",{
        screenshots:[
            "images/fc-27-1.jpg","images/fc-27-2.jpg","images/fc-27-3.jpg",
            "images/fc-27-4.jpg","images/fc-27-5.jpg","images/fc-27-6.jpg",
            "images/fc-27-7.jpg","images/fc-27-8.jpg","images/fc-27-9.jpg",
            "images/fc-27-10.jpg"
        ],
        video:"videos/fc-27.mp4",
        videoTitle:"FC 27 Trailer"
    }),

    g(39,"GTA VI Standard",[null,2000,null,2500],"1 Player","غير متاح حاليًا","Action / Open World","Action","NEW","images/gta-vi.jpg","تعود Grand Theft Auto إلى ولاية Leonida وVice City في قصة جديدة تتابع Jason وLucia. النسخة الحالية معلنة كتجربة فردية، ولم يتم الإعلان رسميًا عن نمط GTA VI Online حتى الآن.",{
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
    40, // Forza Horizon 5
    8,  // TEKKEN 8
    41, // WWE 2K26
    46, // PES 2020
    42, // Need for Speed Unbound
    47, // Need for Speed Heat
    48, // Need for Speed Payback
    11, // Call of Duty: Vanguard
    43, // Call of Duty: Black Ops III
    49, // Red Dead Redemption 2
    50, // Injustice 2
    60, // Sonic Frontiers
    56, // Batman: Arkham Knight
    55, // Marvel's Avengers
    61, // LEGO Marvel Super Heroes 2
    44, // Battlefield V
    45, // Battlefield 4
    51, // Crash Team Racing Nitro-Fueled
    52, // Far Cry 5
    53, // Uncharted Bundle
    54, // Resident Evil Village
    57, // Carnival Games
    58, // Minecraft
    59  // Unravel Two
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

    if(
        value == null ||
        (typeof value === "string" && value.trim() === "غير متاح")
    ){
        return "غير متاح";
    }

    return `(${value} LE)`;
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
    ${game.prices?.secondary4 != null && game.prices?.secondary4 !== "لا تدعم" ? `
        <div class="price-item">
            <span>Secondary 4</span>
            <strong>${priceText(game.prices.secondary4)}</strong>
        </div>
    ` : ""}

    ${game.prices?.secondary5 != null && game.prices?.secondary5 !== "لا تدعم" ? `
        <div class="price-item">
            <span>Secondary 5</span>
            <strong>${priceText(game.prices.secondary5)}</strong>
        </div>
    ` : ""}

    ${game.prices?.primary4 != null && game.prices?.primary4 !== "لا تدعم" ? `
        <div class="price-item">
            <span>Primary 4</span>
            <strong>${priceText(game.prices.primary4)}</strong>
        </div>
    ` : ""}

    ${game.prices?.primary5 != null && game.prices?.primary5 !== "لا تدعم" ? `
        <div class="price-item">
            <span>Primary 5</span>
            <strong>${priceText(game.prices.primary5)}</strong>
        </div>
    ` : ""}
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