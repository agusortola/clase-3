dias = ['Lunes',
        'Martes',
        'Miercoles',
        'Jueves',
        'Viernes',
        'Sabado',
        'Domingo'];

        
let i = 0;
for (i; i<dias.length;i++){
    if(i == 6) {
        alert('Hoy es domingo de descanso, feliz comienzo de semana!')
    } else if (i == 1 || i == 3 || i == 5) {
        console.log(`${dias[i]} es un día par.`)
    }
};