let programs = document.querySelectorAll('.program');
programs.forEach(program => {
    program.addEventListener('click', () => {
        let programId = program.getAttribute('data-id');
        window.location.href = `/Html/GetWorkout.html?id=${programId}`;
    });
});
let bestSeller = document.querySelector('.best-selers');
let bestSellerBtn = document.querySelector('.best-selers .button-container');
bestSeller.addEventListener('click', () => {
    let programId = bestSeller.getAttribute('data-id');
    window.location.href = `/Html/GetWorkout.html?id=${programId}`;
});