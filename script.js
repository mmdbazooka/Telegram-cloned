document.ondragstart = function() {return false}
window.onload = function() {
    proxy1.checked = true
    proxyS4.checked = true
    checkbox.checked = true
}
let body = document.querySelector("body")
let proxys = document.querySelectorAll(".proxy")
let profileImages = document.querySelectorAll("#telegram > #selectProfile > img:not(#closeSelPro)")
let telegram = document.querySelector("#telegram > div:not(#proxyList,#leftMenu)")
let telegramRight = document.querySelector("#telegram > .right")
let left = document.querySelector("#telegram > .left")
let botLeft = document.querySelector("#telegram > .left > .bottom")
let chatTop = document.querySelector("#telegram > .right > .top ")
let chatCenter = document.querySelector("#telegram > .right > .center ")
let chatBottom = document.querySelector("#telegram > .right > .bottom ")
let chatBottomFC = document.querySelector("#telegram > .right > .bottomFC ")
let chatName = document.querySelector("#telegram > .right > .top > .left > .chatName")
let lastSeenOrMember = document.querySelector("#telegram > .right > .top > .left > .lastSeenOrMember")
let userAccount = document.querySelector("#telegram > .right > .top > .left")
let myProfile = document.querySelector("#myProfile")
let inputs = document.querySelectorAll(".sticker")
let sendImages = document.querySelectorAll(".sendImg")
let checkNet = 0
let checkSBox = 0
let checkSearch = 0
let checkImgBox = 0
let payam = chatInput.value


