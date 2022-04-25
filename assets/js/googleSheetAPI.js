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


            $(".num1_vote span").html(playerVote1.toString().replace(/\B(?=(\d{4})+(?!\d))/g, "萬") + " 票")
            $(".num1_mb_vote span").html(playerVote1.toString().replace(/\B(?=(\d{4})+(?!\d))/g, "萬") + " 票")

            $(".num2_vote span").html(playerVote2.toString().replace(/\B(?=(\d{4})+(?!\d))/g, "萬") + " 票")
            $(".num2_mb_vote span").html(playerVote2.toString().replace(/\B(?=(\d{4})+(?!\d))/g, "萬") + " 票")

            $(".num3_vote span").html(playerVote3.toString().replace(/\B(?=(\d{4})+(?!\d))/g, "萬") + " 票")
            $(".num3_mb_vote span").html(playerVote3.toString().replace(/\B(?=(\d{4})+(?!\d))/g, "萬") + " 票")

        }
    });
} ajax_gsheet();

setInterval(ajax_gsheet, 15000)
