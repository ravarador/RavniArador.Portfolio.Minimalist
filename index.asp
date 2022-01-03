<%EnableSessionState=False
host = Request.ServerVariables("HTTP_HOST")

if host = "ravarador.com" or host = "www.ravarador.com" then
response.redirect("https://www.ravarador.com/")

else
response.redirect("https://www.ravarador.com/error.htm")

end if
%>