function ajax_gsheet() {
    $.ajax({
        url: 'https://spreadsheets.google.com/feeds/cells/1UVnq9a1zVIfygplsbOjOtMX2Bu6aUfet1PwN3MOM7bk/2/public/full?alt=json',

        type: 'GET',
        dataType: 'json',
        success: function data_sheet(data) {
            // 計算 progress width 用的變數
            let playerVote1 = data.feed.entry[4].content.$t
            let playerVote2 = data.feed.entry[5].content.$t
            let playerVote3 = data.feed.entry[6].content.$t
            let progressTotal = data.feed.entry[7].content.$t
            // toString().replace(/\B(?=(\d{4})+(?!\d))/g, "萬")+" 票"

            let plProBar1 = playerVote1 / progressTotal * 100
            let plProBar2 = playerVote2 / progressTotal * 100
            let plProBar3 = playerVote3 / progressTotal * 100

            $(".num1_bar").css("width", plProBar1.toFixed(2) + "%")
            $(".num2_bar").css("width", plProBar2.toFixed(2) + "%")
            $(".num3_bar").css("width", plProBar3.toFixed(2) + "%")


            $(".num1_vote span").html(playerVote1.toString().replace(/\B(?=(\d{4})+(?!\d))/g, "萬")+" 票")
            $(".num1_mb_vote span").html(playerVote1.toString().replace(/\B(?=(\d{4})+(?!\d))/g, "萬")+" 票")

            $(".num2_vote span").html(playerVote2.toString().replace(/\B(?=(\d{4})+(?!\d))/g, "萬")+" 票")
            $(".num2_mb_vote span").html(playerVote2.toString().replace(/\B(?=(\d{4})+(?!\d))/g, "萬")+" 票")

            $(".num3_vote span").html(playerVote3.toString().replace(/\B(?=(\d{4})+(?!\d))/g, "萬")+" 票")
            $(".num3_mb_vote span").html(playerVote3.toString().replace(/\B(?=(\d{4})+(?!\d))/g, "萬")+" 票")

        }
    });
} ajax_gsheet();

setInterval(ajax_gsheet, 15000)

