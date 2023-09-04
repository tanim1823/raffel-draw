# Lottery Api

- sell lottery ticket
- update lottery ticket
- delete lottery ticket
- get all ticket
- get ticket by id
- bulk buy ( user can buy multiple ticket )
- raffle draw

Ticket:
- number (unique)
- username
- price
- timestap

Routes:
- /tickets/t/:ticketId GET - find single ticket 
- /tickets/t/:ticketId PATCH - update ticket by id
- /tickets/t/:ticketId DELETE - delete ticket by id
- /tickets/u/:username GET - Find ticket for a given user
- /tickets/u/:username PATCH - update ticket for a given user
- /tickets/u/:username DELETE - delete all ticket for a given user
- /tickets/sell - create tickets
- /tickets/bulk - bulk sell ticket
- /tickets/draw
- /tickets - find all tickets



