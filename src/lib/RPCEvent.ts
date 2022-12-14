class RPCEvent {
  public readonly event: string
  public readonly params?: any

  public constructor (data: IRPCEventObject) {
    this.event = data.event
    this.params = data.params
  }

  public toObject (): IRPCEventObject {
    return {
      event: this.event,
      params: this.params,
    }
  }
}

interface IRPCEventObject {
  event: string
  params?: any
}

export { RPCEvent, IRPCEventObject }