// 陳其邁資料
let player1 = {
    // 照片資料
    profile: `
        <h3 class="num1_vote"> 陳其邁 民主進步黨</h3>
        <img class="num_img" src="./assets/img/img_chen.png" alt="陳其邁">
    `,
    // 學經歷
    experience: `
        <h3>學歷</h3>
        <ul>
            <li>高雄市立高雄高級中學</li>
            <li>中山醫學院醫學系畢業</li>
            <li>國立台灣大學公共衛生研究所預防醫學碩士</li>
        </ul>
        <h3>經歷</h3>
        <ul>
            <li>行政院政務委員</li>
            <li>行政院發言人</li>
            <li>總統府副秘書長</li>
            <li>行政院副院長</li>
            <li>第三、四、五、八、九屆立法委員</li>
        </ul>
    `,
    // 政見
    politics: `
        <ul>
            <li class="num_list_style">產業轉型優先：加速設立「橋頭科學園區」，串聯台南、高雄的科技走廊，引進高階製造與先進製程，帶動「產業多元化發展」、「產業升級」以及「產業空間重新佈局」</li>
            <li class="num_list_style">
            就業機會優先：大力發展亞洲新灣區，推動包括會展、郵輪、文創、數位等新興產業蓬勃發展，吸引國際大廠投資，帶來龐大就業機會
            </li>
            <li class="num_list_style">
            交通建設優先：擴大各項鐵道建設，輕軌立即復工，捷運黃線和紅線延伸線加速趕工，建構大高雄的捷運路網
            </li>
            <li class="num_list_style">
            空污防治優先：要求國營企業改善設施與生產製程，訂定降低空污排放量時程表
            </li>
        </ul>
    `,
    // 財產
    property: `
        <ul>
            <li>與妻子吳虹共申報3筆土地、3筆建物、1輛汽車取得價額65萬，夫婦存款約534萬。債物部分有3筆房屋貸款1356萬，信用貸款約284萬。</li>
            <li>
            <a href="resource/陳其邁.pdf" target="_blank"> 陳其邁完整財產申報資料（PDF）<i class="fas fa-lg fa-file-download"></i></a>
            </li>
        </ul>
    `,
    vote: ""
}
// 吳益政資料
let player2 = {
    profile: `
        <h3 class="num2_vote"> 吳益政 台灣民眾黨</h3>
        <img class="num_img" src="./assets/img/img_wu.png" alt="吳益政">
    `,
    experience: `
        <h3>學歷</h3>
        <ul>
            <li>高雄高工建築製圖科</li>
            <li>國立台北商業專科學校財政稅務科副學士</li>
            <li>國立台灣大學政治學系學士</li>
            <li>美國哥倫比亞大學國際政治經濟碩士</li>
        </ul>
        <h3>經歷</h3>
        <ul>
            <li>高雄市議會（縣市合併前）第6－7屆議員</li>
            <li>高雄市議會（縣市合併後）第1－3屆議員</li>
        </ul>
    `,
    politics: `
        <ul>
            <li class="num_list_style">解決財政問題：以市長角色領銜與中央合作、拜會立法院各黨團，與高雄立委攜手推動修改《財政收支劃分法》目前的不公平的公式</li>
            <li class="num_list_style">正視氣候變遷：成立「氣候變遷專責副市長」，負責推動城市產業、乾淨能源、城市設計、綠色交通、永續科技農業五大領域，轉型高雄成為低碳、韌性的國際示範城市。同時推動課徵燃煤稅，專款專用回饋企業作為節能減碳的研發設備經費，將污染問題化為環保商機</li>
            <li class="num_list_style">打造高雄工業設計之都：以左營眷村為基地，招募大量設計師、工業設計、建築設計、網路行銷公司、電影製作，文案專才等，藉由城市轉型的兩年計畫，請設計人才協助高雄傳統產業升級加值，參與城市美學改造</li>
            <li class="num_list_style">成立金融科技園區：招募與區塊鏈、電子支付、AI、資訊安全以及大數據及IT相關運用的新創公司免費進駐，並提供市政府大數據及採購計畫，包含建立高雄幣、智慧城市、碳權交易等商機，且將高雄銀行轉型為新創產業投資銀行，參與投資</li>
        </ul>
    `,
    property: `
        <ul>
            <li>配偶欄空白，名下無房產土地，有2輛汽車，取得價額分別是150萬、60萬，存款約有52萬。另外有抵押借款210萬元。</li>
            <li>
            <a href="resource/吳益政.pdf" target="_blank"> 吳益政完整財產申報資料（PDF）<i class="fas fa-lg fa-file-download"></i></a>
            </li>
        </ul>
    `,
    vote: ""
}
// 李眉蓁資料
let player3 = {
    profile: `
        <h3 class="num3_vote"> 李眉蓁 中國國民黨</h3>
        <img class="num_img" src="./assets/img/img_lee.png" alt="李眉蓁">
    `,
    experience: `
        <h3>學歷</h3>
        <ul>
            <li>正修技術學院附設專科部 五年制化學工程科</li>
            <li>國立中山大學大陸研究所在職進修專班</li>
        </ul>
        <h3>經歷</h3>
        <ul>
            <li>高雄市議會（縣市合併後）第1－3屆議員</li>
        </ul>
    `,
    politics: `
        <ul>
            <li class="num_list_style">做好基本功：做好路平、燈亮、水溝通、托幼、護校、顧老人</li>
            <li class="num_list_style">建設繼續衝：解決企業五缺，確保高雄十大建設如期如質完成，並爭取未來五建設，包括「中油五輕廠轉型為材料創新研發專區」、「捷運林園線」、「捷運旗津線」、「高屏第二條東西快速道路」、「捷運路竹延伸第二階段」</li>
            <li class="num_list_style">減債加薪水：達成「市府減債，人民加薪」的目標，加速調整產業結構，吸引高薪科技業、高薪服務業進駐，並編好編足青年發展基金，協助創業者取得資金</li>
            <li class="num_list_style">生活好輕鬆：建立好的居住環境，護水、護樹、護空氣，生活好規劃</li>
        </ul>
    `,
    property: `
        <ul>
            <li>與丈夫楊紘宇共申報14筆土地，11筆所有權人為楊紘宇，其中8筆來自繼承，另外有7筆建物、2輛汽車，存款約100萬元。債物部分有3筆房屋貸款，共4968萬。</li>
            <li>
            <a href="resource/李眉蓁.pdf" target="_blank"> 李眉蓁完整財產申報資料（PDF）<i class="fas fa-lg fa-file-download"></i></a>
            </li>
        </ul>
    `,
    vote: ""
}

// 候選人顯示物件
let currentPlayer = {
    profile: `
    <h3 class="num1_vote"> 陳其邁 民主進步黨</h3>
    <img src="./assets/img/img_chen.png" alt="陳其邁">
`,
    // 學經歷
    experience: `
    <h3>學歷</h3>
    <ul>
        <li>高雄市立高雄高級中學</li>
        <li>中山醫學院醫學系畢業</li>
        <li>國立台灣大學公共衛生研究所預防醫學碩士</li>
    </ul>
    <h3>經歷</h3>
    <ul>
        <li>行政院政務委員</li>
        <li>行政院發言人</li>
        <li>總統府副秘書長</li>
        <li>行政院副院長</li>
        <li>第三、四、五、八、九屆立法委員</li>
    </ul>
`,
    // 政見
    politics: `
    <ul>
        <li>大經濟轉骨策略：推動高雄成為「亞洲高階製造中心」與 「半導體先進製程中心」</li>
        <li>
        「加速橋頭科學園區 打造台南－高雄科技走廊」：配合經濟部「領航企業深耕計畫」串連台南、高雄半導體大廠，向國際大廠招商，加速成為先進半導體產業聚落。
        </li>
        <li>
        「加速傳統產業升級 打造亞洲高階製造中心」：運用物聯網、AI、5G等應用服務方案，加速傳統產業、中小企業智慧化、數位轉型，導入創新應用。結合AI科技，（升級）整合生醫產業，打造智慧醫材聚落。
        </li>
        <li>
        「發展國防產業  打造綠能科技園區」：國艦國造，創造八千個就業機會、一千億產值。打造航太產業園區、「興達港海洋科技產業園區」三大中心，並以茄萣為中心發展綠能產業。
        </li>
        <li>
        「發展總部經濟 打造左營大車站計畫」：打造立體交通系統、活化中油基地，發展總部經濟，帶動產業轉型升級、交通系統整合、都市縫合。
        </li>
        <li>
        「發展文創產業 打造鳳山中城計畫」：以鳳山衛武營為中心，積極爭取文化建設。中央地方共同開發，帶動高雄文創及數位產業群聚發展。
        </li>
        <li>
        「發展亞洲新灣區 打造AIoT新創園區」：打造台灣新創聚落。國營事業及國際大廠領軍進駐，共同扶植AIOT新創事業。運用高雄雙港，郵輪母港服務中心、流行音樂中心等成為亞洲會展及物流、休憩及國際觀光門戶。
        </li>
    </ul>
`,
    // 財產
    property: `
    <ul>
        <li>與妻子吳虹共申報3筆土地、3筆建物、1輛汽車取得價額65萬，夫婦存款約534萬。債物部分有3筆房屋貸款1356萬，信用貸款約284萬。</li>
        <li>
        <a href="resource/陳其邁.pdf" target="_blank"> 陳其邁完整財產申報資料（PDF）<i class="fas fa-lg fa-file-download"></i></a>
        </li>
    </ul>
`
}

