const menuToggle = document.querySelector('.toggle');
const  navigation = document.querySelector(' .navigation');
menuToggle.addEventListener ('click',function(){
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
})