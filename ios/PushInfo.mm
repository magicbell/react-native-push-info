#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(PushInfo, NSObject)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
