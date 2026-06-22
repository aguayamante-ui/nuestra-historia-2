# nuestra-historia-2
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Dani ❤️ Agustín</title>
<style>
body{
margin:0;
font-family:-apple-system,BlinkMacSystemFont,sans-serif;
background:#fff8f8;
color:#333;
}

.hero{
height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
padding:20px;
background:linear-gradient(135deg,#ffe0e9,#fff5f7);
}

.hero h1{
font-size:3rem;
margin-bottom:10px;
}

.hero p{
font-size:1.2rem;
max-width:700px;
}

.story{
max-width:900px;
margin:auto;
padding:40px 20px;
text-align:center;
}

.story img{
width:100%;
border-radius:25px;
box-shadow:0 10px 30px rgba(0,0,0,.15);
}

.story h2{
margin-top:20px;
}

.countdown{
padding:80px 20px;
text-align:center;
background:#ffeef2;
}

#timer{
font-size:2rem;
font-weight:bold;
}

button{
padding:15px 30px;
border:none;
border-radius:30px;
background:#ff5f8f;
color:white;
font-size:18px;
}

#coupon{
display:none;
background:white;
padding:25px;
border-radius:20px;
margin-top:20px;
box-shadow:0 10px 20px rgba(0,0,0,.1);
}
</style>
</head>
<body>

<section class="hero">
<h1>Dani ❤️ Agustín</h1>
<p>La espera vale la pena cuando el destino eres tú.</p>
<p>📍 Viña del Mar ↔ Puerto Montt</p>
</section>

<section class="story">
<img src="foto1.jpg">
<h2>Nuestro primer refugio</h2>
<p>Entre tantas personas y momentos, encontré un lugar donde todo se sentía tranquilo. Ese lugar siempre fuiste tú.</p>
</section>

<!-- AQUÍ SIGUEN LAS OTRAS 8 FOTOS -->

<section class="countdown">
<h2>⏳ Falta menos para volver a verte ❤️</h2>
<div id="timer"></div>

<button onclick="document.getElementById('coupon').style.display='block'">
🎁 Reclamar Cupón ❤️
</button>

<div id="coupon">
<h2>CUPÓN ESPECIAL</h2>
<p>La portadora de este cupón puede elegir:</p>
<p>❤️ Actividad 1</p>
<p>❤️ Actividad 2</p>
<p>❤️ Actividad 3</p>
<p>Sin fecha de vencimiento ❤️</p>
<p>Válido exclusivamente para Dani</p>
</div>
</section>

<script>
const targetDate = new Date("2026-06-27T18:00:00");

function updateTimer(){
const now = new Date();
const diff = targetDate - now;

const days = Math.floor(diff/(1000*60*60*24));
const hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
const minutes = Math.floor((diff%(1000*60*60))/(1000*60));
const seconds = Math.floor((diff%(1000*60))/1000);

document.getElementById("timer").innerHTML =
days+" días "+hours+" horas "+minutes+" min "+seconds+" seg";
}

setInterval(updateTimer,1000);
updateTimer();
</script>

</body>
</html>