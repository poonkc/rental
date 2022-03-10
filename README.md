# rental
backend ของระบบการ ยืมหนังสือ โดนใช้ database เป็น mongoDB 

# model
 - usermodel เก็บข้อมูลของผู้ใช้งาน
 - bookmodel เก็บข้อมูลและจำนวนของหนังสือ
 - rentmodel เก็บข้อมูลการยืมหนังสือ
 - receiptmodel เก็บข้อมูลการคืนหนังสือ

# function
  - usercontroller เกี่ยวกับ add ข้อมูล ของ user และ login
  - bookcontroller เกี่ยวกับ CRUD ของหนังสือ
  - rentcontroller เกี่ยวกับ add และ get ข้อมูลของการยืมหนังสือ
  - recepitcontroller เกี่ยวกับการ add การคืนหนังสือ
