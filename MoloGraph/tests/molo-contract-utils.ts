import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  DeletedVideo,
  UploadedVideo
} from "../generated/MoloContract/MoloContract"

export function createDeletedVideoEvent(id: BigInt): DeletedVideo {
  let deletedVideoEvent = changetype<DeletedVideo>(newMockEvent())

  deletedVideoEvent.parameters = new Array()

  deletedVideoEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return deletedVideoEvent
}

export function createUploadedVideoEvent(
  id: BigInt,
  hash: string,
  title: string,
  description: string,
  location: string,
  category: string,
  thumbnailHash: string,
  date: string,
  author: Address
): UploadedVideo {
  let uploadedVideoEvent = changetype<UploadedVideo>(newMockEvent())

  uploadedVideoEvent.parameters = new Array()

  uploadedVideoEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  uploadedVideoEvent.parameters.push(
    new ethereum.EventParam("hash", ethereum.Value.fromString(hash))
  )
  uploadedVideoEvent.parameters.push(
    new ethereum.EventParam("title", ethereum.Value.fromString(title))
  )
  uploadedVideoEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  uploadedVideoEvent.parameters.push(
    new ethereum.EventParam("location", ethereum.Value.fromString(location))
  )
  uploadedVideoEvent.parameters.push(
    new ethereum.EventParam("category", ethereum.Value.fromString(category))
  )
  uploadedVideoEvent.parameters.push(
    new ethereum.EventParam(
      "thumbnailHash",
      ethereum.Value.fromString(thumbnailHash)
    )
  )
  uploadedVideoEvent.parameters.push(
    new ethereum.EventParam("date", ethereum.Value.fromString(date))
  )
  uploadedVideoEvent.parameters.push(
    new ethereum.EventParam("author", ethereum.Value.fromAddress(author))
  )

  return uploadedVideoEvent
}
