public class LinkedListQueue<AnyType> implements Queue<AnyType> {
	// Un noeud de la file
	@SuppressWarnings("hiding")
	private class Node<AnyType> {
		private AnyType data;
		private Node next;

		public Node(AnyType data, Node next) {
			this.data = data;
			this.next = next;
		}

		public void setNext(Node next) {
			this.next = next;
		}

		public Node<AnyType> getNext() {
			return next;
		}

		public AnyType getData() {
			return data;
		}
	}

	private int size = 0;        //Nombre d'elements dans la file.
	private Node<AnyType> first;
	private Node<AnyType> last;    //Dernier element de la liste

	//Indique si la file est vide
	public boolean empty() {
		return size == 0;
	}

	//Retourne la taille de la file
	public int size() {
		return size;
	}

	//Retourne l'element en tete de file
	//Retourne null si la file est vide
	//complexit? asymptotique: O(1)
	public AnyType peek() {
		if (empty()) {
			return null;
		} else {
			return first.data;
		}
	}

	//Retire l'element en tete de file
	//complexit? asymptotique: O(1)
	public void pop() throws EmptyQueueException
	{
		if( size ==0) {
			 EmptyQueueException error = new EmptyQueueException();
			throw error;
		}
		if (first.next == null)
			last = null;
		first = first.next;
		size--;
	}

	//Ajoute un element a la fin de la file
	//complexit? asymptotique: O(1)
	public void push(AnyType item)
	{
		Node node = new Node(item, null);
		if (empty()) {
			node.next = first;
			first = node;
			last = node;
		} else {
			last.next = node;
			last = node;
			last.next = null;
		}
		size++;
	}
}
