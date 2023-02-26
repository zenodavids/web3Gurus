import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { DeletedVideo } from "../generated/schema"
import { DeletedVideo as DeletedVideoEvent } from "../generated/MoloContract/MoloContract"
import { handleDeletedVideo } from "../src/molo-contract"
import { createDeletedVideoEvent } from "./molo-contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let id = BigInt.fromI32(234)
    let newDeletedVideoEvent = createDeletedVideoEvent(id)
    handleDeletedVideo(newDeletedVideoEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("DeletedVideo created and stored", () => {
    assert.entityCount("DeletedVideo", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
