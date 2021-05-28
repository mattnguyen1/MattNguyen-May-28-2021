export default class MessageHandler {
  id: string;
  socket: WebSocket;

  constructor(id: string, socketUrl: string) {
    this.id = id;
    this.socket = new WebSocket(socketUrl);
    this.socket.onopen = () => {
      this.addEventListeners();
      this.handleConnected();
    };
  }

  addEventListeners(): void {
    this.socket.onmessage = (message: MessageEvent) => {
      this.handleMessage(message);
    };

    this.socket.onclose = () => {
      this.handleDisconnect();
    };
  }

  sendMessage(message: string): void {
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(message);
    }
  }

  disconnect(): void {
    this.socket.close();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleMessage(message: MessageEvent): void {
    // handle message
  }

  handleConnected(): void {
    // handle connected
  }

  handleDisconnect(): void {
    // handle disconnect
  }
}
