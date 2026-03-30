use instagram;
create table `posts` (
    id int not null auto_increment  primary key,
    user_id int not null,
    conteudo varchar(255) not null 
);