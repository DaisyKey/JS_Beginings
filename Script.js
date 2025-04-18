var txt,num,x
txt = " Через переменные"
num = 1
x = "Сегодня я ввел уже: "

document.write("Изучение <b> JS </b> <br> Загрузка теперь из файла")//HTML теги спокойно будут обрабатываться браузером
document.write(txt+num)
document.write(x)
x = 3
document.write(x + "<br>")

var y = "3*12 - 10"
document.write(y+"=")
document.write(eval(y)+ "<br>")

var c,z
z = 10
c = z++
document.write(c + "<br")

var Str = "Read"
document.write(Str)
document.write(!!Str)