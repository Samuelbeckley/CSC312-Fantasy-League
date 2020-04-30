
/*
Group 1

Database: 
SQL database containing  the information for
all of the leagues, users using the game, and the
stocks currently owned by players in the game.
*/

--Initialize game
CREATE DATABASE game

--A list of leagues, containing scores for each team.
CREATE TABLE leagues ( 

 column1 league,

  column2 team,

  column3 score1,
  
  column4 score2,
  
  column5 score3,
  
  column6 score4,
  
  column7 score5,
  
  column8 score6,
  
  column9 score7,
  
  column10 score8,
  
  column11 score9,
  
  column12 score10,
  
  column13 score11,
  
  column14 score12 );

--Table containing users, their league, and the stocks they own.
CREATE TABLE users ( 

 column1 team,

  column2 league,

  column3 score,
  
  column4 stock1,
  
  column5 stock2,
  
  column6 stock3,
  
  column7 stock4,
  
  column8 stock5,
  
  column9 stock6,
  
  column10 stock7,

  column11 stock8,
  
  column12 stock9,
  
  column13 stock10 );

--List of all of the stocks in the game, many of which may be used
--by multiple players in different leagues.
CREATE TABLE stocks ( 

 column1 stockName,

 column1 NASDAQ,

  column3 price,

  column4 weekChange);