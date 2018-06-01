<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Comentarios</title>
</head>

<body>
<form id="form1" name="form1" method="post" action="enviar.php" onsubmit="return verifica()">
        <table width="900" border="1" align="center" cellpadding="15" cellspacing="0" bgcolor="#FFFFFF">
              <tr>
                <td colspan="2"><div align="center" class="style30 style44">Deja tu Comentarios:</div></td>
              </tr>
              <tr>
                <td width="71"><span class="style21 style29 style44">Usuario</span></td>
                <td width="161" bgcolor="#FFFFFF"><div align="left" class="style29">
                    <input name="tema" type="text" id="tema" size="25" />
                </div></td>
              </tr>
              <tr>
                <td><span class="style21 style29 style44">Comentario</span></td>
                <td><span class="style29">
                  <label></label>
                  <textarea name="comentario" id="comentario" rows="10" cols="44"></textarea>
                </span></td>
              </tr>
              <tr>
                <td colspan="2"><div align="center">
                    <input type="submit" name="Submit" value="enviar" />
                </div></td>
              </tr>
  </table>
</form>

            <table width="53%" border="0" align="center" cellpadding="0" cellspacing="0">
              <tr>
                <td align="center"><?php
  readfile ("texto.txt")
	?></td>
              </tr>
            </table>
</body>
</html>
