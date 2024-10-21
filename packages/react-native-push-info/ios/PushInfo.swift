import EmbeddedProvision

@objc(PushInfo)
class PushInfo: NSObject {
  lazy var embeddedProvision: EmbeddedProvision? = {
    return try? EmbeddedProvision.load()
  }()

  @objc
  func constantsToExport() -> [String: Any]! {
    return ["bundleId": Bundle.main.bundleIdentifier as Any,
            "teamId": embeddedProvision?.entitlements.teamId as Any,
            "apnsEnvironment": embeddedProvision?.entitlements.apsEnvironment?.rawValue as Any]
  }
}
