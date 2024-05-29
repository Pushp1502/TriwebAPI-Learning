#print("How to make table with codes")

start = 1
end = 10
num = int(input("Type a Number for table - "))
print("start")
i = start
while i <= end:
    print(num,"*",i,"=",i * num)
    i += 1
print("Complete")