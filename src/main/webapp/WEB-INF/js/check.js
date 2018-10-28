/**
 * Created by MI on 2018/10/28.
 */
<<<<<<< HEAD
//È«Ñ¡
=======
//å…¨é€‰
>>>>>>> origin/hx
function checkAll(){
    var checkall = document.getElementsByClassName("checkall")[0];
    var checkone = document.getElementsByClassName("checkone");
    if(checkall.checked==true){
        for(var i=0;i<checkone.length;i++){
            checkone[i].checked = true;
        }
    }else{
        for(var i=0;i<checkone.length;i++){
            checkone[i].checked = false;
        }
    }
}
<<<<<<< HEAD
//É¾³ýµ¥Ïî
=======
//åˆ é™¤å•é¡¹
>>>>>>> origin/hx
function deleRow(obj) {
    var i = obj.parentNode.parentNode.rowIndex;
    document.getElementsByClassName('info_table')[0].deleteRow(i);
}
<<<<<<< HEAD
//ÅúÁ¿É¾³ý
=======
//æ‰¹é‡åˆ é™¤
>>>>>>> origin/hx
function deleSome(){
    var checkone = document.getElementsByClassName("checkone");
    for( var i=checkone.length-1;i>=0;i--){
        if(checkone[i].checked==true){
            trs = checkone[i].parentNode.parentNode;
            pnode = trs.parentNode;
            pnode.removeChild(trs);
        }
    }
}
<<<<<<< HEAD
//·ÖÒ³Ð§¹û
//            * ·ÖÒ³º¯Êý
//             * pno--Ò³Êý
//             * psize--Ã¿Ò³ÏÔÊ¾¼ÇÂ¼Êý
//             * ·ÖÒ³²¿·ÖÊÇ´ÓÕæÊµÊý¾ÝÐÐ¿ªÊ¼£¬Òò¶ø´æÔÚ¼Ó¼õÄ³¸ö³£Êý£¬ÒÔÈ·¶¨ÕæÕýµÄ¼ÇÂ¼Êý
//             * ´¿js·ÖÒ³ÊµÖÊÊÇÊý¾ÝÐÐÈ«²¿¼ÓÔØ£¬Í¨¹ýÊÇ·ñÏÔÊ¾ÊôÐÔÍê³É·ÖÒ³¹¦ÄÜ
//             **/
function goPage(pno,psize){
    var itable = document.getElementById("idData");
    var num = itable.rows.length;//±í¸ñËùÓÐÐÐÊý(ËùÓÐ¼ÇÂ¼Êý)
    console.log(num);
    var totalPage = 0;//×ÜÒ³Êý
    var pageSize = psize;//Ã¿Ò³ÏÔÊ¾ÐÐÊý
    //×Ü¹²·Ö¼¸Ò³
=======
//åˆ†é¡µæ•ˆæžœ
//            * åˆ†é¡µå‡½æ•°
//             * pno--é¡µæ•°
//             * psize--æ¯é¡µæ˜¾ç¤ºè®°å½•æ•°
//             * åˆ†é¡µéƒ¨åˆ†æ˜¯ä»ŽçœŸå®žæ•°æ®è¡Œå¼€å§‹ï¼Œå› è€Œå­˜åœ¨åŠ å‡æŸä¸ªå¸¸æ•°ï¼Œä»¥ç¡®å®šçœŸæ­£çš„è®°å½•æ•°
//             * çº¯jsåˆ†é¡µå®žè´¨æ˜¯æ•°æ®è¡Œå…¨éƒ¨åŠ è½½ï¼Œé€šè¿‡æ˜¯å¦æ˜¾ç¤ºå±žæ€§å®Œæˆåˆ†é¡µåŠŸèƒ½
//             **/
function goPage(pno,psize){
    var itable = document.getElementById("idData");
    var num = itable.rows.length;//è¡¨æ ¼æ‰€æœ‰è¡Œæ•°(æ‰€æœ‰è®°å½•æ•°)
    console.log(num);
    var totalPage = 0;//æ€»é¡µæ•°
    var pageSize = psize;//æ¯é¡µæ˜¾ç¤ºè¡Œæ•°
    //æ€»å…±åˆ†å‡ é¡µ
>>>>>>> origin/hx
    if(num/pageSize > parseInt(num/pageSize)){
        totalPage=parseInt(num/pageSize)+1;
    }else{
        totalPage=parseInt(num/pageSize);
    }
<<<<<<< HEAD
    var currentPage = pno;//µ±Ç°Ò³Êý
    var startRow = (currentPage - 1) * pageSize+1;//¿ªÊ¼ÏÔÊ¾µÄÐÐ  31
    var endRow = currentPage * pageSize;//½áÊøÏÔÊ¾µÄÐÐ   40
    endRow = (endRow > num)? num : endRow;    40
    console.log(endRow);
    //±éÀúÏÔÊ¾Êý¾ÝÊµÏÖ·ÖÒ³
=======
    var currentPage = pno;//å½“å‰é¡µæ•°
    var startRow = (currentPage - 1) * pageSize+1;//å¼€å§‹æ˜¾ç¤ºçš„è¡Œ  31
    var endRow = currentPage * pageSize;//ç»“æŸæ˜¾ç¤ºçš„è¡Œ   40
    endRow = (endRow > num)? num : endRow;    40
    console.log(endRow);
    //éåŽ†æ˜¾ç¤ºæ•°æ®å®žçŽ°åˆ†é¡µ
>>>>>>> origin/hx
    for(var i=1;i<(num+1);i++){
        var irow = itable.rows[i-1];
        if(i>=startRow && i<=endRow){
            irow.style.display = "block";
        }else{
            irow.style.display = "none";
        }
    }
    var pageEnd = document.getElementById("pageEnd");
<<<<<<< HEAD
    var tempStr = "¹²"+num+"Ìõ¼ÇÂ¼ ·Ö"+totalPage+"Ò³ µ±Ç°µÚ"+currentPage+"Ò³";
    if(currentPage>1){
        tempStr += "<a href=\"#\" onClick=\"goPage("+(1)+","+psize+")\">Ê×Ò³</a>";
        tempStr += "<a href=\"#\" onClick=\"goPage("+(currentPage-1)+","+psize+")\"><ÉÏÒ»Ò³</a>"
    }else{
        tempStr += "Ê×Ò³";
        tempStr += "<ÉÏÒ»Ò³";
    }

    if(currentPage<totalPage){
        tempStr += "<a href=\"#\" onClick=\"goPage("+(currentPage+1)+","+psize+")\">ÏÂÒ»Ò³></a>";
        tempStr += "<a href=\"#\" onClick=\"goPage("+(totalPage)+","+psize+")\">Î²Ò³</a>";
    }else{
        tempStr += "ÏÂÒ»Ò³>";
        tempStr += "Î²Ò³";
=======
    var tempStr = "å…±"+num+"æ¡è®°å½• åˆ†"+totalPage+"é¡µ å½“å‰ç¬¬"+currentPage+"é¡µ";
    if(currentPage>1){
        tempStr += "<a href=\"#\" onClick=\"goPage("+(1)+","+psize+")\">é¦–é¡µ</a>";
        tempStr += "<a href=\"#\" onClick=\"goPage("+(currentPage-1)+","+psize+")\"><ä¸Šä¸€é¡µ</a>"
    }else{
        tempStr += "é¦–é¡µ";
        tempStr += "<ä¸Šä¸€é¡µ";
    }

    if(currentPage<totalPage){
        tempStr += "<a href=\"#\" onClick=\"goPage("+(currentPage+1)+","+psize+")\">ä¸‹ä¸€é¡µ></a>";
        tempStr += "<a href=\"#\" onClick=\"goPage("+(totalPage)+","+psize+")\">å°¾é¡µ</a>";
    }else{
        tempStr += "ä¸‹ä¸€é¡µ>";
        tempStr += "å°¾é¡µ";
>>>>>>> origin/hx
    }

    document.getElementById("barcon").innerHTML = tempStr;
}