// 歷屆票數
var map1 = {
    vote: `
    <tbody>
        <tr>
            <td>號次</td>
            <td>候選人</td>
            <td>得票數</td>
        </tr>
        <tr>
            <td>1</td>
            <td>周可盛</td>
            <td>14,915 票</td>
        </tr>
        <tr>
            <td class="votesign">2</td>
            <td>陳菊</td>
            <td>993,300票</td>
        </tr>
        <tr>
            <td>3</td>
            <td>楊秋興</td>
            <td>450,644票</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
    `
}

var map2 = {
    vote: `
    <tbody>
        <tr>
            <td>號次</td>
            <td>候選人</td>
            <td>得票數</td>
        </tr>
        <tr>
            <td class="votesign">1</td>
            <td>韓國瑜</td>
            <td>892,545 票</td>
        </tr>
        <tr>
            <td>2</td>
            <td>陳其邁</td>
            <td>742,239 票</td>
        </tr>
        <tr>
            <td>3</td>
            <td>璩美鳳</td>
            <td>7,998 票</td>
        </tr>
        <tr>
            <td>4</td>
            <td>蘇盈貴</td>
            <td>14,125 票</td>
        </tr>
    </tbody>
    `
}

var map3 = {
    vote: `
    <tbody>
        <tr>
            <td>號次</td>
            <td>候選人</td>
            <td>得票數</td>
        </tr>
        <tr>
            <td class="votesign">1</td>
            <td>陳其邁</td>
            <td> 票</td>
        </tr>
        <tr>
            <td>2</td>
            <td>吳益政</td>
            <td> 票</td>
        </tr>
        <tr>
            <td>3</td>
            <td>李眉蓁</td>
            <td> 票</td>
        </tr>
    </tbody>
    `
}

document.addEventListener("DOMContentLoaded", () => {

    let btnPerson = document.querySelectorAll(".btn_style")
    btnPerson.forEach(function (btn) {
        btn.addEventListener("click", () => {
            btnPerson.forEach(b => b.classList.remove("btn_select"))
            btn.classList.add("btn_select")
        })
    })

    let tagPerson = document.querySelectorAll(".tag_style")
    tagPerson.forEach(function (tag) {
        tag.addEventListener("click", () => {
            tagPerson.forEach(t => t.classList.remove("tag_select"))
            tag.classList.add("tag_select")
        })
    })

    let bgPerson = document.querySelectorAll(".btn_pic")
    bgPerson.forEach(function (hash) {
        hash.addEventListener("click", () => {
            bgPerson.forEach(h => h.classList.remove("btn_pic_select"))
            hash.classList.add("btn_pic_select")
        })
    })

    let tagHash = document.querySelectorAll(".hashtag_style")
    tagHash.forEach(function (hash) {
        hash.addEventListener("click", () => {
            tagHash.forEach(h => h.classList.remove("hashtag_select"))
            hash.classList.add("hashtag_select")
        })
    })

})

document.getElementById("resume").innerHTML = currentPlayer.experience
// web control
selectWho()
function selectWho() {
    let flag = document.getElementById("profile").querySelector("h3").getAttribute("class")
    if (flag === "num1_vote") {
        currentPlayer = player1

    } else if (flag === "num2_vote") {
        currentPlayer = player2

    } else {
        currentPlayer = player3
    }
}


document.getElementById("player_expe").addEventListener("click", bindingChen_expe)
document.getElementById("player_poli").addEventListener("click", bindingChen_poli)
document.getElementById("player_prop").addEventListener("click", bindingChen_prop)

document.getElementById("player1").onclick = () => {
    document.getElementById("profile").innerHTML = player1.profile
    document.getElementById("resume").innerHTML = player1.experience

    document.getElementById("player_expe").classList.add("tag_select")
    document.getElementById("player_poli").classList.remove("tag_select")
    document.getElementById("player_prop").classList.remove("tag_select")

    document.getElementById("player_expe").addEventListener("click", bindingChen_expe)
    document.getElementById("player_poli").addEventListener("click", bindingChen_poli)
    document.getElementById("player_prop").addEventListener("click", bindingChen_prop)
}

