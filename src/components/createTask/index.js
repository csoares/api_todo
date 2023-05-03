import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const CreateTask = (props) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const handleChange = (event) => {
    console.log(event);
    if (event.target.name === "name") {
      setName(event.target.value);
    } else {
      setUsername(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    const person = {
      id: Math.floor(Math.random() * 999) + 1,
      name: name,
      username: username,
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    };

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        name: name,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw Error("response not ok");
        }
        return response.json();
      })
      .then((json) => {
        console.log(json);
        alert("successfully created");
        props.foo(person);
      })
      .catch((error) => {
        alert(error);
      });

    event.preventDefault();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name: </Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Username:</Form.Label>

          <Form.Control
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default CreateTask;
