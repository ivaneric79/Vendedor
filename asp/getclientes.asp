<!--#include file="connect.asp"-->
<!--#include file="JSON.asp"-->
<!--#include file="JSON_UTIL.asp"-->

<%
lcSQLString = "SELECT CLAVE AS CCLIE,NOMBRE, PAG_WEB AS EMAIL, LIMCRED AS LIM_CRED,SALDO,CLASIFIC,DIASCRED, LISTA_PREC FROM CLIE01 WHERE STATUS = 'A' ORDER BY EMAIL"

QueryToJSON(dbConn, lcSQLString).Flush

%>
<!--#include file="disconnect.asp"-->
