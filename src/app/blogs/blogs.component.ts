import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog,MatDialogConfig,MAT_DIALOG_DATA,MatTooltip } from '@angular/material/';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  index : number;
  blogList:any=[];
  constructor(private router:Router,private modalService: MatDialog) { }
  
  ngOnInit() {
    this.blogList=[
      { img:'https://cdn-images-1.medium.com/max/900/1*BJCmQNff8YOCLobXjf-xeQ.jpeg',eventName:'7 QUALITIES OF AN ENTREPRENEUR', eventDescription:`An entrepreneur is an individual who, rather than working as an employee, finds and runs his/her own business, assuming all the risks and rewards of the venture. The entrepreneur is commonly seen as an innovator, a source of new ideas, goods, services and business/or procedures.Entrepreneurs play a key role in any economy. These are the people who have the skills and initiative necessary to anticipate current and future needs and bring good new ideas to market. Entrepreneurs who prove to be successful in taking on the risks of a start-up are rewarded with profits, fame and continued growth opportunities. Those who fail suffer losses and become less prevalent in the markets.What I want to connote is everyone can have innovative ideas and plans for a business but there is a difference between being an entrepreneur and a successful entrepreneur. In order to get success one must develop (notice that I said ‘develop’ since it happens over time) a number of qualities and deportments that steer them to become masters of their fields. Here are seven very necessary qualities that an entrepreneur holds.
      
      <h3>TENACITY</h3>
      Starting a business and making it a successful business is a long distance race, not a sprint.  You can’t take a break when you want to and you can’t just wait for things to happen for you.  You’re the rain maker and Tenacity will be a key attribute if you want to succeed.
      <h3>PASSION</h3>
      You don’t need to follow your passion when you start your own business but you do need to become passionate about your business.  It may sound contradicting, but it’s not.  I was (and still am) passionate about singing, but I knew that it would not make a successful career option for me.  Instead, I became passionate about engineering and rapidly saw the tremendous opportunities for growth in this arena.  It’s not even about money.  It’s your own passion, and nothing else, that will make you get up in the morning excited about your day.

      <h3>RISK TAKING</h3>
      I think this is very self-explanatory.  Entrepreneurs MUST take risks.  You can call them “calculated” risks, but risks nevertheless.  You will understand that any risk could lead to a potential failure.  To put it simply, if you are afraid to fail, entrepreneurial life is not for you.  You will take a number of risks and you will also fail a number of times.  And that will be fine.  Eventually, you will succeed and all of those past failures will just be part of your path to success.

      <h3>VISION</h3>
      You have to be very sure of what you want and gain mastery in what you do.  You have a vision that you need to materialize into a plan so that those who follow you, can help you turn your vision into reality.  A vision alone will not take you far.  The execution of your vision will.   You have the ability to imagine things that other people can’t, but you also need to be able to sell your vision to others for it to become successful.
      <h3>SELF-CONFIDENCE</h3>
      This is another trait that I’m sure doesn’t come as a surprise to anybody.  If you don’t have confidence in yourself and your own abilities, nobody will.  A lot of people tend to mistake self-confidence with arrogance, and I understand that sometimes, the two may be closely related.  However, you must be massively self-confident in order to take any risks to stand behind your product, something that if you’re simply arrogant, you will probably not do once risk becomes part of the equation.  Arrogant people don’t take risks.  Self-confident people do.

      <h3>FLEXIBILITY</h3>
      “Survival of the Fittest.”  But did you know that the original expression was not about being in great physical shape but rather about adapting or “fitting” to most situations?   Business survival, like that of any species, requires a lot of adaptation. You must be constantly evolving and adapting to new situations, new demands, new technology.  Being flexible will allow you to respond to any changes faster than your competitors can. In today’s business environment, “First to Market” is always better than “Best to Market.”  Recognize –fast- what works and what doesn’t and adapt accordingly.

      <h3>DISCIPLINE</h3>
      We are always being told that Discipline is “doing what you have to do when nobody is watching you.”  This is not about pretending to be busy when your boss walks by.  Now, you are the boss.  It’s no longer about jamming your schedule with worthless minutiae to make you feel good about how ‘busy’ you are.  We’re now talking about pure Discipline.  You have to do what you have to do, regardless of whether you feel like doing it or not, or whether it is a weekend, after hours or your own birthday.  You become naturally disciplined when you don’t have to think about “discipline” anymore to get things done.
      So these are the major qualities that an entrepreneur possesses. From these you can very well evaluate yourself whether you sway the traits of an entrepreneur or not.` },
      { img:'https://preview.ibb.co/f29yoA/ecell-poster4-1.png',eventName:'7 entrepreneurs who started their journey from college', eventDescription:`Today ‘s world has this delusion that inorder to be successful a college degree is imperative,the following people’s achievements say otherwise:
      
      <h3>1. Mark Zuckerberg</h3>
      Arguably one of the most well-known, and successful, entrepreneurs who started their business while attending college is Mark Zuckerberg. In 2004 Zuckerberg founded ‘The Facebook’ in his Harvard dorm room. Originally intended to be a private website for his Harvard classmates, the social network spread across college and university campuses before becoming used by more than 1.65 billion people globally.
      
      <h3>2. Michael Dell</h3>
      Michael Saul Dell is an American businessman, investor, philanthropist, and author. He is the founder and CEO of Dell Technologies, one of the world's largest technology infrastructure companies. Dell actually started in a dorm room while Michael Dell was attending the University of Texas.
      
      <h3>3. Steve Huffman and Alexis Ohanian</h3>
      Known as the front page of the internet, Reddit was founded by a pair of students at the University of Virginia in 2005. While Reddit itself was founded after Steve Huffman and Alexis Ohanian had graduated university, this dynamic duo worked on several other tech ventures while attending college.
      
      <h3>4. Frederick W. Smith</h3>
      While attending Yale in 1962, Frederick Smith wrote a paper for his economics class that outlined how an overnight delivery service could thrive in the information age. Legend has it that Smith received a C for his paper. Regardless, this paper survived as the inspiration for the company that Smith would eventually found in 1971.Federal Express, FedEx for short, is now a well-known global courier that exceeds revenues of $47 billion.
      
      <h3>5.  Jerry Yang and David Filo</h3>
      While attending Stanford as graduate students in 1994, Yang and Filo came to the conclusion that they needed to organize their online surfing efforts. This lead to the creation of the Yahoo! directory. In 1996 the company went public, and despite some rough times, is the fifth most popular website in the world with almost 7 billion monthly visitors.
      
      <h3>6. Larry Page and Sergey Brin</h3>
      Larry Page and Sergey Brin founded Google, the Internet search engine, while they were graduate students at Stanford University in Palo Alto, California. Since its founding in 1998, Google has become one of the most successful dot-com businesses in history. Both Page and Brin were reluctant entrepreneurs who were committed to developing their company on their own terms, not those dictated by the prevailing business culture. Today Google, now known as Alphabet, is the most popular website in the world and is one track to become the first U.S. company to reach the $1 trillion mark.
      
      <h3>7. Marc Andreessen</h3>
      While working at the National Center for Supercomputing Applications (NCSA) at the University of Illinois, Andreessen met Eric Bina. Together, Andreessen and Bina developed a user-friendly browser that also contained integrated graphics. Originally named Mosaic, the web browser went live in 1993 and quickly won over thousands of users. The company changed its name to Netscape, since credit under Mosiac went to NCSA.American Online and Sun Microsystems acquired Netscape for a cool $4.2 billion and Andreessen and Bina were just six inductees of the first World Wide Web Hall of Fame ceremony. He’s also a General Partner of Andreessen Horowitz
      
      ` },
    ]
  }

  height='100%';
  width='1200px';  
  events: string[]=['Case study event going on','Conducted the freshment orientation'];

  openDialog(content,index)
  {
    this.index = index;
    const dialogConfig = new MatDialogConfig();
    this.modalService.open(content,{
      height: this.height,
      width: this.width,
      panelClass: 'custom-modalbox'
    });
  }
  cross_click(){
    this.modalService.closeAll();
}

  
}
