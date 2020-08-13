/**
 * 引数の説明:
 * タグのid指定方法「<div Id="id1"> の場合。Id1を""の中に入れてください。」
 * タグのclass指定方法「<div Class="class1">の場合。Class1を""の中に入れてください。」
 * タグの指定方法「<div Id="id1"> の場合。divを""の中に入れてください。」
 *@typedef {array} Id
 *@typedef {array} Class
 *@typedef {array} Elem
 *@param Id Id=["",""] ""の中に改行したいタグのidを指定してください。
 *@param Class Class=["",""] ""の中に改行したいタグのclassを指定してください。
 *@param Elem Elem=["",""] ""の中に改行したいタグ名を指定してください。
*/
window.onload = function(Id,Elem,Class){
    Id=["id",""];Elem=["span",""];Class=["class",""];
    console.log("入力された文字列と配列",Id,Elem,Class);
    fordata(Id,Elem,Class);
}
function fordata(Id,Elem,Class){
    const idCount = Id.length;
    const elemCount = Elem.length
    const ClassCount = Class.length
    for(i=0;i<idCount;i++){
        var data = document.getElementById(Id[i]);
        if(data!=undefined&&data!=""){
            var text = data.innerHTML;
            text = text.replace(/\n/g,"<br>\n");
            console.log("'改行後のテキスト'\n",text)
            data.innerHTML = text;
        }
        else{console.log("文字列が見つかりませんでした Id["+i+"];")}
    }
    for(i=0;i<elemCount;i++){
        var data = document.getElementsByTagName(Elem[i]);
        if(data[0]!=undefined&&data[0]!=""){
            var tagCount = data.length;
            for(j=0;j<tagCount;j++){
                if(data[j]!=undefined&&data[j]!=""){
                    var text = data[j].innerHTML;
                    text = text.replace(/\n/g,"<br>\n");
                    console.log("'改行後のテキスト'\n",text)
                    data[j].innerHTML = text;
                }
                else{
                    console.log("文字列が見つかりませんでした Elem["+i+"]["+j+"];")
                }
            }
        }
        else{
            console.log("文字列が見つかりませんでした Elem["+i+"];")
        }
    }
    for(i=0;i<ClassCount;i++){
        var data = document.getElementsByClassName(Class[i]);
        if(data[0]!=undefined&&data[0]!=""){
            var inClassCount = data.length;
            for(j=0;j<inClassCount;j++){
                if(data[j]!=undefined&&data[j]!=""){
                    var text = data[j].innerHTML;
                    text = text.replace(/\n/g,"<br>\n");
                    console.log("'改行後のテキスト'\n",text)
                    data[j].innerHTML = text;
                }
                else{
                    console.log("文字列が見つかりませんでした Class["+i+"]["+j+"];")
                }
            }
        }
        else{
            console.log("文字列が見つかりませんでした Class["+i+"];")
        }
    }

}