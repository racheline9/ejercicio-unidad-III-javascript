function usrpas(){
if (document.form1.txt.value=="admin" && document.form1.num.value=="1234"){window.location="home.htm"}
else {alert("Error en Usuario o Contraseña. Intenta de nuevo.")}
}
document.oncontextmenu=new Function("return false");

function go(){

    if (document.form.password.value=='CONTRASEÑA' && document.form.login.value=='USUARIO'){ 
            document.form.submit(); 
        } 
        else{ 
             alert("Porfavor ingrese, nombre de usuario y contraseña correctos.");