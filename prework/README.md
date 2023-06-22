# Prework

## Markdown

> là một cú pháp đánh dấu văn bản một cách đơn giản hơn so với HTML do đó để thực hiện các thao tác về viết văn bản chúng ta thường sử dụng markdown hơn.

h1 #
h2 ##
h3 ###

This is a **bold text**

## Git and Github

### Git

> Git là một hệ thống Version Control System,...

#### Một số câu lệnh git cơ bản

##### Bước Khởi tạo

- Khởi tạo 1 hệ thống git repository tại thư mục hiện tại  `git init`
- Liên kết hệ thống git với GitHub repository `git remote add origin $github-repository-url`

> Để hiển thị tất cả các remote Github repository đang được liên kết thì dùng lệnh `git remote -v`

##### Bước thao tác với source code để đẩy các thay đổi lên Github

- Thêm các thay đổi vào lần commit này `git add $file1 $file2`
  - Nếu muốn thêm tất cả các thay đổi thì dùng lệnh `git add .`
- Thêm ghi chú cho lần commit này `git commit -m "$message"`
- Đẩy commit lên Github `git push origin $branch`

> Để hiển thị trạng thái của các files trong Git thì dùng lệnh `git status`


### Github

> Là một nơi lưu trữ source code, cho phép nhiều lập trình viên cùng làm việc trên một source code

### Repositories

> Là một thư mục nhỏ trong tài khoản Github dùng để lưu trữ các source code, một repositoty tương ứng với 1 source code/project