document.getElementById("player2").onclick = () => {
    document.getElementById("profile").innerHTML = player2.profile
    document.getElementById("resume").innerHTML = player2.experience

    document.getElementById("player_expe").classList.add("tag_select")
    document.getElementById("player_poli").classList.remove("tag_select")
    document.getElementById("player_prop").classList.remove("tag_select")

    document.getElementById("player_expe").addEventListener("click", bindingWu_expe)
    document.getElementById("player_poli").addEventListener("click", bindingWu_poli)
    document.getElementById("player_prop").addEventListener("click", bindingWu_prop)
}

document.getElementById("player3").onclick = () => {
    document.getElementById("profile").innerHTML = player3.profile
    document.getElementById("resume").innerHTML = player3.experience

    document.getElementById("player_expe").classList.add("tag_select")
    document.getElementById("player_poli").classList.remove("tag_select")
    document.getElementById("player_prop").classList.remove("tag_select")

    document.getElementById("player_expe").addEventListener("click", bindingLee_expe)
    document.getElementById("player_poli").addEventListener("click", bindingLee_poli)
    document.getElementById("player_prop").addEventListener("click", bindingLee_prop)
}


document.getElementById("player_expe_mb").addEventListener("click", bindingChen_expe)
document.getElementById("player_poli_mb").addEventListener("click", bindingChen_poli)
document.getElementById("player_prop_mb").addEventListener("click", bindingChen_prop)

document.getElementById("player1_mb").onclick = () => {
    document.getElementById("profile").innerHTML = player1.profile
    document.getElementById("resume").innerHTML = player1.experience

    document.getElementById("player_expe_mb").classList.add("tag_select")
    document.getElementById("player_poli_mb").classList.remove("tag_select")
    document.getElementById("player_prop_mb").classList.remove("tag_select")

    document.getElementById("player_expe_mb").addEventListener("click", bindingChen_expe)
    document.getElementById("player_poli_mb").addEventListener("click", bindingChen_poli)
    document.getElementById("player_prop_mb").addEventListener("click", bindingChen_prop)
}

document.getElementById("player2_mb").onclick = () => {
    document.getElementById("profile").innerHTML = player2.profile
    document.getElementById("resume").innerHTML = player2.experience

    document.getElementById("player_expe_mb").classList.add("tag_select")
    document.getElementById("player_poli_mb").classList.remove("tag_select")
    document.getElementById("player_prop_mb").classList.remove("tag_select")

    document.getElementById("player_expe_mb").addEventListener("click", bindingWu_expe)
    document.getElementById("player_poli_mb").addEventListener("click", bindingWu_poli)
    document.getElementById("player_prop_mb").addEventListener("click", bindingWu_prop)
}

document.getElementById("player3_mb").onclick = () => {
    document.getElementById("profile").innerHTML = player3.profile
    document.getElementById("resume").innerHTML = player3.experience

    document.getElementById("player_expe_mb").classList.add("tag_select")
    document.getElementById("player_poli_mb").classList.remove("tag_select")
    document.getElementById("player_prop_mb").classList.remove("tag_select")

    document.getElementById("player_expe_mb").addEventListener("click", bindingLee_expe)
    document.getElementById("player_poli_mb").addEventListener("click", bindingLee_poli)
    document.getElementById("player_prop_mb").addEventListener("click", bindingLee_prop)
}
function bindingChen_expe() {
    return (document.getElementById("resume").innerHTML = currentPlayer.experience)
}
function bindingChen_poli() {
    return (document.getElementById("resume").innerHTML = currentPlayer.politics)
}
function bindingChen_prop() {
    return (document.getElementById("resume").innerHTML = currentPlayer.property)
}


function bindingWu_expe() {
    return (document.getElementById("resume").innerHTML = currentPlayer.experience)
}
function bindingWu_poli() {
    return (document.getElementById("resume").innerHTML = currentPlayer.politics)
}
function bindingWu_prop() {
    return (document.getElementById("resume").innerHTML = currentPlayer.property)
}

function bindingLee_expe() {
    return (document.getElementById("resume").innerHTML = currentPlayer.experience)
}
function bindingLee_poli() {
    return (document.getElementById("resume").innerHTML = currentPlayer.politics)
}
function bindingLee_prop() {
    return (document.getElementById("resume").innerHTML = currentPlayer.property)
}


document.getElementById("player1").addEventListener("click", selectWho)
document.getElementById("player2").addEventListener("click", selectWho)
document.getElementById("player3").addEventListener("click", selectWho)

document.getElementById("player1_mb").addEventListener("click", selectWho)
document.getElementById("player2_mb").addEventListener("click", selectWho)
document.getElementById("player3_mb").addEventListener("click", selectWho)

// kaohsiung
$("path").mousemove(function (e) {
    $(".hovertext").text($(this).attr("title"))
    $(".hovertext").css({
        "top": e.pageY + 20,
        "left": e.pageX
    }).fadeIn()
})

$("path").mouseleave(function () {
    $(".hovertext").css("display", "none")
})