let channelsData = [
    {id:1,profileImg:"Stormy.png",name:"Hamid",lastMessageTime:"19:29 PM",lastMessage:"چطوری",CounterMessage:0,
    lastSeenOrMember:"last seen Recently",chatAble:1,
    userPm:[
        {msg:"salam",hour:18,minute:45,seen:2,profileImg:0,name:""},
        {msg:"khobi?",hour:18,minute:46,seen:2,profileImg:0,name:""}
    ],myPm:[
        {msg:"salam",hour:19,minute:20,seen:2},
        {msg:"چطوری",hour:19,minute:29,seen:2}
    ],bio:"⚡️ stormy ⚡️"},
    {id:2,profileImg:"academy.jpg",name:"آکادمی کد نویسی بحر العلوم",lastMessageTime:"7:19 AM",lastMessage:"سلام بچه ها دوره تابستان از 15",CounterMessage:2,
    lastSeenOrMember:"835 subscribers",chatAble:0,
    userPm:[
        {msg:"سلام بچه ها دوره تابستان از 15 تیر شروع می شود",hour:7,minute:19,seen:2,profileImg:"images/profiles/academy.jpg",name:"آکادمی کد نویسی بحرالعلوم"},
        {msg:"آدرس پژوهشگاه : جاده دریا جنب دانشگاه روزبهان <br> ساختمان سپهر طبقه اول",hour:18,minute:45,seen:2,profileImg:"images/profiles/academy.jpg",name:"آکادمی کد نویسی بحرالعلوم"}
    ],myPm:[],bio:"t.me/Bahr_AC"},
    {id:3,profileImg:"interface-design.jpg",name:"Interface Design",lastMessageTime:"7:59 AM",lastMessage:"استاد پی وی چک کنید لطفا",CounterMessage:5,
    lastSeenOrMember:"411 members",chatAble:1,
    userPm:[
        {msg:"سلام. یکی از دوستان برای تغییر قالب نیازمندیم",hour:2,minute:46,seen:2,profileImg:"images/profiles/08.jpg",name:"Saeed Jafari"},
        {msg:"لطفا اگه کسی تمایل داشت به این شماره تو تلگرام <br> پیام بده",hour:2,minute:47,seen:2,profileImg:"images/profiles/08.jpg",name:"Saeed Jafari"},
        {msg:"09115554466",hour:2,minute:48,seen:2,profileImg:"images/profiles/08.jpg",name:"Saeed Jafari"},
        {msg:"Bobzmind",hour:4,minute:25,seen:2,profileImg:"images/profiles/09.jpg",name:"Ali &nbsp;"},
        {msg:"دوستان کارشناسی ارشد به آیدی بالا پیام بدن",hour:4,minute:26,seen:2,profileImg:"images/profiles/09.jpg",name:"Ali &nbsp;"},
        {msg:"استاد پی وی چک کنید لطفا",hour:7,minute:59,seen:2,profileImg:"images/profiles/11.jpg",name:"Motahare"},
    ],myPm:[],bio:"گروه فنی طراحان و برنامه نویسان Front-End"},
    {id:4,profileImg:"course.jpg",name:"پرو زمستانه 1401",lastMessageTime:"18:57 PM",lastMessage:"اره کلی کد زدم باهاش",CounterMessage:4,
    lastSeenOrMember:"132 members",chatAble:1,
    userPm:[
        {msg:"سلام وقت بخیر",hour:18,minute:45,seen:2,profileImg:"images/profiles/06.jpg",name:"Fatemeh"},
        {msg:" من هرچقدر فایل  سی اس اس  رو تغییر میدم <br> هیچ تاثیری تو سایت نمیزاره",hour:18,minute:46,seen:2,profileImg:"images/profiles/06.jpg",name:"Fatemeh"},
        {msg:"بعد که سایت و باز میکنم همچنان مثل قبل میمونه",hour:18,minute:47,seen:2,profileImg:"images/profiles/06.jpg",name:"Fatemeh"},
        {msg:"اگر امکانش هست راهنماییم میکنین",hour:18,minute:48,seen:2,profileImg:"images/profiles/06.jpg",name:"Fatemeh"},
        {msg:"یک چیزیو باز کردید ولی نبستید",hour:18,minute:50,seen:2,profileImg:"images/profiles/07.jpg",name:"Saman"},
        {msg:"یعنی چی دقیقا؟",hour:18,minute:51,seen:2,profileImg:"images/profiles/06.jpg",name:"Fatemeh"},
        {msg:"میشه از کدتون عکس بفرستید",hour:18,minute:50,seen:2,profileImg:"images/profiles/07.jpg",name:"Saman"},
        {msg:"کدم خیلی طولانیه",hour:18,minute:51,seen:2,profileImg:"images/profiles/06.jpg",name:"Fatemeh"},
        {msg:"ولی مشکل اینجاست حتی فایل جدید درست کردم",hour:18,minute:52,seen:2,profileImg:"images/profiles/06.jpg",name:"Fatemeh"},
        {msg:"کپی کردم",hour:18,minute:53,seen:2,profileImg:"images/profiles/06.jpg",name:"Fatemeh"},
        {msg:"همچنان تغییر نمیکنه وقتی رو Browser بازش میکنم",hour:18,minute:54,seen:2,profileImg:"images/profiles/06.jpg",name:"Fatemeh"},
        {msg:" پاک نمیشه Border <br> اون قسمتم که میخوام تغییر بدم چیز خاصی نیست",hour:18,minute:55,seen:2,profileImg:"images/profiles/06.jpg",name:"Fatemeh"},
        {msg:"جداست مطمعنی آدرس درسته؟ css اگر",hour:18,minute:56,seen:2,profileImg:"images/profiles/07.jpg",name:"Saman"},
        {msg:"اره کلی کد زدم باهاش",hour:18,minute:57,seen:2,profileImg:"images/profiles/06.jpg",name:"Fatemeh"},
    ],
    myPm:[],bio:"گروه پرو زمستانه 1401 آکادمی بحر العلوم"},
    {id:5,profileImg:"saved images.png",name:"Saved Messages",lastMessageTime:"20:15 PM",lastMessage:"@BaHr_AC",CounterMessage:0,
    lastSeenOrMember:"",chatAble:1,
    myPm:[
        {msg:"فایل جعفر رو بفرستم",hour:11,minute:40,seen:2},
        {msg:"رمز اکانت جیمیل : afdsfsdfsf54",hour:19,minute:22,seen:2},
        {msg:"لینک کانال پژوهشگاه",hour:19,minute:59,seen:2},
        {msg:"@BaHr_AC",hour:20,minute:15,seen:2}
    ],bio:""},
    {id:6,profileImg:"ui-ux.jpg",name:"دوره پیشرفته اینترفیس",lastMessageTime:"21:45 PM",lastMessage:"خواهش میکنم،لطف دارید",CounterMessage:3,
    lastSeenOrMember:"72 members",chatAble:1,
    userPm:[
        {msg:"چقدره؟ Adobe Xd سلام حجم",hour:18,minute:45,seen:2,profileImg:"images/profiles/05.jpg",name:"ⓗⓐⓓⓘ"},
        {msg:"سلام حجم برنامه حدودا 500 مگ هست",hour:19,minute:50,seen:2,profileImg:"images/profiles/04.jpg/",name:"Khosro"},
        {msg:"خب دوستان دوره تمام شد",hour:9,minute:23,seen:2,profileImg:"images/profiles/ostad-nazari.jpg/",name:"Hamed Nazari"},
        {msg:"شما رو به خدا بزرگ میسپارم",hour:9,minute:23,seen:2,profileImg:"images/profiles/ostad-nazari.jpg/",name:"Hamed Nazari"},
        {msg:"مرسی استاد بخاطر تمام زحماتتون",hour:11,minute:59,seen:2,profileImg:"images/profiles/01.jpg/",name:"Amir S"},
        {msg:"مرسی استاد بابت تدریس خوبتون",hour:21,minute:32,seen:2,profileImg:"images/profiles/02.jpg/",name:"|\/|@Hd!¥r"},
        {msg:"خواهش میکنم،لطف دارید",hour:21,minute:45,seen:2,profileImg:"images/profiles/ostad-nazari.jpg/",name:"Hamed Nazari"}
    ],
    myPm:[],bio:""},
    {id:7,profileImg:"course.jpg",name:"پایلوت زمستان 1401",lastMessageTime:"11:56 AM",lastMessage:"سلام دوستان، میتونم بپرسم",CounterMessage:1,
    lastSeenOrMember:"163 members",chatAble:1,
    userPm:[
        {msg:"چهارشنبه ساعت ۴ و پنجشنبه ساعت ۱۰ و نیم و ۴",hour:10,minute:11,seen:2,profileImg:"images/profiles/ostad.jpg",name:"محمد بحرالعلوم"},
        {msg:"بچه ها کلاس های این هفته دایره طبق برنامه <br> همیشگی",hour:10,minute:11,seen:2,profileImg:"images/profiles/ostad.jpg",name:"محمد بحرالعلوم"},
        {msg:"سلام دوستان، میتونم بپرسم شما جلسه چندم هستید؟",hour:11,minute:56,seen:2,profileImg:"images/profiles/03.jpg",name:"EvoNick"}
    ],
    myPm:[],bio:"گروه پایلوت زمستانه 1401 آکادمی بحر العلوم"} 
]

