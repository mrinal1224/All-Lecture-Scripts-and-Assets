## The Complete process of request/response cycle in detail ->

When we type in a website’s name
The browser parses the information contained in the URL.
the protocol used is (“https”)

Now suppose you go to the Browser and write something on the Search field

Suppose you write - www.scaler.com
this is a address somewhere stored in the Server but to locate this there must a unique identifier to it right?

Like if you send someone a message you will need there phone number or if you send someone a courier you will need there address (so to locate anaything in particular) you need a unique Entity.

For this case (www.scaler.com) has a unique address that is know as the IP address

What exactly is an IP address?

Imagine you live in a town, and every house in the town has a unique address. This address helps people find your house when they want to visit you or send you something. In the world of the internet, devices like computers, smartphones, and servers also need unique addresses to communicate with each other. That's where IP addresses come in.

IP stands for "Internet Protocol," and an IP address is like a digital version of a house address. It's a set of numbers assigned to each device connected to the internet, helping data find its way to the right destination.

There are two types of IP addresses: IPv4 (Internet Protocol version 4) and IPv6 (Internet Protocol version 6). IPv4 addresses look like a series of four numbers separated by dots, like 192.168.1.1. IPv6 addresses are longer and use a combination of numbers and letters.

Just like your home address, IP addresses are used for different purposes. When you visit a website, your device uses the website's IP address to connect and fetch information. When you send an email, the email servers use IP addresses to locate and deliver your message to the recipient's device.

In summary, think of an IP address as a digital address for devices on the internet, helping them communicate and share information with each other, just like houses in a town have physical addresses for communication.


So www.scaler.com will have a IP address but how this will be retrived?

That's where DNS comes into the Picture

Let's Understand what DNS it's cache and lookup is and How it works

DNS (Domain Name System):

The Domain Name System is like a phonebook for the internet. Instead of remembering numerical IP addresses, which can be difficult for humans, we use domain names (like www.scaler.com) to access websites and online services.

DNS translates these human-readable domain names into IP addresses that computers can understand. It's a distributed system that helps route traffic on the internet.

DNS Cache:

DNS servers store recently accessed domain names and their corresponding IP addresses in a temporary memory called the DNS cache.
When you visit a website or use an online service for the first time, your computer queries a DNS server to get the IP address associated with the domain name. The result is then stored in the DNS cache for a certain period.

The DNS cache helps speed up subsequent visits to the same website or service, as your computer can use the stored information instead of querying the DNS server again.
If the address is not foubd in cache then the whole lookup process starts


Let's underdtand the lookup process


DNS Lookup:

When you enter a website's domain name into your browser (e.g., www.example.com), your computer initiates a DNS lookup to find the corresponding IP address.
The DNS lookup process involves several steps:

Local DNS Resolver: Your computer first checks its local DNS cache to see if it already knows the IP address associated with the domain. If it does, the lookup is complete.

Recursive DNS Server: If the local cache doesn't have the information, your computer contacts a recursive DNS server. This server may have the IP address in its cache or will proceed to find it.

Root DNS Server, TLD DNS Server, Authoritative DNS Server: If the recursive server doesn't have the information, it contacts the root DNS server, then the Top-Level Domain (TLD) DNS server, and finally the authoritative DNS server for the specific domain. The authoritative server holds the actual IP address for the requested domain.

Response: The IP address is sent back through the same chain to your computer, which then stores it in its local DNS cache for future use.

In summary, DNS is a crucial system that translates human-readable domain names into machine-readable IP addresses, allowing us to access websites and online services. The DNS cache stores this information temporarily, and the DNS lookup process involves multiple steps to find the IP address associated with a given domain.


Now the IP address is obtained , Now What?

TCP/IP handshaking Enters the picture


Initiating the TCP Connection:

After obtaining the IP address through DNS, your computer, as the client, initiates a TCP connection with the server hosting the website.
The client sends a "SYN" (synchronize) packet to the server. This packet includes the client's initial sequence number.

Server Responds:

The server, upon receiving the SYN packet, responds with a "SYN-ACK" (synchronize-acknowledge) packet. This packet acknowledges the receipt of the SYN packet and includes the server's initial sequence number.