document.getElementById("map1").onclick = () => {
    document.getElementById("areaInfo").innerHTML = ""
    document.getElementById("areaInfo").style.display = "none"
    document.getElementById("bg-cover").style.display = "none"
    document.getElementById("mapData").innerHTML = map1.vote
    document.getElementById("khs2014").style.display = "block"
    document.getElementById("khs2018").style.display = "none"
    // document.getElementById("khs2020").style.display = "none"

}
document.getElementById("map2").onclick = () => {
    document.getElementById("areaInfo").innerHTML = ""
    document.getElementById("areaInfo").style.display = "none"
    document.getElementById("bg-cover").style.display = "none"
    document.getElementById("mapData").innerHTML = map2.vote
    document.getElementById("khs2014").style.display = "none"
    document.getElementById("khs2018").style.display = "block"
    // document.getElementById("khs2020").style.display = "none"

}

// document.getElementById("map3").onclick = () => {
//     document.getElementById("areaInfo").innerHTML = ""
//     document.getElementById("areaInfo").style.display = "none"
//     document.getElementById("bg-cover").style.display = "none"
//     document.getElementById("mapData").innerHTML = map3.vote
//     document.getElementById("khs2014").style.display = "none"
//     document.getElementById("khs2018").style.display = "none"
//     document.getElementById("khs2020").style.display = "block"

// }

var urlsrc = "https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsApp.aspx?Cate=%E9%AB%98%E9%9B%84%E8%A3%9C%E9%81%B8&Page=1&sp=6"

function changeApi() {
    // 高雄補選
    let urlsrc0 = "https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsApp.aspx?Cate=%E9%AB%98%E9%9B%84%E8%A3%9C%E9%81%B8&Page=1&sp=6"
    // 陳其邁
    let urlsrc1 = "https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsApp.aspx?Cate=%E9%99%B3%E5%85%B6%E9%82%81&Page=1&sp=6"
    // 吳益政
    let urlsrc2 = "https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsApp.aspx?Cate=%E5%90%B3%E7%9B%8A%E6%94%BF&Page=1&sp=6"
    // 李眉蓁
    let urlsrc3 = "https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsApp.aspx?Cate=%E6%9D%8E%E7%9C%89%E8%93%81&Page=1&sp=6"

    document.body.onclick = function (event) {
        let id = event.target.id
        if (id === "hashtag1") {
            urlsrc = urlsrc0
            return ajax_news(urlsrc)

        } else if (id === "hashtag2") {
            urlsrc = urlsrc1
            return ajax_news(urlsrc)

        } else if (id === "hashtag3") {
            urlsrc = urlsrc2
            return ajax_news(urlsrc)

        } else {
            urlsrc = urlsrc3
            return ajax_news(urlsrc)
        }
        return urlsrc
    }
}

// getAPI
function ajax_news(urlsrc) {
    $.ajax({
        url: urlsrc,
        type: "GET",
        dataType: "json",
        success: function (data) {
            let html_read = `
            <a href="https://www.ftvnews.com.tw/news/detail/{{link}}" class="layout_block" target="_blank">    
                <div class="layout_news_block">
                    <div class="cover_img">
                        <img src="{{url}}">
                    </div>
                    <h2>{{title}}</h2>
                    <p>{{preface}}</p>
                    <p class="tag_more">更多</p>
                </div>
            </a>
            `
            document.getElementById("relatedNews").innerHTML = ""
            for (let i = 0; i < 6; i++) {
                let html_reading = html_read.replace("{{title}}", limitTitle())
                    .replace("{{url}}", data.ITEM[i].Image)
                    .replace("{{preface}}", limitPreface())
                    .replace("{{link}}", data.ITEM[i].ID)

                function limitTitle() {
                    let newsTitle = data.ITEM[i].Title
                    let lenTitle = newsTitle.length
                    let strTitle = ""

                    if (lenTitle > 17) {
                        strTitle = newsTitle.substring(0, 17) + "..."
                    }
                    else {
                        return newsTitle
                    }
                    return strTitle
                }

                function limitPreface() {
                    let newsPreface = data.ITEM[i].Preface
                    let lenPreface = newsPreface.length
                    let strPreface = ""

                    if (lenPreface > 50) {
                        strPreface = newsPreface.substring(0, 50) + "......"
                    }
                    else {
                        return newsPreface
                    }
                    return strPreface
                }

                document.getElementById("relatedNews").innerHTML += html_reading
            }
        }
    })
} ajax_news(urlsrc)