function channelChecker(p) {
    if(chatTop.className == "top hidden") chatTop.className = "top show"
    else if(chatTop.className == "top hidden backWhite1") chatTop.className = "top show backWhite1"
    else if(chatTop.className == "top show") chatTop.className = "top show"
    else if(chatTop.className == "top show backWhite1") chatTop.className = "top show backWhite1"
    selectChat.className = "hidden"
    chatName.innerHTML = p.name
    lastSeenOrMember.innerHTML = p.lastSeenOrMember
    if(lastSeenOrMember.innerHTML == "") chatName.style.marginTop = "10px"
    else chatName.style.marginTop = "0"
    if(p.chatAble == 0) {
        if(chatBottomFC.className == "bottomFC hidden lightMode") chatBottomFC.className = "bottomFC show lightMode"
        else if(chatBottomFC.className == "bottomFC hidden") chatBottomFC.className = "bottomFC show"
        else if(chatBottomFC.className == "bottomFC show") chatBottomFC.className = "bottomFC show"
        else if(chatBottomFC.className == "bottomFC show lightMode") chatBottomFC.className = "bottomFC show lightMode"
    }
    else if(p.chatAble == 1) {
        if(chatBottomFC.className == "bottomFC hidden") chatBottomFC.className = "bottomFC hidden"
        else if(chatBottomFC.className == "bottomFC show lightMode") chatBottomFC.className = "bottomFC hidden lightMode"
        else if(chatBottomFC.className == "bottomFC show") chatBottomFC.className = "bottomFC hidden"
        else if(chatBottomFC.className == "bottomFC hidden lightMode") chatBottomFC.className = "bottomFC hidden lightMode"
        if(chatBottom.className == "bottom hidden backWhite1") chatBottom.className = "bottom show backWhite1"
        else if(chatBottom.className == "bottom hidden") chatBottom.className = "bottom show"
        else if(chatBottom.className == "bottom show") chatBottom.className = "bottom show"
        else if(chatBottom.className == "bottom show backWhite1") chatBottom.className = "bottom show backWhite1"
    }
}

function create(itemData) {
    let channel = document.createElement("div")
    channel.className = "channel hidden"
    channel.addEventListener("click" , function(){channelChecker(itemData)})
    botLeft.appendChild(channel)

    let left = document.createElement("div")
    left.className = "left"
    channel.appendChild(left)

    let profileImg = document.createElement("img")
    profileImg.setAttribute("id" , "profileImg")
    profileImg.src = `images/channels/${itemData.profileImg}`
    left.appendChild(profileImg)

    let right = document.createElement("div")
    right.className = "right"
    channel.appendChild(right)

    let top = document.createElement("div")
    top.className = "top"
    right.appendChild(top)

    let channelName = document.createElement("div")
    channelName.setAttribute("id" , "channelName")
    channelName.innerHTML = itemData.name
    top.appendChild(channelName)

    let channelLastMessageTime = document.createElement("div")
    channelLastMessageTime.setAttribute("id" , "channelLastMessageTime")
    channelLastMessageTime.innerHTML = itemData.lastMessageTime
    top.appendChild(channelLastMessageTime)
    
    let bottom = document.createElement("div")
    bottom.className = "bottom"
    right.appendChild(bottom)

    let channelLastMessage = document.createElement("div")
    channelLastMessage.setAttribute("id" , "channelLastMessage")
    channelLastMessage.innerHTML = itemData.lastMessage
    bottom.appendChild(channelLastMessage)

    let channelCounterMessage = document.createElement("div")
    channelCounterMessage.setAttribute("id" , "channelCounterMessage")
    channelCounterMessage.className = "cCm"
    channelCounterMessage.innerHTML = itemData.CounterMessage
    if(itemData.CounterMessage == 0) channelCounterMessage.className = "hidden"
    bottom.appendChild(channelCounterMessage)
    setInterval(() => {
        channelLastMessage.innerHTML = itemData.lastMessage
        if(itemData.lastMessage.length >= 25) channelLastMessage.innerHTML = "..." + itemData.lastMessage.slice(0,25)
        channelLastMessageTime.innerHTML = itemData.lastMessageTime 
    }, 10);
}

