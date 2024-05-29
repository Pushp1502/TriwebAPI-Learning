#print("hello universe")

import os

def addition(num1, num2):
    sum = num1 + num2
    return sum


def subtraction(num1, num2):
    difference = num1 - num2
    return difference



def multiplication(num1, num2):
    product = num1 * num2
    return product



def division(num1, num2):
    division = num1 / num2
    return division

    # prin


while 1:
    os.system('cls')
    print("1 is Addition ")
    print("2 is Subtraction ")
    print("3 is Multiplication ")
    print("4 is Division ")
    userchoice = int(input("Write the function number"))
    if(userchoice == 0):
        break
    num1 = int(input("Type a number"))
    num2 = int(input("Type a number"))

    result = 0

    if(userchoice == 1):
        result = addition(num1, num2)
    elif(userchoice == 2):
        result = subtraction(num1, num2)
    elif(userchoice == 3):
        result = multiplication(num1, num2)
    elif(userchoice == 4):
        result = division(num1, num2)
    elif(userchoice == int(input("press any key to continue/0 to exit "))):
        break
    else:
        print("wrong choice")
    
    print("Result =", result)
    