// 2014各區候選人得票數
let allArea_1 = {
    area01: ["前金區", "周可盛：172", "陳菊：9,626", "楊秋興：4,952"],
    area02: ["新興區", "周可盛：172", "陳菊：9,626", "楊秋興：4,952"],
    area03: ["鹽埕區", "周可盛：169", "陳菊：9,961", "楊秋興：4,093"],
    area04: ["左營區", "周可盛：813", "陳菊：53,516", "楊秋興：34,546"],
    area05: ["楠梓區", "周可盛：875", "陳菊：59,988", "楊秋興：28,397"],
    area06: ["鼓山區", "周可盛：640", "陳菊：42,706", "楊秋興：22,508"],
    area07: ["旗津區", "周可盛：211", "陳菊：12,775", "楊秋興：3,249"],
    area08: ["苓雅區", "周可盛：1,052", "陳菊：60,929", "楊秋興：31,184"],
    area09: ["三民區", "周可盛：1,850", "陳菊：122,725", "楊秋興：53,481"],
    area10: ["前鎮區", "周可盛：997", "陳菊：72,137", "楊秋興：28,755"],
    area11: ["小港區", "周可盛：820", "陳菊：60,631", "楊秋興：22,216"],
    area12: ["鳳山區", "周可盛：1,677", "陳菊：115,300", "楊秋興：62,033"],
    area13: ["鳥松區", "周可盛：235", "陳菊：15,872", "楊秋興：7,427"],
    area14: ["大社區", "周可盛：211", "陳菊：14,337", "楊秋興：5,217"],
    area15: ["仁武區", "周可盛：392", "陳菊：31,260", "楊秋興：10,908"],
    area16: ["大樹區", "周可盛：200", "陳菊：18,231", "楊秋興：6,668"],
    area17: ["岡山區", "周可盛：496", "陳菊：34,446", "楊秋興：17,938"],
    area18: ["燕巢區", "周可盛：186", "陳菊：12,161", "楊秋興：5,443"],
    area19: ["梓官區", "周可盛：205", "陳菊：16,078", "楊秋興：4,998"],
    area20: ["永安區", "周可盛：95", "陳菊：5,687", "楊秋興：2,594"],
    area21: ["彌陀區", "周可盛：161", "陳菊：8,151", "楊秋興：4,131"],
    area22: ["橋頭區", "周可盛：193", "陳菊：16,432", "楊秋興：5,668"],
    area23: ["田寮區", "周可盛：39", "陳菊：3,522", "楊秋興：1,432"],
    area24: ["茄萣區", "周可盛：195", "陳菊：11,824", "楊秋興：4,514"],
    area25: ["阿蓮區", "周可盛：171", "陳菊：11,549", "楊秋興：4,200"],
    area26: ["路竹區", "周可盛：326", "陳菊：18,994", "楊秋興：9,011"],
    area27: ["湖內區", "周可盛：196", "陳菊：11,342", "楊秋興：4,508"],
    area28: ["那瑪夏區", "周可盛：19", "陳菊：837", "楊秋興：1,120"],
    area29: ["桃源區", "周可盛：41", "陳菊：1,024", "楊秋興：1,540"],
    area30: ["茂林區", "周可盛：9", "陳菊：546", "楊秋興：740"],
    area31: ["六龜區", "周可盛：89", "陳菊：5,002", "楊秋興：2,100"],
    area32: ["美濃區", "周可盛：265", "陳菊：15,129", "楊秋興：8,032"],
    area33: ["旗山區", "周可盛：237", "陳菊：15,718", "楊秋興：5,702"],
    area34: ["甲仙區", "周可盛：51", "陳菊：2,493", "楊秋興：1,310"],
    area35: ["內門區", "周可盛：135", "陳菊：7,327", "楊秋興：2,580"],
    area36: ["杉林區", "周可盛：73", "陳菊：4,361", "楊秋興：2,145"],
    area37: ["林園區", "周可盛：559", "陳菊：42,328", "楊秋興：17,270"],
    area38: ["大寮區", "周可盛：561", "陳菊：30,470", "楊秋興：8,810"]

}
// 2018各區候選人得票數
let allArea_2 = {
    area01: ["前金區", "韓國瑜：9,120", "陳其邁：7,608", "璩美鳳：53", "蘇盈貴：161"],
    area02: ["新興區", "韓國瑜：16,776", "陳其邁：14,237", "璩美鳳：107", "蘇盈貴：334"],
    area03: ["鹽埕區", "韓國瑜：7,633", "陳其邁：7,992", "璩美鳳：71", "蘇盈貴：113"],
    area04: ["左營區", "韓國瑜：68,255", "陳其邁：40,526", "璩美鳳：346", "蘇盈貴：978"],
    area05: ["楠梓區", "韓國瑜：59,478", "陳其邁：44,288", "璩美鳳：379", "蘇盈貴：973"],
    area06: ["鼓山區", "韓國瑜：45,816", "陳其邁：33,547", "璩美鳳：267", "蘇盈貴：691"],
    area07: ["旗津區", "韓國瑜：7,993", "陳其邁：9,360", "璩美鳳：95", "蘇盈貴：124"],
    area08: ["苓雅區", "韓國瑜：57,171", "陳其邁：46,041", "璩美鳳：401", "蘇盈貴：1,098"],
    area09: ["三民區", "韓國瑜：105,406", "陳其邁：9,1617", "璩美鳳：772", "蘇盈貴：1,872"],
    area10: ["前鎮區", "韓國瑜：59,572", "陳其邁：52,376", "璩美鳳：472", "蘇盈貴：982"],
    area11: ["小港區", "韓國瑜：47,806", "陳其邁：43,464", "璩美鳳：433", "蘇盈貴：764"],
    area12: ["鳳山區", "韓國瑜：118,466", "陳其邁：88,437", "璩美鳳：881", "蘇盈貴：1,739"],
    area13: ["鳥松區", "韓國瑜：14,410", "陳其邁：12,806", "璩美鳳：115", "蘇盈貴：258"],
    area14: ["大社區", "韓國瑜：10,378", "陳其邁：10,512", "璩美鳳：142", "蘇盈貴：197"],
    area15: ["仁武區", "韓國瑜：26,659", "陳其邁：24,543", "璩美鳳：250", "蘇盈貴：412"],
    area16: ["大樹區", "韓國瑜：12,945", "陳其邁：13,493", "璩美鳳：174", "蘇盈貴：173"],
    area17: ["岡山區", "韓國瑜：32,410", "陳其邁：25,829", "璩美鳳：313", "蘇盈貴：446"],
    area18: ["燕巢區", "韓國瑜：9,448", "陳其邁：8,871", "璩美鳳：120", "蘇盈貴：130"],
    area19: ["梓官區", "韓國瑜：10,509", "陳其邁：11,646", "璩美鳳：129", "蘇盈貴：168"],
    area20: ["永安區", "韓國瑜：4,545", "陳其邁：4,478", "璩美鳳：61", "蘇盈貴：78"],
    area21: ["彌陀區", "韓國瑜：6,756", "陳其邁：5,871", "璩美鳳：86", "蘇盈貴：89"],
    area22: ["橋頭區", "韓國瑜：10,888", "陳其邁：13,256", "璩美鳳：146", "蘇盈貴：207"],
    area23: ["田寮區", "韓國瑜：2,252", "陳其邁：2,768", "璩美鳳：135", "蘇盈貴：13"],
    area24: ["茄萣區", "韓國瑜：8,662", "陳其邁：9,209", "璩美鳳：152", "蘇盈貴：127"],
    area25: ["阿蓮區", "韓國瑜：8,322", "陳其邁：8,958", "璩美鳳：254", "蘇盈貴：126"],
    area26: ["路竹區", "韓國瑜：16,545", "陳其邁：14,407", "璩美鳳：319", "蘇盈貴：284"],
    area27: ["湖內區", "韓國瑜：9,133", "陳其邁：8,903", "璩美鳳：187", "蘇盈貴：164"],
    area28: ["那瑪夏區", "韓國瑜：1,751", "陳其邁：295", "璩美鳳：10", "蘇盈貴：2"],
    area29: ["桃源區", "韓國瑜：2,519", "陳其邁：304", "璩美鳳：14", "蘇盈貴：9"],
    area30: ["茂林區", "韓國瑜：1,281", "陳其邁：107", "璩美鳳：6", "蘇盈貴：1"],
    area31: ["六龜區", "韓國瑜：4,084", "陳其邁：3,315", "璩美鳳：64", "蘇盈貴：59"],
    area32: ["美濃區", "韓國瑜：15,478", "陳其邁：9,546", "璩美鳳：125", "蘇盈貴：186"],
    area33: ["旗山區", "韓國瑜：12,379", "陳其邁：10,940", "璩美鳳：155", "蘇盈貴：177"],
    area34: ["甲仙區", "韓國瑜：2,339", "陳其邁：1,483", "璩美鳳：35", "蘇盈貴：30"],
    area35: ["內門區", "韓國瑜：5,446", "陳其邁：4,510", "璩美鳳：85", "蘇盈貴：79"],
    area36: ["杉林區", "韓國瑜：4,129", "陳其邁：3,076", "璩美鳳：53", "蘇盈貴：57"],
    area37: ["林園區", "韓國瑜：20,419", "陳其邁：21,847", "璩美鳳：219", "蘇盈貴：293"],
    area38: ["大寮區", "韓國瑜：35,636", "陳其邁：31,773", "璩美鳳：372", "蘇盈貴：533"]

}
// 2020各區候選人得票數
let allArea_3 = {
    area01: ["前金區", "陳其邁：", "吳益盛：", "李眉蓁："],
    area02: ["新興區", "陳其邁：", "吳益盛：", "李眉蓁："],
    area03: ["鹽埕區", "陳其邁：", "吳益盛：", "李眉蓁："],
    area04: ["左營區", "陳其邁：", "吳益盛：", "李眉蓁："],
    area05: ["楠梓區", "陳其邁：", "吳益盛：", "李眉蓁："],
    area06: ["鼓山區", "陳其邁：", "吳益盛：", "李眉蓁："],
    area07: ["旗津區", "陳其邁：", "吳益盛：", "李眉蓁："],
    area08: ["苓雅區", "陳其邁：", "吳益盛：", "李眉蓁："],
    area09: ["三民區", "陳其邁：", "吳益盛：", "李眉蓁："],
    area10: ["前鎮區", "陳其邁：", "吳益盛：", "李眉蓁："],
    area11: ["小港區", "陳其邁：", "吳益盛：", "李眉蓁："],
    area12: ["鳳山區", "陳其邁：", "吳益盛：", "李眉蓁："],
    area13: ["鳥松區", "陳其邁：", "吳益盛：", "李眉蓁："],
    area14: ["大社區", "陳其邁：", "吳益盛：", "李眉蓁："],
    area15: ["仁武區", "陳其邁：", "吳益盛：", "李眉蓁："],
    area16: ["大樹區", "陳其邁：", "吳益盛：", "李眉蓁："],
    area17: ["岡山區", "陳其邁：", "吳益盛：", "李眉蓁："],
    area18: ["燕巢區", "陳其邁：", "吳益盛：", "李眉蓁："],
    area19: ["梓官區", "陳其邁：", "吳益盛：", "李眉蓁："],
    area20: ["永安區", "陳其邁：", "吳益盛：", "李眉蓁："],
    area21: ["彌陀區", "陳其邁：", "吳益盛：", "李眉蓁："],
    area22: ["橋頭區", "陳其邁：", "吳益盛：", "李眉蓁："],
    area23: ["田寮區", "陳其邁：", "吳益盛：", "李眉蓁："],
    area24: ["茄萣區", "陳其邁：", "吳益盛：", "李眉蓁："],
    area25: ["阿蓮區", "陳其邁：", "吳益盛：", "李眉蓁："],
    area26: ["路竹區", "陳其邁：", "吳益盛：", "李眉蓁："],
    area27: ["湖內區", "陳其邁：", "吳益盛：", "李眉蓁："],
    area28: ["那瑪夏區", "陳其邁：", "吳益盛：", "李眉蓁："],
    area29: ["桃源區", "陳其邁：", "吳益盛：", "李眉蓁："],
    area30: ["茂林區", "陳其邁：", "吳益盛：", "李眉蓁："],
    area31: ["六龜區", "陳其邁：", "吳益盛：", "李眉蓁："],
    area32: ["美濃區", "陳其邁：", "吳益盛：", "李眉蓁："],
    area33: ["旗山區", "陳其邁：", "吳益盛：", "李眉蓁："],
    area34: ["甲仙區", "陳其邁：", "吳益盛：", "李眉蓁："],
    area35: ["內門區", "陳其邁：", "吳益盛：", "李眉蓁："],
    area36: ["杉林區", "陳其邁：", "吳益盛：", "李眉蓁："],
    area37: ["林園區", "前金區陳其邁：", "吳益盛：", "李眉蓁："],
    area38: ["大寮區", "陳其邁：", "吳益盛：", "李眉蓁："]

}


