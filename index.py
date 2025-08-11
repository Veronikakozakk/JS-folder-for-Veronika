# def get(a,b):
#     if(a==b):
#         print('equal')
#     else:
#         print('not equal')
 
# get(2,3)

# def get():
#     for i in range(20,40,5):
#         print(i)
# get()

# a = [3,4,5,2,4,5,6,7]
# print(a[0])
# a[1] = 20
# print(max(a))
# print(min(a))
# print(sum(a))
# print(a)

# a.append(20)


# a.remove(7)


# a.pop(0)


# a.sort()

# a.reverse()

# a.extend([1,2,3,4,3,2,1])

# a.clear()

# a.insert(2,8)

# a = [1,2,1,2,3,4,3,2,1,1,1,11,3,4,5,6,4,3,11]
# n = a.count(1)
# print(n)

# b = a.index(7)

# a = (4,1,4,5)
# print(a)
# print(a[1])
# print(len(a))
# print(type(a))

# a = [1,2,3,4,5,6]
# a.remove(1)
# a.remove(2)
# a[-1] = 1000
# a[-2] = 1000
# print(a)

# a = {1,2,3,4,5}
# a.add(20)
# a.remove(2)
# a.discard(30)
# a.update([10,13,14,15])
# print(a)

# a = {1,2,3,4,5}
# for i in range(20,40):
#     a.add(i)
# print(a)

# c = a.union(b) mnozhenstvo only

# c = a.intersection(b) # returns same numbers in variables

# c = a.symmetric_difference(b)

# a = {44:66,0:1}
# print(a[0])
# print(a)

# a = {13:8,4:12,'Hi':3333}
# print(a[13])
# a[13] = 200000
# a.pop('Hi')
# print(a.keys())
# print(a.values())

# a = {1:2000,2:234,3:'apricots'}
# a.update({4:234})
# a.update({5:2300000})
# a.update({6:120000})
# a[1] = 546
# a[2] = 'Watermelon'
# print(a)

# for i in a:
#     print(i,'-',a[i])

# a = list(range(10,21))
# print(a) ##diapazone, generates nums

# a = [1,2,3,4,5]
# a = tuple(a)
# print(a)

# def get(*a):
#     print(a)

# get(1,1,1,1,2,3,2,3,4,5,6,6,7,5)

# def get(**a):
#     print(a)

# get(a=3,b=5,c=8)
    
# a = (1,2,3,4,5)
# a = list(a)
# a.sort()
# a = tuple(a)
# print(a)

# try:
#     a = [4,1,6]
#     print(a[100])
# except IndexError:
#     print('+')

# try:
#     a = {55:12,6:0}
#     print(a[66])
# except KeyError:
#     print('hello')

# try:
#     a = 'Veronika'
#     a = int(a)
#     print(a)
# except ValueError:
#     print('hello')

# try:
#     a = {1:23,2:45,3:'bananas'}
#     print(a[5])
# except KeyError:
#     print('error')

# try:
#     a = [1,0,99,42,35]
#     print(a[1000]/a[1])
# except(ZeroDivisionError,IndexError):
#     print('error')

# a = [5,3,2,4,1]
# b,c,d,e,f = a
# print(b)
# print(c)
# print(d)
# print(e)
# print(f)

# a = 5
# b = 8
# c = 2
# d = 9
# *data, = a,b,c,d
# print(data)

# k = (1,2,3)
# a,b,c = k
# *data, = a,b,c
# print(data)

# a = [1,2,3,4]
# a = str(a)
# print(a)
# for i in a:
#     print(i)

# a = 'Veronika'
# a = list(a)
# b,c,d,e,r,f,n,k = a
# print(b)....

# with open('text.txt','r') as file:
#     print(file.read())

# with open('text.txt','w') as file:
#     file.write('Python and Javascript')

# with open('text.txt','a') as file:
#     file.write('hello')


# class Person:
#     name = 'roma'
#     age = 25

#     def geti(self):
#         print('hello')
#     def info(self):
#         print(self.name,self.age)

# a = Person()
# print(a.name,a.age)
# a.info()
# a.geti()

# class Nums:
#     n1 = 23
#     n2 = 50

