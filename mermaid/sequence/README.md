<div align='center'>
  <h1>
    <b style='color: #ff3670'>Sequence Diagram</b>
  </h1>
</div>

## Introduction
Sequence Diagram is one kind of diagrams which showing how the process handled with one another and in what order.


```mermaid
sequenceDiagram

  Phoebe ->> Vera: Hello, Bro, show your sequence diagram
  Vera ->> Phoebe: Hi, sure ...

```

## Syntax Code

- #### SequenceDiagram
  
  Tells `Mermaid` diagram type, which should be in the fist line of `Mermaid` code.

  ```javascript
    ...mermaid
    // %% Fist line, declare diagram type
    SequenceDiagram

      Phoebe ->> Vera: Hello
      Vera ->> Phoebe: sd
    
    ...

  ```

  ```mermaid
  sequenceDiagram

    Phoebe ->> Vera: Hello, Bro
    Vera ->> Phoebe: Hi ~, ...

  ```

- #### Participant

  - Implicitly define the participants and the participants are rendered in order of appearance in the diagram source text.
  
  - Define `aliases`, e.g, if the name of `participants` is too long, it will be a good choice to use aliases, ["Alice" => "A"]: `participant A as Alice`, **"A"** is the alias of **Alice**.

  ```javascript
    ...mermaid
    // %% Fist line, declare diagram type
    SequenceDiagram

      participant Phoebe
      participant Vera

      Phoebe ->> Vera: Hello, Bro
      Vera ->> Phoebe: Hi ~, ...
    
    ...
  ```

  ```mermaid
  sequenceDiagram
    participant Phoebe
    participant Vera

    Phoebe ->> Vera: Hello, Bro
    Vera ->> Phoebe: Hi ~, ...

  ```

- #### Actor
  - A symbol,  <img src='../img/actor.png' alt='actor shape' width='36px' style="transform: translateY(10px); margin-top: -16px"/> if you do not like defafult **rectangle** shape, you can use `actor` to declare.
  
  - **actor** can use `as` operation for name aliases also.
  
  ```javascript
    ...mermaid
    // %% Fist line, declare diagram type
    SequenceDiagram

      actor Phoebe
      actor Vera

      Phoebe ->> Vera: Hello, Bro
      Vera ->> Phoebe: Hi ~, ...
    
    ...
  ```

  ```mermaid
  sequenceDiagram
    actor Phoebe
    actor Vera

    Phoebe ->> Vera: Hello, Bro
    Vera ->> Phoebe: Hi ~, ...

  ```
   
- #### Grouping
  
  - Use `box` to group.
  
  - `box` and `end` need to use in pairs, otherwise mermaid can not render the diagram properly.
  
  - Color declare is  accessible for grouping, `box [color] [name]`, if color is ignored, the group background will be transparent.
  
  - Name aliases is not available in box declare. <br/> ![grouping/box](../img/grouping.png)

  ```javascript
    ...mermaid
    // %% Fist line, declare diagram type
    SequenceDiagram

      participant P as Phoebe
      participant V as Vera
      participant E as Eric

      box Group P and V
        participant P
        participant V
      end

      box orange Group E
       participant E
      end

      P ->> V: Hello, Bro
      V ->> P: Hi ~, ...

      E -->> P: Hi, I am new here 
    
    ...
  ```

  ```mermaid
  sequenceDiagram
    participant P as Phoebe
    participant V as Vera

    box Group P and V
      participant P
      participant V
    end

    participant E as Eric

    box orange Group E
      participant E
    end

    P ->> V: Hello, Bro
    V ->> P: Hi ~, ...

    E -->> P: Hi, I am new here 

  ```

- #### Messages

  - Messages can be of two displayed either **solid or with a dotted** line. 
  
  ```javascript
    [actor | participant] [arrow] [[actor | participant]]: message
  ```

  - Arrow types as below:
    - `->`  : Solid line without arrow, showing as
    ```mermaid
    sequenceDiagram
      
      P -> V: P and V linked by solid line without arrows.

    ```

    - `-->` : Dotted line without arrow, showing as
    ```mermaid
    sequenceDiagram

      P --> V: P and V linked by dotted line without arrows.

    ```

    - `->>` : Solid line with arrowhead, showing as
    ```mermaid
    sequenceDiagram

      P ->> V: P and V linked by solid line with arrows.

    ```
    
    - `-->>`: Dotted line with arrowhead, showing as
    ```mermaid
    sequenceDiagram

      P -->> V: P and V linked by dotted line with arrows.

    ```

    - `-x`  : Solid line with a cross at the end, showing as
    ```mermaid
    sequenceDiagram

      P -x V: P and V linked by solid line with a cross at the end.

    ```

    - `--x` : Dotted line with a cross at the end, showing as
    ```mermaid
    sequenceDiagram

      P --x V: P and V linked by dotted line with a cross at the end.

    ```

    - `-)`  : Solid line with an open arrow at the end (async), showing as
    ```mermaid
    sequenceDiagram

      P -) V: P and V linked by solid line with an open arrow at the end (async).

    ```

    - `--)` : Dotted line with a open arrow at the end (async), showing as
    ```mermaid
    sequenceDiagram

      P --) V: P and V linked by dotted line with an open arrow at the end (async).

    ```