Finalizing the Handshake:

Your computer, upon receiving the SYN-ACK packet, sends an "ACK" (acknowledge) packet back to the server. This packet confirms the receipt of the SYN-ACK packet and completes the three-way handshake.

The server, upon receiving the ACK packet, acknowledges the completion of the handshake.


Established Connection:

With the three-way handshake completed successfully, a TCP connection is established between your computer and the server. This connection is now ready for data exchange.


Data Exchange:

Once the TCP connection is established, your computer can send requests to the server, and the server can respond with the requested data. TCP ensures the reliable and orderly exchange of data by breaking it down into packets, managing their transmission, and reassembling them at the destination.


Closing the Connection:

After the data exchange is complete, the TCP connection is closed using a process known as the "four-way handshake." It involves sending a "FIN" (finish) packet from one side, receiving an acknowledgment, sending a corresponding FIN-ACK packet from the other side, and finally receiving a final acknowledgment.


![](https://scaler.com/topics/images/steps-of-a-3-way-handshake-for-terminating-the-connection.webp)




In summary, the TCP/IP handshake after retrieving an IP address through DNS involves a three-way handshake to establish a connection between the client and the server. Once the connection is established, data can be exchanged in a reliable and orderly manner. Finally, when the data exchange is complete, the connection is closed using the four-way handshake. This process ensures the integrity and reliability of communication over the internet.




DNS Cache and lookup
IP address is retrieved
Browser cache - chrome://net-internals/#dns
OS cache
Router cache
ISP cache
DNS server
Dns server configuration
Go to network settings and show the dns server
IP Resolution ( not to be covered in the class )

When you type in a domain name in web browser it will first go to either an ISP DNS server or another DNS server we've configured. 
Sometimes, that DNS server may have the information on the domain stored in cache, and if that's the case it will simply respond with the information and serve you that website.
However, if it doesn't have that information stored, the DNS server will send a query to the root server
The root servers won't have information on a specific IP address but it will know where the name servers that serve that TLD(.com) are
The The TLD server will then return the authoritative name server where the desired domain is stored.
For all uncached requests, when a user enters a domain name like ‘google.com’ into their browser window, the DNS resolvers start the search by communicating with the TLD server. In this case, the TLD is ‘.com’, so the resolver will contact the TLD DNS server, which will then provide the resolver with the IP address of Google’s origin server.
The Internet Corporation for Assigned Names and Numbers (ICANN) has authority over all TLDs used on the Internet, and it delegates the responsibility of these TLDs to various organizations. For example, a U.S. company called VeriSign operates all ‘.com’ and ‘.net’ TLDs.

Movie continues
Now you have the IP address. Its like you have the number of the person you want to talk to
You calling a person by dialling in their number
The browser sends an HTTP request message to the server, asking it to send a copy of the website to the client


This message, and all other data sent between the client and the server, is sent across your internet connection using TCP/IP.
TCP / IP 
Any given interaction may be between two computer systems, or it may involve hundreds of systems.
For this to happen, the two computers need to know, ahead of time, how they are expected to communicate.
How do they start the conversation?
Whose turn is it to communicate?
How does each computer know its message was transmitted correctly?
How do they end the conversation?
TCP/IP breaks each message into packets, and those packets are then reassembled on the other end.
Puzzle game
https://images.app.goo.gl/GRsSZDuHwEGvGvLz8
TCP 3 Way handshake ( not to be covered in the class )
TCP establishes a secure and reliable connection between two devices. 
The 3-Way handshake is a TCP/IP network connection mechanism that connects the server and client. 
Before the real data communication process begins, both the client and server must exchange synchronization and acknowledgment packets.

Story continues
Client sends a Get/ Put / Post request to server
If the server approves the client's request, the server sends the response
What is in the response - HTML / CSS and JS
Multiple types of responses ( not to be covered )
1xx - information message sent
2xx - some kind of success
3xx - redirect
4xx - some error on client side
5xx - error on server side
Show demo for google
The browser assembles the small chunks of response into a complete web page and displays it
