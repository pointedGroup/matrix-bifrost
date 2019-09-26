import * as Chai from "chai";
import { BifrostProtocol } from "../src/bifrost/Protocol";
const expect = Chai.expect;

const dummyProtocol = new BifrostProtocol({
    id: "prpl-dummy",
    name: "Dummy",
    homepage: undefined,
    summary: undefined,
});

const XMPP = new BifrostProtocol({
    id: "prpl-jabber",
    name: "XMPP",
    homepage: undefined,
    summary: undefined,
});

// describe("ProtoHacks", () => {
//     describe("getSenderId", () => {
//         // it("XMPP (group-chat) should not modify senderId", () => {
//         //     expect(
//         //         ProtoHacks.getSenderId(XMPP, "testroom@conference.localhost/User1", true)
//         //     ).to.equal("testroom@conference.localhost/User1");
//         // });
//         // it("XMPP (im) should modify senderId", () => {
//         //     expect(
//         //         ProtoHacks.getSenderId(XMPP, "testuser1@localhost/somerandoclient", true)
//         //     ).to.equal("testuser1@localhost");
//         // });
//         // it("other protocols should not modify senderId", () => {
//         //     expect(
//         //         ProtoHacks.getSenderId(dummyProtocol, "abcdef", true),
//         //     ).to.equal("abcdef");
//         //     expect(
//         //         ProtoHacks.getSenderId(dummyProtocol, "abcdef", false),
//         //     ).to.equal("abcdef");
//         // });
//     });
// });