function createMsg(msgP,userMsg,h,m,userImg,userName) {
    let messageParent = document.createElement("div")
    messageParent.className = msgP
    chatCenter.appendChild(messageParent)
    let message = document.createElement("div")
    message.className = "message"
    message.innerHTML = userMsg
    let text = userMsg
    if(text.length > 30) message.innerHTML = text.slice(0,45) + "\n" + text.slice(45,80) + "\n" + text.slice(80,120) + "\n" + text.slice(120,160) + "\n" + text.slice(160,200)+ "\n" + text.slice(200,240) + "\n" + text.slice(240,280) + "\n" + text.slice(280,320) 
    messageParent.appendChild(message)
    if(userMsg.lastIndexOf(".jpg") !== -1 || userMsg.lastIndexOf(".png") !== -1) {
        message.innerHTML = ""
        let img = document.createElement("img")
        img.className = "imgInPv"
        img.src = userMsg
        message.appendChild(img)
    }
    let messageName = document.createElement("div")
    messageName.className = "name"
    messageName.innerHTML = userName
    message.appendChild(messageName)
    let profileImg = document.createElement("img")
    profileImg.className = "profileImg"
    profileImg.src = userImg
    if(userImg == 0) {
        profileImg.style.display = "none"
        message.style.marginLeft = "10px"
    }
    messageParent.appendChild(profileImg)
    let messageTime = document.createElement("div")
    messageTime.className = "messageTime"
    messageTime.innerHTML = h + ":" + m
    message.appendChild(messageTime)
    let send = document.createElement("img")
    send.className = "sendImg"
    send.src = "images/oneTick.png"
        if(proxy2.checked == true)  {
            if(messageParent.className == "messageParentU" ) {
                send.src = "images/twoTick.png"
                setTimeout(() => {send.src = "images/twoTick.png"}, 500);
            }
            else setTimeout(() => {send.src = "images/oneTick.png"}, 500);
        }
        else if(proxy3.checked == true)  {
            if(messageParent.className == "messageParentU" ) {
                send.src = "images/twoTick.png"
                setTimeout(() => {send.src = "images/twoTick.png"}, 500);
            }
            else setTimeout(() => {send.src = "images/oneTick.png"}, 2000);
        }
        message.appendChild(send)
}

function foring(jsonData,func) {
    for(i=0;i<jsonData.length;i++) {
        func(jsonData[i])
    }
}

foring(channelsData,create)

let channels = document.querySelectorAll(".channel") 

function chatMessage(num) {
    sendImages[0].onclick = function() {sendImgFromGallery(0,num)}
    sendImages[1].onclick = function() {sendImgFromGallery(1,num)}
    sendImages[2].onclick = function() {sendImgFromGallery(2,num)}
    sendImages[3].onclick = function() {sendImgFromGallery(3,num)}
    sendImages[4].onclick = function() {sendImgFromGallery(4,num)}
    sendImages[5].onclick = function() {sendImgFromGallery(5,num)}
    sendImages[6].onclick = function() {sendImgFromGallery(6,num)}
    sendImages[7].onclick = function() {sendImgFromGallery(7,num)}
    sendImages[8].onclick = function() {sendImgFromGallery(8,num)}
    sendImages[9].onclick = function() {sendImgFromGallery(9,num)}
    sendImages[10].onclick = function() {sendImgFromGallery(10,num)}
    sendImages[11].onclick = function() {sendImgFromGallery(11,num)}

    checkSBox = 0
    stickerBox.style.visibility = "hidden"
    chatCenter.innerHTML = "";
    for(i in channelsData[num].userPm) createMsg("messageParentU",channelsData[num].userPm[i].msg,channelsData[num].userPm[i].hour,channelsData[num].userPm[i].minute,channelsData[num].userPm[i].profileImg,channelsData[num].userPm[i].name)
    for(i in channelsData[num].myPm) createMsg("messageParentM",channelsData[num].myPm[i].msg,channelsData[num].myPm[i].hour,channelsData[num].myPm[i].minute,0,"")

    chatInput.oninput = function() {pushing(num)}
    inputs[0].onclick = function(){chatInput.value += inputs[0].innerHTML;pushing(num)}
    inputs[1].onclick = function(){chatInput.value += inputs[1].innerHTML;pushing(num)}
    inputs[2].onclick = function(){chatInput.value += inputs[2].innerHTML;pushing(num)}
    inputs[3].onclick = function(){chatInput.value += inputs[3].innerHTML;pushing(num)}
    inputs[4].onclick = function(){chatInput.value += inputs[4].innerHTML;pushing(num)}
    inputs[5].onclick = function(){chatInput.value += inputs[5].innerHTML;pushing(num)}
    inputs[6].onclick = function(){chatInput.value += inputs[6].innerHTML;pushing(num)}
    inputs[7].onclick = function(){chatInput.value += inputs[7].innerHTML;pushing(num)}
    inputs[8].onclick = function(){chatInput.value += inputs[8].innerHTML;pushing(num)}
    inputs[9].onclick = function(){chatInput.value += inputs[9].innerHTML;pushing(num)}
    inputs[10].onclick = function(){chatInput.value += inputs[10].innerHTML;pushing(num)}
    inputs[11].onclick = function(){chatInput.value += inputs[11].innerHTML;pushing(num)}

    function pushing(num) {
        if(!chatInput.value == "") {
            pvVoice.src = "images/send.png"
            pvVoice.onclick = function() {
                if(chatInput.value == "") return
                else if(chatInput.value == " ") return
                else {
                    pvVoice.src = "images/voice.png"
                    let time = new Date()
                    createMsg("messageParentM",chatInput.value,time.getHours(),time.getMinutes(),0,"")
                    channelsData[num].myPm.push({msg:chatInput.value,hour:time.getHours(),minute:time.getMinutes(),seen:0})
                    channelsData[num].lastMessage = chatCenter.lastChild.children[0].childNodes[0].data
                    channelsData[num].lastMessageTime = chatCenter.lastChild.children[0].children[1].innerHTML + " PM"
                    chatInput.value = ""
                    chatCenter.scrollTop = chatCenter.scrollTop + 100
                }  
            }
        }
        else pvVoice.src = "images/voice.png"
    }
}
for(i in channels) channels[i].onclick = function(){chatCenter.innerHTML = "";}