#     def get(self):
#         print(max(self.n1,self.n2))
#     def data(self):
#         if self.n1 == self.n2:
#             print('equal')
#         else:
#             print('different')
# a = Nums()
# a.get()
# a.data()

# class Num:
#     def get(self):
#         for i in range(20,40):
#             print(i)
# a = Num()
# a.get()

# class Word:
#     w = 'apple'
#     def get(self):
#         for i in self.w:
#             print(i)
#     def data(self):
#         print(self.w[0])
#         print(self.w[-1])
# a = Word()
# a.get()
# a.data()

# class Nums:
#     n1 = 34
#     n2 = 56
#     n3 = 12
#     n4 = 8
#     def get(self):
#         print((self.n1+self.n2+self.n3+self.n4)*4)
#     def data(self):
#         print(min(self.n1,self.n2,self.n3,self.n4))
# a = Nums()
# a.get()
# a.data()

# class Nums:
#     def get(self,a,b,c):
#         print(a/2)
#         print(b/2)
#         print(c/2)
# m = Nums()
# m.get(1,2,3)

# class Num:
#     n = 67
#     def get(self):
#         print(self.n)
#         print(self.n / 2)
#         print(type(self.n))
# a = Num()
# a.get()

# class Data:
#     name = 'Veronika'
#     def get(self):
#         print(self.name)

# a = Data()
# a.get()

# class Nums:
#     __name = 'Veronika'
#     def get(self):
#         print(self.name)

# a = Data()
# a.get()

# class Word:
#     __w = [1,2,3,4,5,6]
#     def get(self):
#         self.__w.reverse()
#         print(self.__w)
# a = Word()
# a.get()

# class Nums:
#     __n1 = 23
#     __n2 = 56
#     __n3 = 7
#     def get(self):
#         print((self.__n1+self.__n2+self.__n3)/3)
#     def data(self):
#         print(self.__n1*self.__n2*self.__n3)
# a = Nums()
# a.get()
# a.data()

# class Word:
#     __num = 12

#     def plus(self,num2):
#         num3 = 33
#         print(self.__num+num2+num3)
# m = Word()
# m.plus(10)

# class Private:
#     __num = 12
#     def __lll(self):
#         print(self.__num/2)
#     def get(self):
#         self.__lll()
# a = Private()
# a.get()

# class Person:
#     @staticmethod
#     def get():
#         print('hello')

#     @staticmethod
#     def data():
#         print('world')

# Person.data()
# Person.get()

# class Nums:
#     @staticmethod
#     def get():
#         for i in range(20,40):
#             print(i)
# Nums.get()

# class Nums:
#     @staticmethod
#     def get(a,b):
#         print(a+b)
# Nums.get(20,23)

# class Name:
#     @staticmethod
#     def get(name):
#         print(name)
# Name.get('Veronika')

# class Nums:
#     @staticmethod
#     def get(a,b):
#         c =12
#         d = 9
#         Print(a+b+c+d)
# Nums.get(34,12)


# class Nums:
#     @staticmethod
#     def get(a):
#         for i in a:
#             print(i)
# Nums.get('Hello')

# class Person:
#     name = 'Python'

#     @staticmethod
#     def get():
#         print('hello')
#     @classmethod
#     def data(cls):
#         print(cls.name)
    
# Person.get()
# Person.data()

# class Person:
#     def __init__(self,name,age):
#         self.name = name
#         self.age = age

#     def get(self):
#         print(self.name,self.age)
# a = Person('Oleg',22)
# a.get()

# class Num:
#     def __init__(self,num):
#         self.num = num
#     def get(self):
#         print(self.num / 2)
#     def data(self):
#         print(self.num * 2)
# a = Num(340)
# a.get()
# a.data()

# class ABC:
#     def __init__(self,a,b,c):
#         self.a = a
#         self.b = b
#         self.c = c
#     def get(self):
#         print(self.a+self.b+self.c)
# k = ABC(23,45,120)
# k.get()

# class Data:
#     num1 = 22
#     num2 = 33

# class Info(Data):
#     def get_data(self):
#         print(self.num1+self.num2)
# a = Info()
# a.get_data()

# class A:
#     a=12
# class B:
#     b = 9
# class C:
#     c = 55
# class Data(A,B,C):
#     def get(self):
#         print(self.a+self.b+self.c)
# m = Data()
# m.get()

