/**
 * Created by MI on 2018/10/28.
 */
<<<<<<< HEAD
//ȫѡ
=======
//全选
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
//ɾ������
=======
//删除单项
>>>>>>> origin/hx
function deleRow(obj) {
    var i = obj.parentNode.parentNode.rowIndex;
    document.getElementsByClassName('info_table')[0].deleteRow(i);
}
<<<<<<< HEAD
//����ɾ��
=======
//批量删除
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
//��ҳЧ��
//            * ��ҳ����
//             * pno--ҳ��
//             * psize--ÿҳ��ʾ��¼��
//             * ��ҳ�����Ǵ���ʵ�����п�ʼ��������ڼӼ�ĳ����������ȷ�������ļ�¼��
//             * ��js��ҳʵ����������ȫ�����أ�ͨ���Ƿ���ʾ������ɷ�ҳ����
//             **/
function goPage(pno,psize){
    var itable = document.getElementById("idData");
    var num = itable.rows.length;//�����������(���м�¼��)
    console.log(num);
    var totalPage = 0;//��ҳ��
    var pageSize = psize;//ÿҳ��ʾ����
    //�ܹ��ּ�ҳ
=======
//分页效果
//            * 分页函数
//             * pno--页数
//             * psize--每页显示记录数
//             * 分页部分是从真实数据行开始，因而存在加减某个常数，以确定真正的记录数
//             * 纯js分页实质是数据行全部加载，通过是否显示属性完成分页功能
//             **/
function goPage(pno,psize){
    var itable = document.getElementById("idData");
    var num = itable.rows.length;//表格所有行数(所有记录数)
    console.log(num);
    var totalPage = 0;//总页数
    var pageSize = psize;//每页显示行数
    //总共分几页
>>>>>>> origin/hx
    if(num/pageSize > parseInt(num/pageSize)){
        totalPage=parseInt(num/pageSize)+1;
    }else{
        totalPage=parseInt(num/pageSize);
    }
<<<<<<< HEAD
    var currentPage = pno;//��ǰҳ��
    var startRow = (currentPage - 1) * pageSize+1;//��ʼ��ʾ����  31
    var endRow = currentPage * pageSize;//������ʾ����   40
    endRow = (endRow > num)? num : endRow;    40
    console.log(endRow);
    //������ʾ����ʵ�ַ�ҳ
=======
    var currentPage = pno;//当前页数
    var startRow = (currentPage - 1) * pageSize+1;//开始显示的行  31
    var endRow = currentPage * pageSize;//结束显示的行   40
    endRow = (endRow > num)? num : endRow;    40
    console.log(endRow);
    //遍历显示数据实现分页
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
    var tempStr = "��"+num+"����¼ ��"+totalPage+"ҳ ��ǰ��"+currentPage+"ҳ";
    if(currentPage>1){
        tempStr += "<a href=\"#\" onClick=\"goPage("+(1)+","+psize+")\">��ҳ</a>";
        tempStr += "<a href=\"#\" onClick=\"goPage("+(currentPage-1)+","+psize+")\"><��һҳ</a>"
    }else{
        tempStr += "��ҳ";
        tempStr += "<��һҳ";
    }

    if(currentPage<totalPage){
        tempStr += "<a href=\"#\" onClick=\"goPage("+(currentPage+1)+","+psize+")\">��һҳ></a>";
        tempStr += "<a href=\"#\" onClick=\"goPage("+(totalPage)+","+psize+")\">βҳ</a>";
    }else{
        tempStr += "��һҳ>";
        tempStr += "βҳ";
=======
    var tempStr = "共"+num+"条记录 分"+totalPage+"页 当前第"+currentPage+"页";
    if(currentPage>1){
        tempStr += "<a href=\"#\" onClick=\"goPage("+(1)+","+psize+")\">首页</a>";
        tempStr += "<a href=\"#\" onClick=\"goPage("+(currentPage-1)+","+psize+")\"><上一页</a>"
    }else{
        tempStr += "首页";
        tempStr += "<上一页";
    }

    if(currentPage<totalPage){
        tempStr += "<a href=\"#\" onClick=\"goPage("+(currentPage+1)+","+psize+")\">下一页></a>";
        tempStr += "<a href=\"#\" onClick=\"goPage("+(totalPage)+","+psize+")\">尾页</a>";
    }else{
        tempStr += "下一页>";
        tempStr += "尾页";
>>>>>>> origin/hx
    }

    document.getElementById("barcon").innerHTML = tempStr;
}