function request(num) {
    chatCenter.scrollTop = chatCenter.scrollTop + 100
    chatMessage(num);
    chatCenter.className = "center show"
    for(i=0;i<7;i++) {
        channels[i].style.backgroundColor = "inherit" 
        channels[i].childNodes[1].childNodes[1].childNodes[0].style.color = "#8e8e8e"
    }
    channels[num].style.backgroundColor = "#009687b6"
    channels[num].childNodes[1].childNodes[1].childNodes[0].style.color = "#e1e1e1"
    if(!channels[num].childNodes[1].childNodes[1].childNodes[1]) return
    channels[num].childNodes[1].childNodes[1].childNodes[1].style.display = "none"
}
channels[0].onclick =  function(){request(0)}
channels[1].onclick =  function(){request(1)}
channels[2].onclick =  function(){request(2)}
channels[3].onclick =  function(){request(3)}
channels[4].onclick =  function(){request(4)}
channels[5].onclick =  function(){request(5)}
channels[6].onclick =  function(){request(6)}

proxyS2.onclick = function() {
    checkNet = 0
    for(i=0;i<proxys.length;i++) proxys[i].style.display = "none"
        proxy1.checked = true
        pro2.innerHTML = "available (ping: 21 ms)"
        pro3.innerHTML = "available (ping: 8561 ms)"
        for(i=0;i<channels.length;i++) {
            if(channels[i].className == "channel hidden visible" || channels[i].className == "channel hidden visible channelNightMode" ) {
                channels[i].classList.toggle("visible")
                hamburgerMenuImg.src = "images/hamburger-menu.png"
                loadingMassage.className = "visible"
            } else channels[i].className = "channel hidden"
        }
        if(chatTop.className == "top show backWhite1")  chatTop.className = "top hidden backWhite1"
        else if(chatTop.className == "top show")  chatTop.className = "top hidden"
        if(chatBottom.className == "bottom show backWhite1")  chatBottom.className = "bottom hidden backWhite1"
        else if(chatBottom.className == "bottom show")  chatBottom.className = "bottom hidden"
        if(chatBottomFC.className == "bottomfC show") chatBottomFC.className = "bottomfC hidden"
        else if(chatBottomFC.className == "bottomfC show lightMode") chatBottomFC.className = "bottomfC hidden lightMode"
        selectChat.className = "show"
        chatCenter.innerHTML = ""
        chatCenter.className = "center hidden"
        for(i=0;i<7;i++) {
            channels[i].style.backgroundColor = "transparent" 
            channels[i].childNodes[1].childNodes[1].childNodes[0].style.color = "#8e8e8e"
        }
        if(chatBottomFC.className == "bottomFC show") chatBottomFC.className = "bottomFC hidden"
        if(chatBottomFC.className == "bottomFC show lightMode") chatBottomFC.className = "bottomFC hidden lightMode"
    }
proxyS4.onclick = function() {
    for(i=0;i<proxys.length;i++)
        proxys[i].style.display = "flex"
}

proxy1.onclick = function() {
    checkNet = 0
    pro1.innerHTML = "Checking..."
    pro1.style.color = "#616e71"
    setTimeout(() => {
        pro1.innerHTML = "unavailable"
        pro1.style.color = "#de1515"
    }, 2000);
    for(i=0;i<channels.length;i++) {
        if(channels[i].className == "channel hidden visible" || channels[i].className == "channel hidden visible channelNightMode" || channels[i].className == "channel hidden channelNightMode visible" ) {
            channels[i].classList.toggle("visible")
            hamburgerMenuImg.src = "images/hamburger-menu.png"
            loadingMassage.className = "visible"
        } else return
    }
    if(chatTop.className == "top show backWhite1")  chatTop.className = "top hidden backWhite1"
    else if(chatTop.className == "top show")  chatTop.className = "top hidden"
    if(chatBottom.className == "bottom show backWhite1")  chatBottom.className = "bottom hidden backWhite1"
    else if(chatBottom.className == "bottom show")  chatBottom.className = "bottom hidden"
    if(chatBottomFC.className == "bottomfC show") chatBottomFC.className = "bottomfC hidden"
    else if(chatBottomFC.className == "bottomfC show lightMode") chatBottomFC.className = "bottomfC hidden lightMode"
    selectChat.className = "show"
    chatCenter.innerHTML = ""
    chatCenter.className = "center hidden"
    for(i=0;i<7;i++) {
        channels[i].style.backgroundColor = "transparent" 
        channels[i].childNodes[1].childNodes[1].childNodes[0].style.color = "#8e8e8e"
    }
    if(chatBottomFC.className == "bottomFC show") chatBottomFC.className = "bottomFC hidden"
    if(chatBottomFC.className == "bottomFC show lightMode") chatBottomFC.className = "bottomFC hidden lightMode"
    pro2.innerHTML = "available (ping: 21 ms)"
    pro3.innerHTML = "available (ping: 8561 ms)"
}
proxy2.onclick = function() {
    checkNet = 1
    clearInterval(pingInterval)
    pro2.innerHTML = "Checking..."
    pro2.style.color = "#616e71"
    setTimeout(() => {
        pro2.innerHTML = "online"
        pro2.style.color = "#3ee2cc"
        loadingMassage.className = "hidden"
        hamburgerMenuImg.src = "images/hamburger-menu-active.png"
        for(i=0;i<channels.length;i++) {
            if(channels[i].className == "channel hidden visible") return
            else channels[i].classList.toggle("visible")
        }
    }, 1000);
    pro3.innerHTML = "available (ping: 8561 ms)"
}
proxy3.onclick = function() {
    checkNet = 1
    clearInterval(pingInterval2)
    pro3.innerHTML = "Checking..."
    pro3.style.color = "#616e71"
    setTimeout(() => {
        pro3.innerHTML = "online"
        pro3.style.color = "#3ee2cc"
    loadingMassage.className = "hidden"
    hamburgerMenuImg.src = "images/hamburger-menu-active.png"
    for(i=0;i<channels.length;i++) {
        if(channels[i].className == "channel hidden visible") return
        else channels[i].classList.toggle("visible")
    }
    }, 2000);
    pro2.innerHTML = "available (ping: 21 ms)"
}
proxyIcon.onclick = function() {
    proxyList.classList.toggle("visible")
    if(rs.style.visibility == "inherit") rs.style.visibility = "inherit"
    else rs.style.visibility = "hidden"
    holder.className = "show"
}
closeProxy.onclick = function() {
    proxyList.classList.toggle("visible")
    if(rs.style.visibility == "inherit") rs.style.visibility = "inherit"
    else rs.style.visibility = "hidden"
    holder.className = "hidden"
}
let pingInterval = setInterval(() => {
    let ping = Math.ceil(Math.random()*50)
    pro2.innerHTML = `available (ping: ${ping} ms)`
}, 1500);
let pingInterval2 = setInterval(() => {
    let ping = Math.ceil(Math.random()*10000 + 3000) 
    pro3.innerHTML = `available (ping: ${ping} ms)`
}, 1500);

