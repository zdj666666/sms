/**
 * Created by MI on 2018/10/28.
 */
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

function deleRow(obj) {
    var i = obj.parentNode.parentNode.rowIndex;
    document.getElementsByClassName('info_table')[0].deleteRow(i);
}

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
