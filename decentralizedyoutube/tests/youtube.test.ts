import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { VideoUploaded } from "../generated/schema"
import { VideoUploaded as VideoUploadedEvent } from "../generated/Youtube/Youtube"
import { handleVideoUploaded } from "../src/youtube"
import { createVideoUploadedEvent } from "./youtube-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let id = BigInt.fromI32(234)
    let hash = "Example string value"
    let title = "Example string value"
    let description = "Example string value"
    let location = "Example string value"
    let category = "Example string value"
    let thumbnailHash = "Example string value"
    let date = "Example string value"
    let author = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newVideoUploadedEvent = createVideoUploadedEvent(
      id,
      hash,
      title,
      description,
      location,
      category,
      thumbnailHash,
      date,
      author
    )
    handleVideoUploaded(newVideoUploadedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("VideoUploaded created and stored", () => {
    assert.entityCount("VideoUploaded", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "VideoUploaded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "hash",
      "Example string value"
    )
    assert.fieldEquals(
      "VideoUploaded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "title",
      "Example string value"
    )
    assert.fieldEquals(
      "VideoUploaded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "description",
      "Example string value"
    )
    assert.fieldEquals(
      "VideoUploaded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "location",
      "Example string value"
    )
    assert.fieldEquals(
      "VideoUploaded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "category",
      "Example string value"
    )
    assert.fieldEquals(
      "VideoUploaded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "thumbnailHash",
      "Example string value"
    )
    assert.fieldEquals(
      "VideoUploaded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "date",
      "Example string value"
    )
    assert.fieldEquals(
      "VideoUploaded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "author",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