// 2014 區塊
$(".path1").click(function (e) {
    let currentArea = this.getAttribute("title")
    $(".layout_area").css("display", "block")
    if (currentArea === "前金區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_1.area01.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "新興區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_1.area02.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "鹽埕區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_1.area03.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "左營區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_1.area04.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "楠梓區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_1.area05.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "鼓山區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_1.area06.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "旗津區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_1.area07.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "苓雅區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_1.area08.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "三民區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_1.area09.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "前鎮區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_1.area10.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "小港區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_1.area11.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "鳳山區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_1.area12.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "鳥松區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_1.area13.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "大社區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_1.area14.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "仁武區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_1.area15.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "大樹區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_1.area16.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "岡山區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_1.area17.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "燕巢區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_1.area18.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "梓官區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_1.area19.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "永安區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_1.area20.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "彌陀區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_1.area21.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "橋頭區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_1.area22.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "田寮區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_1.area23.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "茄萣區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_1.area24.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "阿蓮區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_1.area25.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "路竹區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_1.area26.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "湖內區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_1.area27.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "那瑪夏區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_1.area28.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "桃源區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_1.area29.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "茂林區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_1.area30.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "六龜區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_1.area31.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "美濃區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_1.area32.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "旗山區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_1.area33.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "甲仙區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_1.area34.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "內門區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_1.area35.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "杉林區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_1.area36.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "林園區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_1.area37.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else {//大寮區
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_1.area38.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))
    }
})


