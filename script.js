document.querySelector("#check").addEventListener("click", check);

const horror = "Poltergeist";

function check() {
    const horror = document.querySelector("#horror").value.toLowerCase();

    // conditionals
    if(horror === "poltergeist") {
        document.querySelector("#placeToSee").innerText = "They're here";

        document.querySelector("body").style.backgroundImage =
      "url('https://c.tenor.com/Q8hTEfGuAsAAAAAC/horror-poltergeist.gif')";
    
    } else if (horror === "invasion of the body snatchers") {
        document.querySelector("#placeToSee").innerText = "People are being duplicated. And once it happens to you, you're part of this... thing. It almost happened to me!";

        document.querySelector("body").style.backgroundImage =
      "url('https://c.tenor.com/3AUnMaJkylkAAAAC/donald-sutherland-pod.gif')";
    
    } else if (horror === "halloween") {
        document.querySelector("#placeToSee").innerText = "I met him, fifteen years ago. I was told there was nothing left. No reason, no conscience, no understanding; even the most rudimentary sense of life or death, good or evil, right or wrong. I met this six-year-old child, with this blank, pale, emotionless face and, the blackest eyes... the *devil's* eyes. I spent eight years trying to reach him, and then another seven trying to keep him locked up because I realized what was living behind that boy's eyes was purely and simply... *evil*.";

        document.querySelector("body").style.backgroundImage =
      "url('https://images6.fanpop.com/image/photos/40300000/Michael-Myers-the-halloween-movies-40381603-500-210.gif')";
    
    } else if (horror === "the omen" || horror === "omen") {
        document.querySelector("#placeToSee").innerText = "Your son, Mr. Thorn. The Son of the Devil. He will kill the unborn child. Then he will kill your wife. And then, when he is certain to inherit all that is yours, then, Mr. Thorn... he will kill you.";

        document.querySelector("body").style.backgroundImage =
      "url('https://images.squarespace-cdn.com/content/v1/5aa6f3f14611a01d7ccce033/1551742039095-8V026KCJ76R059DZRQ3E/image-asset.gif')";
    
    } else if (horror === "jaws") {
        document.querySelector("#placeToSee").innerText = "You’re Gonna Need A Bigger Boat!";

        document.querySelector("body").style.backgroundImage =
      "url('https://i.gifer.com/1b5X.gif')";
    
    } else if (horror === "alien") {
        document.querySelector("#placeToSee").innerText = "You still don't understand what you're dealing with, do you? Perfect organism. Its structural perfection is matched only by its hostility.";

        document.querySelector("body").style.backgroundImage =
      "url('https://64.media.tumblr.com/919e517c19caa0b6fe038659d96b25f8/tumblr_inline_p7nm4r6S1q1rlerba_500.gifv')";
    
    } else if (horror === "aliens") {
        document.querySelector("#placeToSee").innerText = "My mommy always said there were no monsters - no real ones - but there are.";

        document.querySelector("body").style.backgroundImage =
      "url('https://media4.giphy.com/media/N8aBRBL6Xy9jy/giphy.gif')";
    
    } else if (horror === "psycho") {
        document.querySelector("#placeToSee").innerText = "We all go a little mad sometimes.";

        document.querySelector("body").style.backgroundImage =
      "url('https://i.pinimg.com/originals/4f/40/9c/4f409caf0208ed091591a0624b0d8264.gif')";
    
    } else if (horror === "us") {
        document.querySelector("#placeToSee").innerText = "They Look Exactly Like Us. They Think Like Us.";

        document.querySelector("body").style.backgroundImage =
      "url('https://nerdist.com/wp-content/uploads/2019/03/giphy-2.gif')";
    
    } else if (horror === "get out") {
        document.querySelector("#placeToSee").innerText = "I Mean, I Told You Not To Go In That House.";

        document.querySelector("body").style.backgroundImage =
      "url('https://blackexcellencefilms.files.wordpress.com/2018/07/gracefulembellishedicelandicsheepdog-size_restricted-e1535073710632.gif')";
    
    } else if (horror === "it") {
        document.querySelector("#placeToSee").innerText = "Hi Georgie";

        document.querySelector("body").style.backgroundImage =
      "url('https://media4.giphy.com/media/13AU33EspJuPTy/200w.webp?cid=ecf05e47on58zu0gx8gvxhlwchxu4z30kmh7x2scg2v6odzv&rid=200w.webp&ct=g')";
    
    } else if (horror === "the birds" || horror === "birds") {
        document.querySelector("#placeToSee").innerText = "Why are they doing this? Why are they doing this? They said when you got here the whole thing started. Who are you? What are you? Where did you come from? I think you're the cause of all of this. I think you're evil. EVIL!";

        document.querySelector("body").style.backgroundImage =
      "url('https://media2.giphy.com/media/bTixcIRW1bWqk/giphy.webp?cid=ecf05e477jw728vsf59pbhi37hsmo4a019cm320bgoy74utm&rid=giphy.webp&ct=g')";
    
    } else if (horror === "carrie") {
        document.querySelector("#placeToSee").innerText = "They're all gonna laugh at you.";

        document.querySelector("body").style.backgroundImage =
      "url('https://media2.giphy.com/media/134Kfzd7fUf2ve/giphy.gif')";
    
    } else if (horror === "a nightmare on elm street" || horror === "nightmare on elm street") {
        document.querySelector("#placeToSee").innerText = "He scraped his fingernails along things. Actually, they were more like finger-knives or something, like he’d made them himself. Anyway, they made this horrible sound.";

        document.querySelector("body").style.backgroundImage =
      "url('https://media2.popsugar-assets.com/files/2013/09/26/914/n/1922283/8517294b90d902de_NightmareOnElm.gif')";
    
    } else if (horror === "the shining" || horror === "shining") {
        document.querySelector("#placeToSee").innerText = " Wendy? Darling? Light, of my life. I'm not gonna hurt ya. You didn't let me finish my sentence. I said, I'm not gonna hurt ya. I'm just going to bash your brains in.";

        document.querySelector("body").style.backgroundImage =
      "url('https://media3.giphy.com/media/igT08WYAKXQM8/200.webp?cid=ecf05e4712etj7oppephv9d96lv34607q34f4khhtrp9l9q1&rid=200.webp&ct=g')";
    
    } else if (horror === "frankenstein") {
        document.querySelector("#placeToSee").innerText = " You have created a Monster and it will destroy you!";

        document.querySelector("body").style.backgroundImage =
      "url('https://media2.giphy.com/media/MQTBeMgUJciGs/200.webp?cid=ecf05e47rkuc11am5r4rd6ihso2oolvjieo42ipz7ojyu3li&rid=200.webp&ct=g')";
    
    } else if (horror === "dracula") {
        document.querySelector("#placeToSee").innerText = " Listen to them. Children of the night. What music they make.";

        document.querySelector("body").style.backgroundImage =
      "url('https://media4.giphy.com/media/PRy5GPH1uAeNa/200w.webp?cid=ecf05e47vnxhrv3yqsq4uhx9nil9ihrqb4h3qkw584ohqdpd&rid=200w.webp&ct=g')";
    
    } else if (horror === "the thing") {
        document.querySelector("#placeToSee").innerText = "If It Takes Us Over, Then It Has No More Enemies, Nobody Left To Kill It. And Then It's Won";

        document.querySelector("body").style.backgroundImage =
      "url('https://thumbs.gfycat.com/DistantMedicalIrishdraughthorse-max-1mb.gif')";
    
    } else if (horror === "night of the living dead") {
        document.querySelector("#placeToSee").innerText = "I ought to drag you out there and FEED you to those things!";

        document.querySelector("body").style.backgroundImage =
      "url('https://media3.giphy.com/media/l2YWvuIJJX9nDVLEc/200.webp?cid=ecf05e47bs2c0jmviuyuvcks1yu99kvdw6f7jcpye6c3u4mm&rid=200.webp&ct=g')";
    
    } else if (horror === "friday the 13th") {
        document.querySelector("#placeToSee").innerText = "In the lake, the one... the one who attacked me. The one who pulled me underneath the water.";

        document.querySelector("body").style.backgroundImage =
      "url('https://media1.giphy.com/media/xT9KVvrnaJt3ruragg/200w.webp?cid=ecf05e47zdislj21tj74w8vmxz6gsv8iq9ra4yazj2fmbl01&rid=200w.webp&ct=g')";
    
    } else if (horror === "the exorcist" || horror === "exorcist") {
        document.querySelector("#placeToSee").innerText = "There are no experts. You probably know as much about possession than most priests. Look, your daughter doesn't say she's a demon. She says she's the devil himself. And if you've seen as many psychotics as I have, you'd know it's like saying you're Napoleon Bonaparte.";

        document.querySelector("body").style.backgroundImage =
      "url('https://media0.giphy.com/media/26uTqYSyTfIFp07wQ/giphy.gif')";
    
    } else if (horror === "the lost boys" || horror === "lost boys") {
        document.querySelector("#placeToSee").innerText = "Drink This Michael. Become One Of Us";

        document.querySelector("body").style.backgroundImage =
      "url('https://i.makeagif.com/media/5-11-2015/JP1u1l.gif')";
    
    } else if (horror === "the people under the stairs" || horror === "people under the stairs") {
        document.querySelector("#placeToSee").innerText = " That brother and sister act you mess with...are evil, plain and simple.";

        document.querySelector("body").style.backgroundImage =
      "url('https://c.tenor.com/QG6wW8tLKHoAAAAd/the-people-under-the-stairs-1991.gif')";
    
    } else if (horror === "rosemary's baby" || horror === "rosemarys baby") {
        document.querySelector("#placeToSee").innerText = " What have you done to his eyes?!?";

        document.querySelector("body").style.backgroundImage =
      "url('https://thumbs.gfycat.com/GrandAdmiredBlackrhino-size_restricted.gif')";
    
    } else if (horror === "candyman") {
        document.querySelector("#placeToSee").innerText = "Candyman, Candyman, Candyman, Candyman, Candyman.";

        document.querySelector("body").style.backgroundImage =
      "url('https://media0.giphy.com/media/l3yZsiH9QR1Cm77dZP/100.webp?cid=ecf05e474ulxdvep96junktzu3bu7hlvp9z2w10liz8lg7mz&rid=100.webp&ct=g')";
    
    } else if (horror == "hellraiser") {
        document.querySelector("#placeToSee").innerText = "You suffering will be legendary, even in hell";

        document.querySelector("body").style.backgroundImage =
      "url('https://media4.giphy.com/media/l49FlGi9qemgMwUzC/200w.webp?cid=ecf05e477rgq0vp03o9whw56duejjghrdi6xe8zebvdcen2s&rid=200w.webp&ct=g')";
    
    } else if (horror === "scream") {
        document.querySelector("#placeToSee").innerText = "Do You Like Scary Movies?";

        document.querySelector("body").style.backgroundImage =
      "url('https://mtv.mtvnimages.com/uri/mgid:file:http:shared:mtv.com/news/wp-content/uploads/2015/06/drew-barrymore-scream-1434573244.gif?quality=.8&height=243&width=500')";
    
    } else if (horror === "scream 2") {
        document.querySelector("#placeToSee").innerText = "Is that the best you can do? Because Billy and Stu were much more original.";

        document.querySelector("body").style.backgroundImage =
      "url('https://i.makeagif.com/media/3-17-2015/eJeSTJ.gif')";
    
    } else if (horror === "scream 3") {
        document.querySelector("#placeToSee").innerText = "Somebody who would kill to know where Sidney Prescott is! One chance Cotton, you've got connections. Where is she?";

        document.querySelector("body").style.backgroundImage =
      "url('https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2015/07/Cotton-Weary.gif')";
    
    } else if (horror === "scream 4") {
        document.querySelector("#placeToSee").innerText = "Come on Mr. Ghostface, whisper to me! Aren't you supposed to ask me a question?";

        document.querySelector("body").style.backgroundImage =
      "url('https://media.giphy.com/media/Rjx9I7Kwqvb50TdhO0/giphy.gif')";
    
    } else if (horror === "the amityville horror" || horror === "amityville horror") {
        document.querySelector("#placeToSee").innerText = "It's always so cold in here";

        document.querySelector("body").style.backgroundImage =
      "url('https://media3.giphy.com/media/Mc7WiBsty2bGsvFVg6/giphy.gif')";
    
    } else if (horror === "the changeling" || horror === "changeling") {
        document.querySelector("#placeToSee").innerText = "That house is not fit to live in. No one's been able to live in it. It doesn't want people";

        document.querySelector("body").style.backgroundImage =
      "url('https://64.media.tumblr.com/803adb36835b27db02ac3b4e82d90105/tumblr_nuwjcdi57D1s1v3r1o3_500.gifv')";
    
    } else if (horror === "jeruzalem") {
        document.querySelector("#placeToSee").innerText = "They all believed in different gods, but for that night they were all dealing with the same devil.";

        document.querySelector("body").style.backgroundImage =
      "url('https://pa1.narvii.com/5987/454a0c2ca1428d865b161ce7669964eca8afd5b6_hq.gif')";
    
    } else if (horror === "audrey rose") {
        document.querySelector("#placeToSee").innerText = "You're saying reincarnation. I mean, is that what you're saying?";

        document.querySelector("body").style.backgroundImage =
      "url('https://64.media.tumblr.com/572d525a4c433e779b90cf766f4fecf5/tumblr_oxrz45fC1Q1w1yjv2o1_500.gifv')";
    
    } else if (horror === "the nun") {
        document.querySelector("#placeToSee").innerText = "God ends here.";

        document.querySelector("body").style.backgroundImage =
      "url('https://64.media.tumblr.com/31cdc406118c1942c7334f774c7f40fe/2864a4a29e54187f-88/s540x810/62778618e7bdd7980def8a501b7f745b3bc7f2c1.gifv')";
    
    } else if (horror === "jeepers creepers") {
        document.querySelector("#placeToSee").innerText = "It needs to scare you. There's something in fear, something it can smell. Something that tells it if there's anything inside someone that it might... like";

        document.querySelector("body").style.backgroundImage =
      "url('https://media1.giphy.com/media/tdCTrW0CGiZ32/giphy.gif')";
    
    } else if (horror === "fright night") {
        document.querySelector("#placeToSee").innerText = "Do you realize how much trouble you've caused me? Spying on me. Almost disturbing my sleep this afternoon. Telling policemen about me!";

        document.querySelector("body").style.backgroundImage =
      "url('https://i.gifer.com/5goP.gif')";
    
    } else if (horror === "crawl") {
        document.querySelector("#placeToSee").innerText = "They can see you in the dark";

        document.querySelector("body").style.backgroundImage =
      "url('https://64.media.tumblr.com/241767e5f7fd271945f8cbc12a1bcf32/7db92e6a7181ec25-ba/s540x810/47228ed2b197e4eb93c786741548ca2c898fd96e.gifv')";
    
    } else if (horror === "annabelle comes home") {
        document.querySelector("#placeToSee").innerText = "I let her out";

        document.querySelector("body").style.backgroundImage =
      "url('https://64.media.tumblr.com/acd2d5654ff43d31af1f294fa1e11256/27fa37d5772935b5-d8/s540x810/c2d67aa4d3def8c59fa0710ecd2c40101553f904.gifv')";
    
    } else if (horror === "the haunting") {
        document.querySelector("#placeToSee").innerText = "Can't you feel it? It's alive... watching.";

        document.querySelector("body").style.backgroundImage =
      "url('https://i.gifer.com/Lu1e.gif')";
    
    } else if (horror === "salem's lot") {
        document.querySelector("#placeToSee").innerText = "Open The Window, Mark";

        document.querySelector("body").style.backgroundImage =
      "url('https://thumbs.gfycat.com/FearlessGregariousIberianemeraldlizard-max-1mb.gif')";
    
    } else if (horror === "firestarter") {
        document.querySelector("#placeToSee").innerText = "Back off! Just back off! · Get out of here, you bastard! I'll burn you up!";

        document.querySelector("body").style.backgroundImage =
      "url('https://i.gifer.com/1UcQ.gif')";
    
    } else if (horror === "thirteen ghosts") {
        document.querySelector("#placeToSee").innerText = "There are ghosts in the basement!";

        document.querySelector("body").style.backgroundImage =
      "url('https://64.media.tumblr.com/0872a12a1c04ace2a7dda2106b30ad4f/47c71f199b388f8b-82/s540x810/0f7c3e440489b95b5db16e02d48ee24d4fbe10f6.gifv')";
    
    } else if (horror === "30 days of night") {
        document.querySelector("#placeToSee").innerText = "There is no escape. No hope. Only hunger and pain.";

        document.querySelector("body").style.backgroundImage =
      "url('https://c.tenor.com/p8r36IZqH44AAAAC/30-days.gif')";
    
    } else if (horror === "the meg" || horror === "meg") {
        document.querySelector("#placeToSee").innerText = "My God! It's a shark. It's like twenty, twenty-five meters.";

        document.querySelector("body").style.backgroundImage =
      "url('https://i.makeagif.com/media/10-30-2019/9zIQt8.gif')";
    
    } else if (horror === "mama") {
        document.querySelector("#placeToSee").innerText = "A ghost is an emotion bent out of shape, condemned to repeat itself, time and time again until it rights the wrong that was done";

        document.querySelector("body").style.backgroundImage =
      "url('http://31.media.tumblr.com/604524b5bfa6d7cc74b45f266d19e990/tumblr_mrehunBUFA1s0fyp5o1_400.gif')";
    
    } else if (horror === "prince of darkness") {
        document.querySelector("#placeToSee").innerText = "No prison can hold him now";

        document.querySelector("body").style.backgroundImage =
      "url('https://64.media.tumblr.com/645063d99f504520a5082a647bd04142/tumblr_mtbx741fL71rsbftzo1_r1_500.gifv')";
    
    } else if (horror === "poltergeist 2") {
        document.querySelector("#placeToSee").innerText = "They're back. ";

        document.querySelector("body").style.backgroundImage =
      "url('https://media3.giphy.com/media/6iTw8GatNqAlW/giphy.gif')";
    
    } else if (horror === "poltergeist 3") {
        document.querySelector("#placeToSee").innerText = "Excuse me Dr. Seaton, that little blonde girl keeps staring at the mirror, as if she sees us";

        document.querySelector("body").style.backgroundImage =
      "url('https://64.media.tumblr.com/e514b2340853e1f7eea89c16fedf8b66/tumblr_phd2bi9z0q1qj6sk2o1_500.gifv')";
    
    } else if (horror === "wolfen") {
        document.querySelector("#placeToSee").innerText = "It's not wolves, it's Wolfen. For 20,000 years Wilson - ten times your Christian era - the 'skins and wolves, the great hunting nations, lived together, nature in balance. Then the slaughter came.";

        document.querySelector("body").style.backgroundImage =
      "url('https://64.media.tumblr.com/91a01e14edd81045514e9d07537b1c80/ef5c4b0d945c2546-e4/s500x750/e23b8752bfe649d6d067f263d9332c5b9391f962.gifv')";
    
    } else if (horror === "the fog") {
        document.querySelector("#placeToSee").innerText = "To the ships at sea who can hear my voice, look across the water, into the darkness. Look for the fog.";

        document.querySelector("body").style.backgroundImage =
      "url('http://24.media.tumblr.com/7f3e8449c39fe754e746daff651a6e75/tumblr_mmuwzw76sX1s488ujo1_500.gif')";
    
    } else if (horror === "trick 'r treat") {
        document.querySelector("#placeToSee").innerText = "I hate Halloween";

        document.querySelector("body").style.backgroundImage =
      "url('https://64.media.tumblr.com/75c5e2d62b1874d2b9b74fd0abb40162/21d5e2749ab27e17-ea/s540x810/c14ebc76c23fcd5e950a1f93fff4c54ec6566f1c.gifv')";
    
    } else if (horror === "the sentinel" || horror === "sentinel") {
        document.querySelector("#placeToSee").innerText = "The angel Uriel was stationed at the entrance to Eden to guard it from the devil. Since that time a long line of guardians... sentinels, have guarded the world against evil. Right now it's Father Halliran upstairs. But tonight YOU become the next sentinel. All the people you saw here, the old man, the lesbians... all of them are reincarnations. Devils. The only way they can stop the new sentinal is to make you commit suicide. That's what they were trying to do.";

        document.querySelector("body").style.backgroundImage =
      "url('http://24.media.tumblr.com/tumblr_mb7hpzMlOZ1qdezf9o1_500.gif')";
    
    } else if (horror === "the texas chainsaw massacre" || horror === "texas chainsaw massacre") {
        document.querySelector("#placeToSee").innerText = "My family's always been in meat.";

        document.querySelector("body").style.backgroundImage =
      "url('https://c.tenor.com/qMl1YIgRUQwAAAAC/texas-chainsaw.gif')";
    
    } else if (horror === "stoker") {
        document.querySelector("#placeToSee").innerText = "Sometimes you need to do something bad to stop you from doing something worse";

        document.querySelector("body").style.backgroundImage =
      "url('https://64.media.tumblr.com/c1383bdc9bb6c5e55c1bf6e6e3da5db2/45d266066e948129-f1/s540x810/e636cdfccb86b25d9f1157cb4007493ca8de4a0b.gifv')";
    
    } else if (horror === "the purge") {
        document.querySelector("#placeToSee").innerText = "Commencing at the siren, any and all crime, including murder, will be legal for 12 continuous hours. Police, fire, and emergency medical services will be unavailable until tomorrow morning at 7 a.m. when The Purge concludes. Blessed be our New Founding Fathers and America, a nation reborn. May God be with you all";

        document.querySelector("body").style.backgroundImage =
      "url('https://66.media.tumblr.com/568e8a6ae8d5d628095657f83071886e/tumblr_ncjcexbX1u1rp0vkjo1_500.gif')";
    
    } else if (horror === "predator") {
        document.querySelector("#placeToSee").innerText = "There's something out there waiting for us, and it ain't no man. ";

        document.querySelector("body").style.backgroundImage =
      "url('https://i.gifer.com/PDGS.gif')";
    
    } else if (horror === "prometheus") {
        document.querySelector("#placeToSee").innerText = "Big things have small beginnings ";

        document.querySelector("body").style.backgroundImage =
      "url('https://quietmonth.com/wp-content/uploads/2018/02/engineervsalienone-shr2.gif')";
    
    } else if (horror === "ouija") {
        document.querySelector("#placeToSee").innerText = "I just want to stop whatever is happening. My friends are dying.";

        document.querySelector("body").style.backgroundImage =
      "url('https://thumbs.gfycat.com/AdorableVictoriousBagworm-size_restricted.gif')";
    
    } else if (horror === "insidious") {
        document.querySelector("#placeToSee").innerText = " Last night I watch myself sleep then I flew away";

        document.querySelector("body").style.backgroundImage =
      "url('https://i.gifer.com/FhOg.gif')";
    
    } else if (horror === "house on haunted hill") {
        document.querySelector("#placeToSee").innerText = "Is this house really haunted?";

        document.querySelector("body").style.backgroundImage =
      "url('https://64.media.tumblr.com/43aa2544d37138259ceeabe7ffdae3c9/tumblr_o7cnk5XuI31s1v3r1o6_250.gifv')";
    
    } else if (horror === "happy death day") {
        document.querySelector("#placeToSee").innerText = "Lori's little plot was super lame. Poisoning a cupcake? Really? We're Kappas. We don't eat cupcakes.";

        document.querySelector("body").style.backgroundImage =
      "url('https://thumbs.gfycat.com/BackPerfectIlladopsis-max-1mb.gif')";
    
    } else if (horror === "insidious the last key") {
        document.querySelector("#placeToSee").innerText = "I'm so sorry for calling so late. My name is Lorraine. You helped my family a long time ago when my son was just a boy. And now the same thing is happening to my grandson.";

        document.querySelector("body").style.backgroundImage =
      "url('https://giffiles.alphacoders.com/208/208279.gif')";
    
    } else if (horror === "fallen") {
        document.querySelector("#placeToSee").innerText = "Sometimes, I think the basic job that human beings have is just to figure out what the hell is going on.";

        document.querySelector("body").style.backgroundImage =
      "url('https://pa1.narvii.com/6501/df2ee31659b487249c8079ed6ff7c518511598e7_hq.gif')";
    
    } else if (horror === "crimson peak") {
        document.querySelector("#placeToSee").innerText = "You're monsters. Both of you!";

        document.querySelector("body").style.backgroundImage =
      "url('https://64.media.tumblr.com/8fe0286e4b0ddb137f6ac56325f0213c/tumblr_oca6z1G1us1s1vn29o2_500.gifv')";
    
    } else if (horror === "creepshow") {
        document.querySelector("#placeToSee").innerText = "...Just tell it to call you Billie.";

        document.querySelector("body").style.backgroundImage =
      "url('http://37.media.tumblr.com/tumblr_mbymhrhRLQ1qedb29o1_500.gif')";
    
    } else if (horror === "the cottage") {
        document.querySelector("#placeToSee").innerText= "Peter is terrified of moths";

        document.querySelector("body").style.backgroundImage =
      "url('https://64.media.tumblr.com/32e2167b6f5c418fb609f5536ca67e2d/tumblr_n0puzdEY2h1rv3w77o2_r2_250.gifv')";
    
    } else if (horror === "cabin in the woods" || horror === "the cabin in the woods") {
        document.querySelector("#placeToSee").innerText= "Society needs to crumble. We're all just too chickenshit to let it.";

        document.querySelector("body").style.backgroundImage =
      "url('https://j.gifs.com/yP6z5P.gif')";
    
    } else if (horror === "house of 1000 corpses") {
        document.querySelector("#placeToSee").innerText= "It’s all real. The boogeyman is real…and you found him.";

        document.querySelector("body").style.backgroundImage =
      "url('http://24.media.tumblr.com/tumblr_l66i6laFQi1qcop9yo1_500.gif')";
    
    } else if (horror === "1408") {
        document.querySelector("#placeToSee").innerText= "..but where's the bone-chilling terror?";

        document.querySelector("body").style.backgroundImage =
      "url('https://thumbs.gfycat.com/FaroffAssuredBlowfish-size_restricted.gif')";
    
    } else if (horror === "doctor sleep") {
        document.querySelector("#placeToSee").innerText= "You're magic. Like me.";

        document.querySelector("body").style.backgroundImage =
      "url('https://i.imgur.com/i2fbBtf.gif?noredirect')";
    
    } else if (horror === "tales from the darkside") {
        document.querySelector("#placeToSee").innerText= "Oh, I was just thinking of this guy I know. Couldn't distinguish a third dynastysacred scroll from a piece of post-Alexandrian pictogram porn.";

        document.querySelector("body").style.backgroundImage =
      "url('https://nofspodcast.com/wp-content/uploads/2019/05/tales-from-the-darkside-movie-gif.gif')";
    
    } else if (horror === "oculus") {
        document.querySelector("#placeToSee").innerText= "I've met my demons, I have many.";

        document.querySelector("body").style.backgroundImage =
      "url('https://c.tenor.com/dVZIpBWG0cwAAAAC/oculus-2013.gif')";
    
    } else if (horror === "twilight zone the movie") {
        document.querySelector("#placeToSee").innerText= "Hey... you wanna see something really scary?";

        document.querySelector("body").style.backgroundImage =
      "url('https://i.gifer.com/QsxY.gif')";
    
    } else if (horror === "unfriended") {
        document.querySelector("#placeToSee").innerText= " Laura, I'm sorry that we drifted apart!";

        document.querySelector("body").style.backgroundImage =
      "url('https://thumbs.gfycat.com/ShortWelltodoJohndory-size_restricted.gif')";
    
    } else if (horror === "the ring") {
        document.querySelector("#placeToSee").innerText= "It means ever since that girl's been gone, things have been better.";

        document.querySelector("body").style.backgroundImage =
      "url('https://media1.giphy.com/media/GTeBnkeQY4Nzy/200.gif')";
    
    } else if (horror === "the visit") {
        document.querySelector("#placeToSee").innerText= "So they are weird in the morning, but they're even weirder at night?";

        document.querySelector("body").style.backgroundImage =
      "url('https://i.gifer.com/Ajt2.gif')";
    
    } else if (horror === "tremors") {
        document.querySelector("#placeToSee").innerText= "That's how they git you. They're under the goddamned ground!";

        document.querySelector("body").style.backgroundImage =
      "url('https://c.tenor.com/CXtqBcEB8ncAAAAC/tremors-monster.gif')";
    
    } else if (horror === "paranormal activity") {
        document.querySelector("#placeToSee").innerText= "Well, basically it could be two things: it could be a ghost... [mock whisper] or it could be a demon.";

        document.querySelector("body").style.backgroundImage =
      "url('https://i.pinimg.com/originals/6a/34/99/6a349959e1e8d9821dc3b119c99208b8.gif')";
    
    } else if (horror === "paranormal activity 2") {
        document.querySelector("#placeToSee").innerText= "LEAVE ME ALONE!!!!";

        document.querySelector("body").style.backgroundImage =
      "url('https://media1.popsugar-assets.com/files/thumbor/UmNdMQ5TGhyWBlnNykMd2BkPGYE/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2014/09/17/782/n/1922283/a4530a77fe3f54bb_tznetpzb1hoyl7ihar4a/i/Paranormal-Activity-2-2010.gif')";
    
    } else if (horror === "paranormal activity 3") {
        document.querySelector("#placeToSee").innerText= "Did you hear that? Ah!";

        document.querySelector("body").style.backgroundImage =
      "url('https://i.gifer.com/UWUZ.gif')";
    
    } else if (horror === "paranormal activity 4") {
        document.querySelector("#placeToSee").innerText= "He looks just like his mother.";

        document.querySelector("body").style.backgroundImage =
      "url('https://i.makeagif.com/media/7-11-2015/hfPq2U.gif')";
    
    } else if (horror === "resident evil") {
        document.querySelector("#placeToSee").innerText= "My Name Is Alice...";

        document.querySelector("body").style.backgroundImage =
      "url('http://www.atbpublishing.com/g2vpodcast/wp-content/uploads/2017/02/tumblr_ncksocWfh81szylh2o3_500.gif')";
    
    } else if (horror === "ready or not") {
        document.querySelector("#placeToSee").innerText= "You'll have to hide better than that.";

        document.querySelector("body").style.backgroundImage =
      "url('https://64.media.tumblr.com/42af93da6e6b3e4b81aabdd426be8467/b43788ddef0a3791-49/s540x810/de7453a1ae15f9cbe768393aa4e45f595ea02721.gifv')";
    
    } else if (horror === "mirrors") {
        document.querySelector("#placeToSee").innerText= "Don't make me threaten you!";

        document.querySelector("body").style.backgroundImage =
      "url('http://pa1.narvii.com/6374/e0fa742a4fe3abc4792e833be164001e55fc41e4_00.gif')";
    
    } else if (horror === "the last exorcism" || horror === "last exorcism") {
        document.querySelector("#placeToSee").innerText= "If you believe in God, then you gotta believe in the Devil.";

        document.querySelector("body").style.backgroundImage =
      "url('https://pa1.narvii.com/6231/bf459baa85c6eabcdb636a4ad316c2bd01ada8b3_hq.gif')";
    
    } else if (horror === "the legend of hell house" || horror === "legend of hell house") {
        document.querySelector("#placeToSee").innerText= "What did he do to make this house so evil, Mr. Fischer?";

        document.querySelector("body").style.backgroundImage =
      "url('https://25.media.tumblr.com/tumblr_m9e00zefBl1qazdhko1_500.gif')";
    
    } else if (horror === "as above so below") {
        document.querySelector("#placeToSee").innerText= "No one uses this corridor. People who go in this tunnel don't come out";

        document.querySelector("body").style.backgroundImage =
      "url('https://64.media.tumblr.com/be6679622ef79c8ebe7bc36c86a4f75b/tumblr_omkqgjNfQt1udst5yo1_540.gifv')";
    
    } else if (horror === "jaws 2") {
        document.querySelector("#placeToSee").innerText= "But I'm telling you, and I'm telling everybody at this table that that's a shark! And I know what a shark looks like, because I've seen one up close. And you'd better do something about this one, because I don't intend to go through that hell again!";

        document.querySelector("body").style.backgroundImage =
      "url('https://c.tenor.com/PUdlMQU2k_8AAAAd/jaws-jaws2.gif')";
    
    } else if (horror === "jaws 3") {
        document.querySelector("#placeToSee").innerText= "White sharks are dangerous";

        document.querySelector("body").style.backgroundImage =
      "url('https://thumbs.gfycat.com/LiveVillainousAtlasmoth-max-1mb.gif')";
    
    } else if (horror === "jaws the revenge") {
        document.querySelector("#placeToSee").innerText= "Well she got the idea in her head that the shark that killed Martin and Sean is now following the family.";

        document.querySelector("body").style.backgroundImage =
      "url('http://33.media.tumblr.com/1c34339c91fe354c927b468b1b8a51ba/tumblr_nqtdnb1qXO1rp0vkjo1_500.gif')";
    
    } else if (horror === "the invisible man" || horror === "invisible man") {
        document.querySelector("#placeToSee").innerText= "He said that wherever I went, he would find me, walk right up to me, and I wouldn’t be able to see him.";

        document.querySelector("body").style.backgroundImage =
      "url('https://media2.giphy.com/media/XaGSdKtYTqS3DI7pLG/200.gif')";
    
    } else if (horror === "vhs") {
        document.querySelector("#placeToSee").innerText= "Did you erase it?";

        document.querySelector("body").style.backgroundImage =
      "url('https://i.gifer.com/XtgQ.gif')";
    
    } else if (horror === "hell night") {
        document.querySelector("#placeToSee").innerText= "12 years ago Raymond Garth killed his family here and then committed suicide!";

        document.querySelector("body").style.backgroundImage =
      "url('https://64.media.tumblr.com/911ecbafe3b3f5256a31e2d82f9d59b1/tumblr_ofihyiu2Uz1tulv1do9_500.gifv')";
    
    } else if (horror === "halloween 2") {
        document.querySelector("#placeToSee").innerText= "Help...";

        document.querySelector("body").style.backgroundImage =
      "url('https://i.makeagif.com/media/10-19-2015/xIYgC_.gif')";
    
    } else if (horror === "halloween 3") {
        document.querySelector("#placeToSee").innerText= "Teddy, do me another favor, will you? Find out everything you can about Conal Cochran. He runs Silver Shamrock, the Halloween mask people";

        document.querySelector("body").style.backgroundImage =
      "url('http://38.media.tumblr.com/9d6c193695dadbbb2fd6ad87c12acc39/tumblr_nw9y23f1nv1rp0vkjo1_500.gif')";
    
    } else if (horror === "halloween 4") {
      document.querySelector("#placeToSee").innerText= "Wherever she is, that little child is in mortal danger.";

      document.querySelector("body").style.backgroundImage =
    "url('https://media2.giphy.com/media/5UuerHgsL6h1YhldUE/giphy.gif?cid=ecf05e471hqp401sylnsx0rodk1ugwroyct4lkqk9h38caen&rid=giphy.gif&ct=g')";
  
  } else if (horror === "halloween 5") {
        document.querySelector("#placeToSee").innerText= "She was shaking; her whole body was shaking.";

        document.querySelector("body").style.backgroundImage =
      "url('https://consequence.net/wp-content/uploads/2014/10/halloween-4-danielle-harris-gif.gif?resize=1031%2C580&quality=80&strip')";
    
    } else if (horror === "freaky") {
        document.querySelector("#placeToSee").innerText= "He moves through this town unseen, like a ghost, and he kills at will every year. The geriatric serial killer, really?";

        document.querySelector("body").style.backgroundImage =
      "url('https://c.tenor.com/yGZvVLb5P8kAAAAC/freaky-movie-millie.gif')";
    
    } else if (horror === "the final girls") {
        document.querySelector("#placeToSee").innerText= "At least I get to see her on the anniversary of her death. Even if she is being chased by a psycho";

        document.querySelector("body").style.backgroundImage =
      "url('https://64.media.tumblr.com/315780d4a26151ee4a68b21e6c473606/tumblr_nw2g3ha2Dj1qkvv72o1_500.gifv')";
    
    } else if (horror === "the faculty") {
        document.querySelector("#placeToSee").innerText= "You know in my world Casey, there were limitless oceans as far as the eye could see. Beautiful, huh?";

        document.querySelector("body").style.backgroundImage =
      "url('https://c.tenor.com/Mdt18zn5xm0AAAAC/the-faculty-movie.gif')";
    
    } else if (horror === "disturbing behavior") {
        document.querySelector("#placeToSee").innerText= "Blue Robots.";

        document.querySelector("body").style.backgroundImage =
      "url('https://thumbs.gfycat.com/AdvancedAgitatedCottontail-size_restricted.gif')";
    
    } else if (horror === "dawn of the dead") {
        document.querySelector("#placeToSee").innerText= "When there's no more room in Hell, the dead will walk the Earth";

        document.querySelector("body").style.backgroundImage =
      "url('https://31.media.tumblr.com/9ba27617b3795835e0b91cadae4d5c3a/tumblr_ncjlcjarde1rp0vkjo1_500.gif')";
    
    } else if (horror === "truth or dare") {
        document.querySelector("#placeToSee").innerText= "Look i'm sorry, but the game is real, once your asked you're in. Wherever you go, whatever you do it will find you.";

        document.querySelector("body").style.backgroundImage =
      "url('https://media4.giphy.com/media/26DNhk1G6Vn5OPOgM/giphy.gif?cid=ecf05e47j1dc59w88d5b30hfcru1o0oar3q0xj33uxvtqavb&rid=giphy.gif&ct=g')";
    } else if (horror === "hereditary") {
        document.querySelector("#placeToSee").innerText= "She isn't gone.";

        document.querySelector("body").style.backgroundImage =
      "url('https://offloadmedia.feverup.com/secretldn.com/wp-content/uploads/2018/01/18152246/HEREDITARY-HORROR.gif')";
    } else if (horror === "midsommar") {
        document.querySelector("#placeToSee").innerText= "It's a bear.";

        document.querySelector("body").style.backgroundImage =
      "url('https://c.tenor.com/tHr2t4sLoz0AAAAC/midsommar-bear.gif')";
    } else if (horror === "the blair witch project" || horror === "blair witch project") {
      document.querySelector("#placeToSee").innerText= "I'm scared to close my eyes, I'm scared to open them! We're gonna die out here!";

      document.querySelector("body").style.backgroundImage =
    "url('https://media3.giphy.com/media/vV1j3hHd8JZ1m/giphy.gif?cid=ecf05e47j0k1wcdt1jvurxwhv3cxfvlorv73j5hrt0khbwsi&rid=giphy.gif&ct=g')";
  } else if (horror === "the conjuring" || horror === "conjuring") {
    document.querySelector("#placeToSee").innerText= "Somethin' awful happened here.";

    document.querySelector("body").style.backgroundImage =
  "url('https://media3.giphy.com/media/8fQLDmrqXFVC0/giphy.gif?cid=ecf05e47erg7cm8xc0zy19p5ed4uk1j44ie3g7cvcv39dx03&rid=giphy.gif&ct=g')";
} else if (horror === "black christmas") {
  document.querySelector("#placeToSee").innerText= "";

  document.querySelector("body").style.backgroundImage =
"url('https://media0.giphy.com/media/Th5c5xa6VFSne/giphy.gif?cid=ecf05e47sk9yi79v4mgkohcl075n0575dhbx8bg59noah94y&rid=giphy.gif&ct=g')";
} else if (horror === "the stuff") {
  document.querySelector("#placeToSee").innerText= "";

  document.querySelector("body").style.backgroundImage =
"url('https://media2.giphy.com/media/Kxwlgpktg54ly/giphy.gif?cid=ecf05e47zccuibzs1fqksl99amyevbxdcvqifb3pd8mihie1&rid=giphy.gif&ct=g')";
} else if (horror === "goodnight mommy") {
  document.querySelector("#placeToSee").innerText= "I don’t think that’s our mother.";

  document.querySelector("body").style.backgroundImage =
"url('https://media2.giphy.com/media/3oEdv9hPDAQ068Iuty/giphy.gif?cid=ecf05e47umvbg13njfc8kl2okn827lc7b7l8qub502twk7vi&rid=giphy.gif&ct=g')";
} else if (horror === "the bad seed" || horror === "bad seed") {
  document.querySelector("#placeToSee").innerText= "Did she kill him? But she's my little girl. And I love her. Oh my baby, my baby!";

  document.querySelector("body").style.backgroundImage =
"url('https://media0.giphy.com/media/26gJyytYUZeNyMHsc/giphy.gif?cid=ecf05e47wacmntkj3cspxrce0hr16vwa1drnj07pzfmr8lx2&rid=giphy.gif&ct=g')";
} else if (horror === "the descent" || horror === "descent") {
  document.querySelector("#placeToSee").innerText= "Hey, there's something down here.";

  document.querySelector("body").style.backgroundImage =
"url('https://media1.giphy.com/media/1fhc5gUAOJ7EsUI8sf/giphy.gif?cid=ecf05e47xnkyyoqs661ipfczorgnfcoq62wcxfrik3kckbuq&rid=giphy.gif&ct=g')";
} else if (horror === "videodrome") {
  document.querySelector("#placeToSee").innerText= "";

  document.querySelector("body").style.backgroundImage =
"url('https://media3.giphy.com/media/PTjD6e5oh66ME/giphy.gif?cid=ecf05e47ogwoaqi46xirn0mqzzthq527e4uc4i6wf2avojfq&rid=giphy.gif&ct=g')";
} else if (horror === "black sunday") {
  document.querySelector("#placeToSee").innerText= "";

  document.querySelector("body").style.backgroundImage =
"url('https://media0.giphy.com/media/IaFVL3fPuGA00/giphy.gif?cid=ecf05e47wxcdjnzbx4rzxd0y70r5lb8fszeknzdc6tcen8k6&rid=giphy.gif&ct=g')";
} else if (horror === "the fly") {
  document.querySelector("#placeToSee").innerText= "You have to leave now, and never come back here.";

  document.querySelector("body").style.backgroundImage =
"url('https://media2.giphy.com/media/3o7TKEky8X2OwuavPq/giphy.gif?cid=ecf05e475he2rmxygzfyp5bap84gswatme87prgefwlr15pb&rid=giphy.gif&ct=g')";
} else if (horror === "a nightmare on elm street 2" || horror === "nightmare on elm street 2") {
  document.querySelector("#placeToSee").innerText= "Fight it, Jesse! You created him. You can destroy him! He is living off of your fear, Jesse. ";

  document.querySelector("body").style.backgroundImage =
"url('https://media4.giphy.com/media/rUVsr9tJmWP28/giphy.gif?cid=ecf05e47wzsp05xyp2n2ww6igfsf8x6qe7rykcz3b2kjiuhe&rid=giphy.gif&ct=g')";
} else if (horror === "a nightmare on elm street 3" || horror === "nightmare on elm street 3") {
  document.querySelector("#placeToSee").innerText= "Welcome to prime time";

  document.querySelector("body").style.backgroundImage =
"url('https://media2.giphy.com/media/MXi11Tb6kU1gs/giphy.gif?cid=ecf05e47on0u5s2b8i5wdf636pcv7xkheongp2fa42hx6hml&rid=giphy.gif&ct=g')";
} else if (horror === "suspiria") {
  document.querySelector("#placeToSee").innerText= "Susie, do you know anything about... witches?";

  document.querySelector("body").style.backgroundImage =
"url('https://media3.giphy.com/media/9JcMdNbzpMcDtxNf62/giphy.gif?cid=ecf05e47snw63nlm7d37enw2adi05lppg7bwhxsb3ret1z1r&rid=giphy.gif&ct=g')";
} else if (horror === "nosferatu") {
  document.querySelector("#placeToSee").innerText= "";

  document.querySelector("body").style.backgroundImage =
"url('https://media4.giphy.com/media/EF7SPrk8gRtjq/giphy.gif?cid=ecf05e47ljyvas1gabwomzatra8t2egllw7sf5pwromouu9i&rid=giphy.gif&ct=g')";
} else if (horror === "return of the living dead") {
  document.querySelector("#placeToSee").innerText= "Braaaiiins";

  document.querySelector("body").style.backgroundImage =
"url('https://media0.giphy.com/media/6DKarCyCfJN84/giphy.gif?cid=ecf05e47sd0nkk6dgel9kouobnd1v7jzz668p1prmpu7hhvb&rid=giphy.gif&ct=g')";
} else if (horror === "28 days later") {
  document.querySelector("#placeToSee").innerText= "No. There's no government. No army. No police. No TV, no radio, no electricity. You're the first uninfected person we've seen in six days";

  document.querySelector("body").style.backgroundImage =
"url('https://media3.giphy.com/media/26DMYYB1uHHqDouo8/giphy.gif?cid=ecf05e47iaiu9f1jd92z8lxndkmoqr30y919tvzix54qdh20&rid=giphy.gif&ct=g')";
} else if (horror === "an american werewolf in london" || horror === "american werewolf in london") {
  document.querySelector("#placeToSee").innerText= "There's gonna be a full moon tonight";

  document.querySelector("body").style.backgroundImage =
"url('https://media1.giphy.com/media/TJaCuInuMtqOaMhdQH/giphy.gif?cid=ecf05e470z10wyhr0l9cfq0mvpr5mq45it6n9nk9jx2ro7qe&rid=giphy.gif&ct=g')";
} else if (horror === "let the right one in") {
  document.querySelector("#placeToSee").innerText= "Are you OLD? No. I'm only twelve. But I've been that for a long time.";

  document.querySelector("body").style.backgroundImage =
"url('https://media2.giphy.com/media/3o6ozCksmkATUyHida/giphy.gif?cid=ecf05e47f5r6wiy86ss01fvg55jdw8k6i4bieawiaq933184&rid=giphy.gif&ct=g')";
} else if (horror === "it (2017)") {
  document.querySelector("#placeToSee").innerText= "";

  document.querySelector("body").style.backgroundImage =
"url('https://media0.giphy.com/media/xT9IgvEOwRzUcZDRiU/giphy.gif?cid=ecf05e47sfiwljt37b3g4x5zv348m71ure4lllcghosxok3c&rid=giphy.gif&ct=g')";
} else if (horror === "dead ringers") {
  document.querySelector("#placeToSee").innerText= "Separation can be a... terrifying thing";

  document.querySelector("body").style.backgroundImage =
"url('https://media0.giphy.com/media/QxjTzgPCSfcLdjwd1O/giphy.gif?cid=ecf05e47o1my763xaaifd9op3bffa78ya0y1yml27558tbcm&rid=giphy.gif&ct=g')";
} else if (horror === "night house") {
  document.querySelector("#placeToSee").innerText= "";

  document.querySelector("body").style.backgroundImage =
"url('https://media1.giphy.com/media/56hPClUiHjcLwDWO2H/giphy.gif?cid=ecf05e47f35oa20537yrwcu6d0fhgsgkxebr327vgibn1psc&rid=giphy.gif&ct=g')";
} else {
      document.querySelector("#placeToSee").innerText= "";
        document.querySelector("body").style.backgroundImage = "url('https://thumbs.gfycat.com/BonyLivelyAtlanticblackgoby-size_restricted.gif')";

    }
}



