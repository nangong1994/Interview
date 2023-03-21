class ListNode { 
  /**@type { number } */
  pos;

  /**@type { number | boolean | string | object | symbol } */
  val;

  /**@type { ListNode } */
  next;

  //...
}

class LinkedList {
  /**@type { ListNode } */
  head;
  constructor() {
    this.head = {
      val : null,
      next: null
    }
  }

  /**
   * 
   * @param { ListNode } head 
   * 
   * @returns { ListNode }
   */
  static ringCheck(head) {
    if (!head || !head.next) {
      return false;
    }

    let slow = head;
    let fast = slow;
    let loop = false;

    while(fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;

      if (fast == slow) {
        loop = true;
        break;
      }
    }

    if (!loop) {
      return null
    }

    /**@type { ListNode } */
    let node = { pos: -1 };
    node.next = head;

    while (node != fast) {
      node = node.next;
      fast = fast.next;
    }

    return node;
  }
}