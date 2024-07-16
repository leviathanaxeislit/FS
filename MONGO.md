## Program
```
cd C:\Program Files\mongodb\server\4.2\bin\
mongo
use student
db.stud_details.insert({ rollno: 101, name: 'Kumar', class: 'FYMCA-D' })
db.stud_details.insertMany([
  { rollno: 201, name: 'Deepa', class: 'FYMCA' },
  { rollno: 202, name: 'Madhu' }
])
db.stud_details.find().pretty()
exit
```

## OUTPUT 
> ([
  { rollno: 201, name: 'Deepa', class: 'FYMCA' },
  { rollno: 202, name: 'Madhu' }
])



