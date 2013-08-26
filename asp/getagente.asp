<!--#include file="connect.asp"-->
<!--#include file="JSON.asp"-->
<!--#include file="JSON_UTIL.asp"-->

<%
lcSQLString = "SELECT CVE_VEND as CLV_VEND,NOMBRE FROM VEND01 WHERE STATUS = 'A' ORDER BY NOMBRE"

QueryToJSON(dbConn, lcSQLString).Flush

%>
<!--#include file="disconnect.asp"-->
