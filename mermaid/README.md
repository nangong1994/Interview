<div align='center'>
  <h1>
    <b style='color: #ff3670'>Mermaid </b>
    <b style='color: #58a6ff'>Practice</b>
  </h1>
</div>

## 1. Flow Diagrams

```mermaid
flowchart LR
  head(head)
  num1(1)
  num2(2)
  numx(...)
  numn(N)

  head --> num1 --> num2 --> numx --> numn
```

## 2. Sequence Diagrams
[A Sequence diagram](https://mermaid.js.org/syntax/sequenceDiagram.html) is an interaction diagram that shows how processes operate with one another and in what order.  

For more detailed use samples, just go to path [sequence](./sequence/README.md).

```mermaid
sequenceDiagram

  Phoebe ->> Vera: Hello
  Vera ->> Phoebe: Hi there ...

```