// 2018 區塊
$(".path2").click(function (e) {
    let currentArea = this.getAttribute("title")
    $(".layout_area").css("display", "block")
    if (currentArea === "前金區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_2.area01.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "新興區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_2.area02.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "鹽埕區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_2.area03.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "左營區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_2.area04.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "楠梓區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_2.area05.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "鼓山區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_2.area06.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "旗津區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_2.area07.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "苓雅區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_2.area08.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "三民區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_2.area09.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "前鎮區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_2.area10.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "小港區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_2.area11.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "鳳山區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_2.area12.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "鳥松區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_2.area13.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "大社區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_2.area14.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "仁武區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_2.area15.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "大樹區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_2.area16.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "岡山區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_2.area17.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "燕巢區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_2.area18.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "梓官區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_2.area19.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "永安區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_2.area20.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "彌陀區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_2.area21.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "橋頭區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_2.area22.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "田寮區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_2.area23.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "茄萣區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_2.area24.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "阿蓮區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_2.area25.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "路竹區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_2.area26.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "湖內區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_2.area27.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "那瑪夏區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_2.area28.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "桃源區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_2.area29.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "茂林區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_2.area30.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "六龜區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_2.area31.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "美濃區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_2.area32.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "旗山區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_2.area33.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "甲仙區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_2.area34.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "內門區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_2.area35.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "杉林區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_2.area36.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else if (currentArea === "林園區") {
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_2.area37.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))

    } else {//大寮區
        $("#bg-cover").css("display", "block")
        $("#bg-cover").click(function () {
            $(".layout_area").css("display", "none")
            $("#bg-cover").css("display", "none")
        })
        $(".layout_area").empty()
        $(allArea_2.area38.forEach(element => $(".layout_area").append("<p>" + element + "</p>")))
    }

})


$(".goToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});