deletePro1.onclick = function() {
    proxys[0].style.display = "none"
    proxy2.checked = true
    clearInterval(pingInterval)
    pro2.innerHTML = "online"
    loadingMassage.className = "hidden"
    hamburgerMenuImg.src = "images/hamburger-menu-active.png"
    for(i=0;i<channels.length;i++) {
        if(channels[i].className == "channel hidden visible" || channels[i].className == "channel hidden visible channelNightMode" ) return
        else channels[i].classList.toggle("visible")
    }
}
deletePro2.onclick = function() {
    proxys[1].style.display = "none"
    proxy1.checked = true
    for(i=0;i<channels.length;i++) {
        if(channels[i].className == "channel hidden visible" || channels[i].className == "channel hidden visible channelNightMode" ) {
            channels[i].classList.toggle("visible")
            hamburgerMenuImg.src = "images/hamburger-menu.png"
            loadingMassage.className = "visible"
        } else return
    }
    chatCenter.innerHTML = ""
    chatCenter.className = "center hidden"
}
deletePro3.onclick = function() {
    proxys[2].style.visibility = "hidden"
    deletePro3.style.visibility = "hidden"
    proxy1.checked = true
    for(i=0;i<channels.length;i++) {
        if(channels[i].className == "channel hidden visible" || channels[i].className == "channel hidden visible channelNightMode" ) {
            channels[i].classList.toggle("visible")
            hamburgerMenuImg.src = "images/hamburger-menu.png"
            loadingMassage.className = "visible"
        }
    }
    chatCenter.innerHTML = ""
    chatCenter.className = "center hidden"
}
threedotpro3.onmouseover = function(){deletePro3.style.visibility = "visible"}
hamburgerMenuImg.onclick = function() {
    if(telegramRight.className == "right filterOpc") {return}
    else {
        leftMenu.classList.toggle("leftMenuActive")
        holder.className = "show"
    }  
}
holder.onclick = closeMenu

function closeMenu() {
    if(leftMenu.className == "leftMenuActive" || leftMenu.className == "leftMenuActive backWhite1" || leftMenu.className == "backWhite1 leftMenuActive" ) {
        leftMenu.classList.toggle("leftMenuActive")
        holder.className = "hidden"
    }
}
let proBtns = document.querySelector("#telegram > #proxyList > .bottom")

checkbox.onclick = function() {
    body.classList.toggle("lightMode")
    left.classList.toggle("lightMode")
    info.classList.toggle("lightMode")
    editProfileContent.classList.toggle("lightMode")
    leftMenu.classList.toggle("backWhite1")
    items.classList.toggle("colorblack1")
    myName.classList.toggle("colorblack1")
    telegram.classList.toggle("backWhite1")
    searchChat.classList.toggle("backWhite1")
    proxyList.classList.toggle("backWhite1")
    addProxyList.classList.toggle("backWhite1")
    proinfo.classList.toggle("backWhite1")
    proBtns.classList.toggle("backWhite1")
    chatTop.classList.toggle("backWhite1")
    chatBottom.classList.toggle("backWhite1")
    chatBottomFC.classList.toggle("lightMode")
    for(i=0;i<proxys.length;i++) proxys[i].classList.toggle("lightMode")
    for(i=0;i<channelsData.length;i++) {
        channels[i].classList.toggle("channelNightMode")
        let channelName = document.querySelectorAll("#channelName")
        channelName[i].classList.toggle("colorblack1")
        chatBackground.classList.toggle("lightMode")
        selectChat.classList.toggle("lightMode")
        threedotpro1.classList.toggle("lightMode")
        threedotpro2.classList.toggle("lightMode")
        threedotpro3.classList.toggle("lightMode")
        if(channelsData[i].CounterMessage < 0) {
            let channelCounterMessage = document.querySelectorAll(".cCM")
            channelCounterMessage[i].classList.toggle("backBlue")
        }
    }
}

