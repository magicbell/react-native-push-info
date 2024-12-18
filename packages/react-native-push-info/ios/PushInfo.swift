import EmbeddedProvision

@objc(PushInfo)
class PushInfo: NSObject {
  lazy var embeddedProvision: EmbeddedProvision? = {
    return try? EmbeddedProvision.load()
  }()

  @objc
  func constantsToExport() -> [String: Any]! {
#if targetEnvironment(simulator)
    let apnsEnvironment = "development"
#else
    var apnsEnvironment = embeddedProvision?.entitlements.apsEnvironment?.rawValue
    if apnsEnvironment == nil {
      let isTestFlight = Bundle.main.appStoreReceiptURL?.lastPathComponent == "sandboxReceipt"
      apnsEnvironment = isTestFlight ? "production" : "development"
    }
#endif
    return ["bundleId": Bundle.main.bundleIdentifier as Any,
            "teamId": embeddedProvision?.entitlements.teamId as Any,
            "apnsEnvironment": apnsEnvironment as Any]
  }
}
