<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Comentarios</title>

<body>
<p align="center">
  <?php
$fecha=date("j-n-Y");
$tema=$_POST['tema'];
$comentario=$_POST['comentario'];

$fp=fopen("texto.txt","a+");
$salida="<table width='900' border='0' cellpadding='2' cellspacing='1' bordercolor='blue' bgcolor='#FFFFFF'>
  <tr>
    <td width='312'><div align='center'>$tema</div></td>
  </tr>
  <tr>
    <td><div align='center'>$comentario</div></td>
  </tr>
</table>";
fwrite($fp,$salida);
fclose($fp);
?>
</p>
<p align="center"><a href="comentarios.php">regresar</a></p>
</body>

</html>
