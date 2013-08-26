<!--#include file="connect.asp"-->
<!--#include file="JSON.asp"-->
<!--#include file="JSON_UTIL.asp"-->

<%
lcSQLString = "SELECT INVE01.CVE_ART AS CLV_ART, INVE01.DESCR, INVE01.PESO, PRECIO_X_PROD01.PRECIO FROM INVE01 INNER JOIN PRECIO_X_PROD01 ON INVE01.CVE_ART = PRECIO_X_PROD01.CVE_ART WHERE (INVE01.STATUS = 'A') AND (PRECIO_X_PROD01.PRECIO <> 0) ORDER BY CLV_ART"


QueryToJSON(dbConn, lcSQLString).Flush

%>
<!--#include file="disconnect.asp"-->