addProxy.onclick = function() {
    addProxyList.classList.toggle("visible")
    proxyList.classList.toggle("visible")
}
proxySecret.value = ""
proxyPort.value = ""
proxyHostName.value = ""

cancelProxy.onclick = function() {
    addProxyList.classList.toggle("visible")
    proxyList.classList.toggle("visible")
    proxySecret.value = ""  
    proxyPort.value = ""
    proxyHostName.value = ""
}

saveProxy.onclick = function() {
    if(proxySecret.value == "") {
        proxySecret.style.borderBottom = "1px solid #de1515"
        proxySecret.onfocus = function() {
            proxySecret.style.borderBottom = ""  
        }
        proxySecret.className = "animationProxy"
        setTimeout(() => {
            proxySecret.className = ""
        }, 500);
    }
    if(proxyPort.value == "") {
        proxyPort.style.borderBottom = "1px solid #de1515"
        proxyPort.onfocus = function() {
            proxyPort.style.borderBottom = ""  
        }
        proxyPort.className = "animationProxy"
        setTimeout(() => {
            proxyPort.className = ""
        }, 500);
    }
    if(proxyHostName.value == "") {
        proxyHostName.style.borderBottom = "1px solid #de1515"
        proxyHostName.onfocus = function() {
            proxyHostName.style.borderBottom = ""  
        }
        proxyHostName.className = "animationProxy"
        setTimeout(() => {
            proxyHostName.className = ""
        }, 500);
    }
    if(proxySecret.value !== "" && proxyPort.value !== "" && proxyHostName.value !== "" && proxys[2].style.visibility == "hidden") {
        let proxyHostNameM = proxyHostName.value
        addProxyList.classList.toggle("visible")
        proxyList.classList.toggle("visible")
        newProN.innerHTML = proxyHostNameM
        proxys[2].style.visibility = "inherit"
        proxySecret.value = ""  
        proxyPort.value = ""
        proxyHostName.value = ""
    }   
    else if(proxys[2].style.visibility == "inherit") {
        addProxyError.classList.toggle("visible")
        setTimeout(() => {
            addProxyError.classList.toggle("visible")
        }, 2000);
    }
}
let mute = 0
chatBottomFC.onclick = function() {
    if(mute == 0) {
        mute = 1
        chatBottomFC.innerHTML = "UnMute"
    }
    else {
        mute = 0
        chatBottomFC.innerHTML = "Mute"
    }
}
document.querySelector("#telegram").oncontextmenu = function() {return false}

savedMessage.onclick = function() {
    if(channels[4].style.display == "none") return
    else {
        request(4)
        closeMenu()
        channelChecker(channelsData[4])
    }
}

function closeInfo(thSwWr) {
    info.classList.toggle("hidden")
    holder.className = "hidden"
    thSwWr.innerHTML = ""
}

userAccount.onclick = function() {
    info.classList.toggle("hidden")
    holder.className = "show"
    info.innerHTML = ""
    for(i=0;i<channelsData.length;i++) {
        if(channelsData[i].name == userAccount.children[0].innerHTML) {
            let closeImg = document.createElement("img")
            closeImg.setAttribute("id" , "closeInfo")
            closeImg.src = "images/close.png"
            info.appendChild(closeImg)

            closeImg.addEventListener("click" , function() {closeInfo(thSwWr)})

            let channelInfo = document.createElement("div")
            channelInfo.setAttribute("id" , "channelInfo")
            channelInfo.innerHTML = "Channel Info"
            info.appendChild(channelInfo)

            let profileImg = document.createElement("img")
            profileImg.setAttribute("id" , "profileImg")
            profileImg.src = `images/channels/${channelsData[i].profileImg}`
            info.appendChild(profileImg)

            let channelName = document.createElement("div")
            channelName.setAttribute("id" , "channelName")
            channelName.innerHTML = channelsData[i].name
            info.appendChild(channelName)

            let lstOrMember = document.createElement("div")
            lstOrMember.setAttribute("id" , "lstOrMember")
            lstOrMember.innerHTML = channelsData[i].lastSeenOrMember
            info.appendChild(lstOrMember)

            let hr = document.createElement("div")
            hr.className = "hr"
            info.appendChild(hr)

            let content = document.createElement("div")
            content.setAttribute("id" , "content")
            info.appendChild(content)

            let bioContainer = document.createElement("div")
            bioContainer.setAttribute("id" , "bioContainer")
            content.appendChild(bioContainer)

            let bioInfo = document.createElement("img")
            bioInfo.setAttribute("id" , "bioInfo")
            bioInfo.src = "images/info.png"
            bioContainer.appendChild(bioInfo)

            let bio = document.createElement("div")
            bio.setAttribute("id" , "bio")
            bio.innerHTML = channelsData[i].bio
            if(bio.innerHTML.indexOf("t.me") !== -1) bio.style.color = "#05a091"
            if(bio.innerHTML == "") bioInfo.style.display = "none"
            bioContainer.appendChild(bio)

            let notificationsContainer = document.createElement("div")
            notificationsContainer.setAttribute("id" , "notificationsContainer")
            content.appendChild(notificationsContainer)

            let notifImg = document.createElement("img")
            notifImg.setAttribute("id" , "notifImg")
            notifImg.src = "images/notification.png"
            notificationsContainer.appendChild(notifImg)

            let notification = document.createElement("div")
            notification.setAttribute("id" , "notification")
            notification.innerHTML = "Notification"
            notificationsContainer.appendChild(notification)

            let thSwWr = document.createElement("div")
            thSwWr.className = "theme-switch-wrapper"
            thSwWr.innerHTML = `
                <label class="theme-switch" for="checkboxN">
                <input type="checkbox" id="checkboxN" >
                <div class="slider round"></div>
                </label>
            `
            notificationsContainer.appendChild(thSwWr)

            let sendMessage = document.createElement("div")
            sendMessage.setAttribute("id" , "sendMessage")
            sendMessage.innerHTML = "Send Message"
            if(channelsData[i].chatAble == 0) sendMessage.innerHTML = "Show Channel"
            content.appendChild(sendMessage)

            sendMessage.addEventListener("click" , function() {closeInfo(thSwWr)})

            let deleteChannel = document.createElement("div")
            deleteChannel.setAttribute("id" , "deleteChannel")
            deleteChannel.innerHTML = "Delete Channel"
            content.appendChild(deleteChannel)

            deleteChannel.addEventListener("click" , function() {
                for(i=0;i<channels.length;i++) {
                    if(channels[i].children[1].children[0].children[0].innerHTML == userAccount.children[0].innerHTML) {
                        channels[i].style.display = "none"
                        closeInfo(thSwWr)
                        if(chatTop.className == "top show backWhite1")  chatTop.className = "top hidden backWhite1"
                        else if(chatTop.className == "top show")  chatTop.className = "top hidden"
                        if(chatBottom.className == "bottom show backWhite1")  chatBottom.className = "bottom hidden backWhite1"
                        else if(chatBottom.className == "bottom show")  chatBottom.className = "bottom hidden"
                        if(chatBottomFC.className == "bottomFC show") chatBottomFC.className = "bottomFC hidden"
                        else if(chatBottomFC.className == "bottomFC show lightMode") chatBottomFC.className = "bottomFC hidden lightMode"
                        selectChat.className = "show"
                        chatCenter.innerHTML = ""
                        chatCenter.className = "center hidden"
                    }
                }
            })
        }
    }
}
pvSearch.onclick = function() {
    if(checkSearch == 0) {
        searchMessage.style.visibility = "inherit"
        checkSearch = 1
    }
    else if(checkSearch == 1) {
        searchMessage.style.visibility = "hidden"
        checkSearch = 0
    }
}

