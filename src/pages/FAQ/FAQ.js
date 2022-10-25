import React from "react";
import { Accordion, Container } from "react-bootstrap";

const FAQ = () => {
  return (
    <section>
      <div>
        <h2 className="text-center fw-bold my-4">Frequently Asked Questions</h2>
        <p className="text-center w-75 mx-auto fs-5 text-secondary">
          There are some important questions with answers these are taken from
          our site visitors & new learners and these questions' solution are
          given by our expert team members. You might find your desired
          questions with answers. Let's check it out & learn with{" "}
          <b>HeroCoders</b>.
        </p>
      </div>
      <Container className="my-5">
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item
            eventKey="0"
            className="my-3 shadow p-4 border-0 rounded-2"
          >
            <Accordion.Header>
              <h4 className="fs-5">What does a web developer Actually do?</h4>
            </Accordion.Header>
            <Accordion.Body>
              Web developers create and maintain websites. They are also
              responsible for the site's technical aspects, such as its
              performance and capacity, which are measures of a website's speed
              and how much traffic the site can handle. In addition, web
              developers may create content for the site.There are three types
              of web development roles: developers who specialize in the user
              interface “front-end”, those who write the underlying code for
              running all website operations “back-end”, and those who manage
              all aspects of a website “full stack”.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            eventKey="1"
            className="my-3 shadow p-4 border-0 rounded-2"
          >
            <Accordion.Header>
              <h4 className="fs-5">Is web development a hard career?</h4>
            </Accordion.Header>
            <Accordion.Body>
              “As a web developer, you will encounter numerous challenges. Some
              of them will be easy to fix, while others will be extremely hard,”
              Kowalski says. “It's critical to be persistent in improving your
              skills since the industry is ever-changing.” There's definitely a
              lot to learn in web development.Web development is stressful. Like
              any other job, deadlines, clients, competition, and projects can
              all add to the stress for web developers. Managing things like
              release dates, updates, timelines, and more can help decrease the
              stress for web developers.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            eventKey="2"
            className="my-3 shadow p-4 border-0 rounded-2"
          >
            <Accordion.Header>
              <h4 className="fs-5">What is ethical hacking?</h4>
            </Accordion.Header>
            <Accordion.Body>
              Ethical hacking involves an authorized attempt to gain
              unauthorized access to a computer system, application, or data.
              Carrying out an ethical hack involves duplicating strategies and
              actions of malicious attackers.Ethical hacking often involves a
              form of penetration testing, or pen testing. This is an attempt to
              breach a system, operating system, application, server, network,
              program, or device. Penetration testing can involve internal or
              external testing as well as web application testing.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            eventKey="3"
            className="my-3 shadow p-4 border-0 rounded-2"
          >
            <Accordion.Header>
              <h4 className="fs-5">What is Remote Job?</h4>
            </Accordion.Header>
            <Accordion.Body>
              People who work from home most of the time are usually called
              remote workers. More and more remote jobs emerge every day
              worldwide as companies realize they don't need people to be in a
              traditional office space.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            eventKey="4"
            className="my-3 shadow p-4 border-0 rounded-2"
          >
            <Accordion.Header>
              <h4 className="fs-5">What is freelancing?</h4>
            </Accordion.Header>
            <Accordion.Body>
              Freelancing is a type of self-employment. Instead of being
              employed by a company, freelancers tend to work as self-employed,
              delivering their services on a contract or project basis. You need
              to work hard and be determined to succeed as a freelancer. More
              importantly, it takes time to gain experience and develop skills.
              A good way to make this process easier is to find a coach and
              improve your skills by taking courses and reading books.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
};

export default FAQ;