# class A:
#     a = 'Python'
#     b = 'JavaScript'
# class Data(A):
#     def get(self):
#         if len(self.a) == len(self.b):
#             print('same length')
#         else:
#             print('differnt lengths')
# k = Data()
# k.get()

# class Strings:
#     a = 'apricots'
#     b = 'bananas'
#     def get(self):
#         print(self.a)
#         print(self.b)
# k = Strings()
# k.a = 'hello'
# k.b = 'bye'
# print(k.a,k.b)

# class Nums:
#     __n1 = 23
#     __n2 = 17
#     def get(self):
#         print(float(self.__n1))
#         print(float(self.__n2))
# a = Nums()
# a.get()

# class ABC:
#     def __init__(self,st):
#         self.st = st
#     def get(self):
#         for i in self.st:
#             print(i)
# a = ABC('strings')
# a.get()

# class A:
#     a = 23
# class B(A):
#     b = 56
# class C(B):
#     def plus(self):
#         print(self.a+self.b)
# l = C()
# l.plus()

# class Data:
#     def get(self):
#         print('Python')
# class Info(Data):
#     def get(self):
#         super().get()
#         print('Js')
# a=Info()
# a.get()

# class A:
#     __n =  12
#     def get(self):
#         return self.__n
# a = A()
# print(a.get())

# class Person:
#     __age = 33

#     def get(self):
#         print(self.__age)
#     def change(self,new_age):
#         self.__age = new_age
# a = Person()
# a.get()
# a.change(20)
# a.get()

# class Person:
#     __age = 20
#     @property
#     def get(self):
#         return self.__age
#     @get.setter
#     def get(self,new_age):
#           self.__age = new_age
    
# a = Person()
# print(a.get)
# a.get = 40
# print(a.get)

# class Data:
#     __w = 'Watermelon'
  
#     def get(self):
#         print(self.__w)
  
#     def set(self,word):
#           self.__w = word
# a = Data()
# a.get()
# a.set('apples')
# a.get()

# class Private:
#     __w = 'Water'
#     @property
#     def get(self):
#         return self.__w
#     @get.setter
#     def set(self,abc):
        
#         if len(abc) > 8:
#               self.__w = abc
#         else:
#              print('error')
             

# a = Private()
# print(a.set)
# a.set = 'hdosahfohof'
# print(a.set)

# name = 'veronika'
# age = 40
# # print('hello',name,'your age is', age,'old')
# print(f'hello{name} your age {age} old')

# class Data:
#     __num = 23
#     def get (self):
#         print(self.__num)
#     def set (self,nums):
#          if nums > 100:
#               self.__num = nums
#          else:
#              print('wrong')
             

# a = Data()
# a.get()
# a.set(1000)
# a.get()

# class Data:
#     name = 'python'
#     age = 30

#     def __str__(self):
#         return f'{self.name} -- {self.age}'
# a = Data()
# print(a) 

# class Data:
#     def __call__(self,a,b):
#         return a+b
# m = Data()
# print(m(1,2))


# class Data:
#     def __init__(self,a):
#         self.a = a
#     def __call__(self,b):
#         return self.a / b
# k = Data(46)
# print(k(13))
# print(k(2))

# class Data:
#     def __init__(self,n1,n2):
#      self.n1 = n1
#      self.n2 = n2

#     def __str__(self):
#         return f'{self.n1} -- {self.n2}'
# a = Data(2,3)
# print(a)

# class Data:
#     a = 8
#     def __del__(self):
#         print('ehfef')
# b = Data()
# del b

# class Data:
#     a =12
#     def __add__(self,num1):
#         return self.a + num1
#     def __sub__(self,num1):
#         return self.a - num1
#     def __mul__(self,num1):
#         return self.a*num1
#     def __truediv__(self,num1):
#         return self.a / num1
#     def __eq__(self,num1):
#          return self.a == num1
# m = Data()
# print(m+8)
# print(m-2)
# print(m*2)
# print(m/10)
#print(m==20)

# class Data:
#     @staticmethod
#     def get(n1,n2):
#         return str(n1), str (n2)
# a = Data.get(36,34)
# print(a)

# class Data:
#     def get(self,num):
#         print(type(num))
# a = Data()
# a.get([14,34,2])

a= 23
print (a)