let myProf = "images/profiles/my-profile.jpg"
let myPNotSave = "images/profiles/my-profile.jpg"
let myAccountName = "bazooka"

closeLeftMenu.onclick = function() {closeMenu()}
editProfile.onclick = function(){openEditPro()}
editProfile2.onclick = function(){openEditPro()}

function openEditPro() {
    closeMenu()
    editProfileContent.classList.toggle("hidden")
    holder.className = "show"
    if(checkNet == 0) {
        situation.innerHTML = "Offline"
        situation.style.color = "#7d8286"
    } 
    else {
        situation.innerHTML = "Online"
        situation.style.color = "#05a091"
    }
}
closeEdit.onclick = function() {
    editProfileContent.classList.toggle("hidden")
    holder.className = "hidden"
}
changeMyProfileImg.onclick = function() {
    selectProfile.className = "show"
}
closeSelPro.onclick = function() {selectProfile.className = "hidden"}
function apply() {
    myProf = myPNotSave
    myProfileImg.src = myProf
    myProfile.src = myProf
    if(NameInput.value.length > 35 ) return false
    myName.innerHTML = NameInput.value 
    myProfName.innerHTML = NameInput.value 
}
apply()
applyChangesBtn.onclick = function() {apply()}

function changeProfImg(num) {
    selectProfile.className = "hidden"
    myPNotSave = profileImages[num].src
    myProfileImg.src = myPNotSave
}

searchChat.oninput = function() {
    for(channel of channels) {
        if(channel.children[1].children[0].children[0].innerHTML.toLowerCase().indexOf(searchChat.value.toLowerCase()) !== -1) channel.style.display = "flex"
        else channel.style.display = "none"
    }
}

searchMessage.oninput = function() {
    for(chat of chatCenter.children) {
        if(chat.children[0].childNodes[0].data.toLowerCase().indexOf(searchMessage.value.toLowerCase()) !== -1) chat.style.display = "flex"
        else chat.style.display = "none"
    }
}

function closeSBox() {
    if(checkSBox == 0) {
        stickerBox.style.visibility = "inherit"
        checkSBox = 1
    }
    else if(checkSBox == 1) {
        stickerBox.style.visibility = "hidden"
        checkSBox = 0
    }
}

function closeIBox() {
    if(checkImgBox == 0) {
        imgBox.style.visibility = "inherit"
        checkImgBox = 1
    }
    else if(checkImgBox == 1) {
        imgBox.style.visibility = "hidden"
        checkImgBox = 0
    }
}


function sendImgFromGallery(num,numchannel) {
    let sendingImg = sendImages[num].src
    closeIBox()
    let time = new Date()
    createMsg("messageParentM",sendingImg,time.getHours(),time.getMinutes(),0,"")
    channelsData[numchannel].myPm.push({msg:sendingImg,hour:time.getHours(),minute:time.getMinutes(),seen:0})
    channelsData[numchannel].lastMessage = "عکس"
    channelsData[numchannel].lastMessageTime = chatCenter.lastChild.children[0].children[2].innerHTML + " PM"
    chatCenter.scrollTop = chatCenter.scrollTop + 200
}